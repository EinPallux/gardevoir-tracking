'use client';

import { useMemo, useState } from 'react';
import { useApp } from '@/lib/store';
import { CARD_DATABASE, ERAS, LANGUAGE_LABELS, isArtworkCollected } from '@/lib/cardDatabase';
import type { Card } from '@/lib/cardDatabase';
import { CardItem } from './CardItem';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MagnifyingGlass,
  SlidersHorizontal,
  ArrowUp,
  ArrowDown,
  X,
  CaretDown,
  CaretRight,
} from '@phosphor-icons/react';

interface DatabaseViewProps {
  mode: 'all' | 'collection';
}

export function DatabaseView({ mode }: DatabaseViewProps) {
  const { state, dispatch, t } = useApp();
  const [showFilters, setShowFilters] = useState(false);
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set());

  // Gather unique filter options
  const allLanguages = useMemo(() => {
    const langs = new Set(CARD_DATABASE.map(c => c.language));
    return Array.from(langs);
  }, []);
  const allEras = useMemo(() => {
    const eras = new Set(CARD_DATABASE.map(c => c.era));
    return Array.from(eras);
  }, []);
  const allRarities = useMemo(() => {
    const rarities = new Set(CARD_DATABASE.map(c => c.rarity));
    return Array.from(rarities).sort();
  }, []);

  // Filter and sort
  const filteredCards = useMemo(() => {
    let cards = [...CARD_DATABASE];

    // Mode filter
    if (mode === 'collection') {
      if (state.filterOwnership === 'all') {
        cards = cards.filter(c => state.collection[c.id]?.qty > 0);
      }
    }

    // Ownership filter
    if (state.filterOwnership === 'owned') {
      // Owned = this specific card is owned
      cards = cards.filter(c => (state.collection[c.id]?.qty ?? 0) > 0);
    } else if (state.filterOwnership === 'needed') {
      // Needed = no copy of this card, AND no other language of same artwork is owned
      cards = cards.filter(c =>
        (state.collection[c.id]?.qty ?? 0) === 0 &&
        !isArtworkCollected(c.artworkGroup, state.collection)
      );
    } else if (state.filterOwnership === 'trades') {
      cards = cards.filter(c => (state.collection[c.id]?.qty ?? 0) > 1);
    }

    // Language filter
    if (state.filterLanguage !== 'all') {
      cards = cards.filter(c => c.language === state.filterLanguage);
    }

    // Era filter
    if (state.filterEra !== 'all') {
      cards = cards.filter(c => c.era === state.filterEra);
    }

    // Rarity filter
    if (state.filterRarity !== 'all') {
      cards = cards.filter(c => c.rarity === state.filterRarity);
    }

    // Search
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase().trim();
      cards = cards.filter(c =>
        c.number.toLowerCase().includes(q) ||
        c.name.toLowerCase().includes(q) ||
        c.set.toLowerCase().includes(q) ||
        c.rarity.toLowerCase().includes(q) ||
        c.language.toLowerCase().includes(q) ||
        (c.artist && c.artist.toLowerCase().includes(q)) ||
        (c.notes && c.notes.toLowerCase().includes(q))
      );
    }

    // Sort
    cards.sort((a, b) => {
      let cmp = 0;
      switch (state.sortBy) {
        case 'price':
          cmp = (a.price ?? -1) - (b.price ?? -1);
          break;
        case 'number':
          cmp = a.number.localeCompare(b.number, undefined, { numeric: true });
          break;
        case 'set':
          cmp = a.set.localeCompare(b.set);
          break;
        case 'rarity':
          cmp = a.rarity.localeCompare(b.rarity);
          break;
        case 'year':
        default:
          cmp = a.releaseYear - b.releaseYear || a.set.localeCompare(b.set);
          break;
      }
      return state.sortDir === 'asc' ? cmp : -cmp;
    });

    return cards;
  }, [state.collection, state.searchQuery, state.sortBy, state.sortDir,
    state.filterOwnership, state.filterLanguage, state.filterEra, state.filterRarity, mode]);

  // Group cards
  const groups = useMemo(() => {
    if (state.groupBy === 'none') {
      return [{ key: 'all', label: `${filteredCards.length} ${t('searchResults')}`, cards: filteredCards }];
    }
    const map = new Map<string, Card[]>();
    filteredCards.forEach(card => {
      let key = '';
      let label = '';
      switch (state.groupBy) {
        case 'era':
          key = card.era;
          label = ERAS[card.era] || card.era;
          break;
        case 'set':
          key = card.set;
          label = card.set;
          break;
        case 'language':
          key = card.language;
          label = `${card.language} — ${LANGUAGE_LABELS[card.language]}`;
          break;
        case 'rarity':
          key = card.rarity;
          label = card.rarity;
          break;
      }
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(card);
    });
    return Array.from(map.entries()).map(([key, cards]) => ({
      key,
      label: state.groupBy === 'era'
        ? (ERAS[key as Card['era']] || key)
        : key,
      cards,
    }));
  }, [filteredCards, state.groupBy, t]);

  const activeFilterCount = [
    state.filterOwnership !== 'all',
    state.filterLanguage !== 'all',
    state.filterEra !== 'all',
    state.filterRarity !== 'all',
  ].filter(Boolean).length;

  function toggleGroup(key: string) {
    setCollapsedGroups(prev => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 pt-4 pb-24 md:pb-8">
      {/* Search & Filter Bar */}
      <div className="flex flex-col gap-3 mb-5">
        {/* Search */}
        <div className="relative">
          <MagnifyingGlass
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: 'var(--text-muted)' }}
          />
          <input
            type="search"
            placeholder={t('searchPlaceholder')}
            value={state.searchQuery}
            onChange={e => dispatch({ type: 'SET_SEARCH', query: e.target.value })}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none border transition-all"
            style={{
              background: 'var(--bg-card)',
              borderColor: state.searchQuery ? 'var(--accent)' : 'var(--border)',
              color: 'var(--text-primary)',
            }}
          />
          {state.searchQuery && (
            <button
              onClick={() => dispatch({ type: 'SET_SEARCH', query: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2"
              style={{ color: 'var(--text-muted)' }}
            >
              <X size={14} />
            </button>
          )}
        </div>

        {/* Filter / Sort Row */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Filter toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-all"
            style={{
              background: showFilters || activeFilterCount > 0 ? 'var(--accent-subtle)' : 'var(--bg-card)',
              color: showFilters || activeFilterCount > 0 ? 'var(--accent)' : 'var(--text-secondary)',
              borderColor: activeFilterCount > 0 ? 'var(--accent)' : 'var(--border)',
            }}
          >
            <SlidersHorizontal size={14} />
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-0.5 px-1.5 py-0 rounded-full text-xs font-bold" style={{ background: 'var(--accent)', color: '#fff' }}>
                {activeFilterCount}
              </span>
            )}
          </button>

          {/* Quick ownership filters */}
          {(['all', 'owned', 'needed', 'trades'] as const).map(f => (
            <button
              key={f}
              onClick={() => dispatch({ type: 'SET_FILTER_OWNERSHIP', filter: f })}
              className="px-3 py-1.5 rounded-lg text-sm font-medium border transition-all"
              style={{
                background: state.filterOwnership === f ? 'var(--accent)' : 'var(--bg-card)',
                color: state.filterOwnership === f ? '#fff' : 'var(--text-secondary)',
                borderColor: state.filterOwnership === f ? 'var(--accent)' : 'var(--border)',
              }}
            >
              {t(`filter${f.charAt(0).toUpperCase() + f.slice(1)}` as any)}
            </button>
          ))}

          {/* Sort */}
          <div className="ml-auto flex items-center gap-2">
            <select
              value={state.sortBy}
              onChange={e => dispatch({ type: 'SET_SORT', sortBy: e.target.value as any })}
              className="px-2.5 py-1.5 rounded-lg text-sm border outline-none cursor-pointer"
              style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)', borderColor: 'var(--border)' }}
            >
              <option value="year">{t('sortYear')}</option>
              <option value="price">{t('sortPrice')}</option>
              <option value="number">{t('sortNumber')}</option>
              <option value="set">{t('sortSet')}</option>
              <option value="rarity">{t('sortRarity')}</option>
            </select>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_SORT_DIR' })}
              className="p-1.5 rounded-lg border transition-all"
              style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)', borderColor: 'var(--border)' }}
            >
              {state.sortDir === 'asc' ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
            </button>

            {/* Group by */}
            <select
              value={state.groupBy}
              onChange={e => dispatch({ type: 'SET_GROUP_BY', groupBy: e.target.value as any })}
              className="px-2.5 py-1.5 rounded-lg text-sm border outline-none cursor-pointer"
              style={{ background: 'var(--bg-card)', color: 'var(--text-secondary)', borderColor: 'var(--border)' }}
            >
              <option value="era">{t('groupEra')}</option>
              <option value="set">{t('groupSet')}</option>
              <option value="language">{t('groupLanguage')}</option>
              <option value="rarity">{t('groupRarity')}</option>
              <option value="none">No grouping</option>
            </select>
          </div>
        </div>

        {/* Expanded Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
              className="overflow-hidden"
            >
              <div
                className="p-4 rounded-xl border grid grid-cols-2 md:grid-cols-4 gap-4"
                style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
              >
                {/* Language */}
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>{t('language_label')}</label>
                  <select
                    value={state.filterLanguage}
                    onChange={e => dispatch({ type: 'SET_FILTER_LANGUAGE', language: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg text-sm border outline-none"
                    style={{ background: 'var(--bg-elevated)', color: 'var(--text-primary)', borderColor: 'var(--border)' }}
                  >
                    <option value="all">{t('allLanguages')}</option>
                    {allLanguages.map(l => <option key={l} value={l}>{LANGUAGE_LABELS[l]} ({l})</option>)}
                  </select>
                </div>

                {/* Era */}
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>{t('era')}</label>
                  <select
                    value={state.filterEra}
                    onChange={e => dispatch({ type: 'SET_FILTER_ERA', era: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg text-sm border outline-none"
                    style={{ background: 'var(--bg-elevated)', color: 'var(--text-primary)', borderColor: 'var(--border)' }}
                  >
                    <option value="all">{t('allEras')}</option>
                    {allEras.map(e => <option key={e} value={e}>{ERAS[e as Card['era']] || e}</option>)}
                  </select>
                </div>

                {/* Rarity */}
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: 'var(--text-muted)' }}>{t('rarity')}</label>
                  <select
                    value={state.filterRarity}
                    onChange={e => dispatch({ type: 'SET_FILTER_RARITY', rarity: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-lg text-sm border outline-none"
                    style={{ background: 'var(--bg-elevated)', color: 'var(--text-primary)', borderColor: 'var(--border)' }}
                  >
                    <option value="all">{t('allRarities')}</option>
                    {allRarities.map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>

                {/* Reset */}
                <div className="flex items-end">
                  <button
                    onClick={() => dispatch({ type: 'RESET_FILTERS' })}
                    className="w-full px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors"
                    style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', borderColor: 'var(--border)' }}
                  >
                    {t('resetFilters')}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results count */}
        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
          {filteredCards.length} {t('searchResults')}
          {activeFilterCount > 0 && ' (filtered)'}
        </div>
      </div>

      {/* Card Groups */}
      {filteredCards.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="text-4xl mb-4">🌹</div>
          <div className="text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{t('noResults')}</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Try adjusting your filters or search query</div>
          <button
            onClick={() => dispatch({ type: 'RESET_FILTERS' })}
            className="mt-4 px-4 py-2 rounded-xl text-sm font-medium transition-colors"
            style={{ background: 'var(--accent)', color: '#fff' }}
          >
            {t('resetFilters')}
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {groups.map(group => {
            const isCollapsed = collapsedGroups.has(group.key);
            const ownedInGroup = group.cards.filter(c => state.collection[c.id]?.qty > 0).length;
            const pct = Math.round((ownedInGroup / group.cards.length) * 100);

            return (
              <div key={group.key}>
                {/* Group Header */}
                {state.groupBy !== 'none' && (
                  <button
                    onClick={() => toggleGroup(group.key)}
                    className="w-full flex items-center gap-3 mb-3 group"
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      {isCollapsed ? <CaretRight size={14} style={{ color: 'var(--text-muted)' }} /> : <CaretDown size={14} style={{ color: 'var(--text-muted)' }} />}
                      <span className="text-sm font-bold truncate" style={{ color: 'var(--text-primary)' }}>{group.label}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full font-mono"
                        style={{ background: 'var(--bg-elevated)', color: 'var(--text-muted)' }}>
                        {ownedInGroup}/{group.cards.length}
                      </span>
                    </div>
                    {/* Group progress */}
                    <div className="hidden sm:flex items-center gap-2 shrink-0">
                      <div className="w-20 h-1 rounded-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ width: `${pct}%`, background: pct === 100 ? 'var(--owned-color)' : 'var(--accent)' }}
                        />
                      </div>
                      <span className="text-xs font-mono w-8 text-right" style={{ color: 'var(--text-muted)' }}>{pct}%</span>
                    </div>
                    <div className="h-px flex-1 ml-2 hidden sm:block" style={{ background: 'var(--border)' }} />
                  </button>
                )}

                {/* Cards Grid */}
                <AnimatePresence>
                  {!isCollapsed && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ type: 'spring', duration: 0.35, bounce: 0 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">
                        {group.cards.map((card, idx) => (
                          <CardItem key={card.id} card={card} index={idx} />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
