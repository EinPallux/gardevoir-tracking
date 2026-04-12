'use client';

import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import type { Locale } from './i18n';
import { translations } from './i18n';

export interface CollectionEntry {
  qty: number;
  dateAdded: string;
}

export interface AppState {
  // Collection: cardId -> CollectionEntry
  collection: Record<string, CollectionEntry>;
  // UI State
  theme: 'light' | 'dark';
  locale: Locale;
  view: 'database' | 'collection' | 'stats' | 'trade';
  searchQuery: string;
  sortBy: 'price' | 'number' | 'set' | 'rarity' | 'year';
  sortDir: 'asc' | 'desc';
  filterOwnership: 'all' | 'owned' | 'needed' | 'trades';
  filterLanguage: string;
  filterEra: string;
  filterRarity: string;
  groupBy: 'set' | 'era' | 'language' | 'rarity' | 'none';
  conventionMode: boolean;
}

type Action =
  | { type: 'SET_QUANTITY'; cardId: string; qty: number }
  | { type: 'TOGGLE_THEME' }
  | { type: 'SET_LOCALE'; locale: Locale }
  | { type: 'SET_VIEW'; view: AppState['view'] }
  | { type: 'SET_SEARCH'; query: string }
  | { type: 'SET_SORT'; sortBy: AppState['sortBy'] }
  | { type: 'TOGGLE_SORT_DIR' }
  | { type: 'SET_FILTER_OWNERSHIP'; filter: AppState['filterOwnership'] }
  | { type: 'SET_FILTER_LANGUAGE'; language: string }
  | { type: 'SET_FILTER_ERA'; era: string }
  | { type: 'SET_FILTER_RARITY'; rarity: string }
  | { type: 'SET_GROUP_BY'; groupBy: AppState['groupBy'] }
  | { type: 'TOGGLE_CONVENTION' }
  | { type: 'IMPORT_STATE'; state: Partial<AppState> }
  | { type: 'RESET_FILTERS' };

const initialState: AppState = {
  collection: {},
  theme: 'dark',
  locale: 'en',
  view: 'database',
  searchQuery: '',
  sortBy: 'year',
  sortDir: 'asc',
  filterOwnership: 'all',
  filterLanguage: 'all',
  filterEra: 'all',
  filterRarity: 'all',
  groupBy: 'era',
  conventionMode: false,
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'SET_QUANTITY': {
      const newCollection = { ...state.collection };
      if (action.qty <= 0) {
        delete newCollection[action.cardId];
      } else {
        newCollection[action.cardId] = {
          qty: action.qty,
          dateAdded: newCollection[action.cardId]?.dateAdded || new Date().toISOString(),
        };
      }
      return { ...state, collection: newCollection };
    }
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };
    case 'SET_LOCALE':
      return { ...state, locale: action.locale };
    case 'SET_VIEW':
      return { ...state, view: action.view };
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.query };
    case 'SET_SORT':
      return { ...state, sortBy: action.sortBy };
    case 'TOGGLE_SORT_DIR':
      return { ...state, sortDir: state.sortDir === 'asc' ? 'desc' : 'asc' };
    case 'SET_FILTER_OWNERSHIP':
      return { ...state, filterOwnership: action.filter };
    case 'SET_FILTER_LANGUAGE':
      return { ...state, filterLanguage: action.language };
    case 'SET_FILTER_ERA':
      return { ...state, filterEra: action.era };
    case 'SET_FILTER_RARITY':
      return { ...state, filterRarity: action.rarity };
    case 'SET_GROUP_BY':
      return { ...state, groupBy: action.groupBy };
    case 'TOGGLE_CONVENTION':
      return { ...state, conventionMode: !state.conventionMode };
    case 'IMPORT_STATE':
      return { ...state, ...action.state };
    case 'RESET_FILTERS':
      return {
        ...state,
        filterOwnership: 'all',
        filterLanguage: 'all',
        filterEra: 'all',
        filterRarity: 'all',
        searchQuery: '',
      };
    default:
      return state;
  }
}

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
  t: (key: keyof typeof translations.en) => string;
} | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Load from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('gardevoir-tracker-v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        dispatch({ type: 'IMPORT_STATE', state: parsed });
      }
    } catch {
      // ignore
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    try {
      const toSave = {
        collection: state.collection,
        theme: state.theme,
        locale: state.locale,
        sortBy: state.sortBy,
        sortDir: state.sortDir,
        groupBy: state.groupBy,
      };
      localStorage.setItem('gardevoir-tracker-v1', JSON.stringify(toSave));
    } catch {
      // ignore
    }
  }, [state.collection, state.theme, state.locale, state.sortBy, state.sortDir, state.groupBy]);

  // Apply theme to html element
  useEffect(() => {
    document.documentElement.classList.toggle('dark', state.theme === 'dark');
  }, [state.theme]);

  const t = (key: keyof typeof translations.en) => {
    return translations[state.locale][key] || translations.en[key] || key;
  };

  return (
    <AppContext.Provider value={{ state, dispatch, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
