export type Locale = 'en' | 'de';

export const translations = {
  en: {
    // App
    appTitle: 'Gardevoir TCG Master',
    appSubtitle: 'Master Set Tracker',
    
    // Navigation
    navDatabase: 'Database',
    navCollection: 'My Collection',
    navStats: 'Stats',
    navTrade: 'Trade Binder',
    
    // Search
    searchPlaceholder: 'Search by card #, set, rarity...',
    searchHint: 'Tip: Type a card number like "245/198" to find it instantly',
    searchResults: 'results',
    noResults: 'No cards found',
    
    // Filters
    filterAll: 'All Cards',
    filterOwned: 'Owned',
    filterNeeded: 'Needed',
    filterTrades: 'Duplicates for Trade',
    sortBy: 'Sort by',
    sortPrice: 'Price',
    sortNumber: 'Card Number',
    sortSet: 'Set',
    sortRarity: 'Rarity',
    sortYear: 'Release Year',
    groupBy: 'Group by',
    groupSet: 'Set',
    groupEra: 'Era',
    groupLanguage: 'Language',
    groupRarity: 'Rarity',
    
    // Card Actions
    markOwned: 'Mark as Owned',
    markNeeded: 'Mark as Needed',
    updateQuantity: 'Update Quantity',
    owned: 'Owned',
    needed: 'Needed',
    forTrade: 'For Trade',
    qty: 'Qty',
    
    // Stats
    totalCards: 'Total Cards',
    ownedCards: 'Owned',
    neededCards: 'Needed',
    completion: 'Completion',
    estimatedValue: 'Est. Collection Value',
    missingValue: 'Missing Cards Value',
    duplicates: 'Duplicates',
    artworkCompletion: 'Unique Artworks',
    
    // Trade Binder
    tradeBinder: 'Trade Binder',
    tradeBinderDesc: 'Cards with qty > 1 available for trading',
    noTradeCards: 'No duplicate cards yet',
    
    // Import/Export
    exportData: 'Export',
    importData: 'Import',
    exportSuccess: 'Collection exported!',
    importSuccess: 'Collection imported!',
    importError: 'Invalid file format',
    
    // Theme & Lang
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    language: 'Language',
    
    // Misc
    price: 'Price',
    rarity: 'Rarity',
    set: 'Set',
    number: 'Number',
    era: 'Era',
    type: 'Type',
    artist: 'Artist',
    notes: 'Notes',
    language_label: 'Language',
    allLanguages: 'All Languages',
    allEras: 'All Eras',
    allRarities: 'All Rarities',
    convention: 'Convention Mode',
    conventionDesc: 'Quick search — type a card number to instantly check your collection',
    owned_badge: 'OWNED',
    needed_badge: 'NEED',
    duplicate_badge: 'DUPE',
    na: 'N/A',
    close: 'Close',
    resetFilters: 'Reset Filters',
    lastUpdated: 'Last updated',
    secretRare: 'Secret Rare',
    showAll: 'Show All',
    collapse: 'Collapse',
    cardDetails: 'Card Details',
  },
  de: {
    // App
    appTitle: 'Gardevoir TCG Meister',
    appSubtitle: 'Master-Set Tracker',
    
    // Navigation
    navDatabase: 'Datenbank',
    navCollection: 'Meine Sammlung',
    navStats: 'Statistiken',
    navTrade: 'Tauschmappe',
    
    // Search
    searchPlaceholder: 'Suche nach Kartennummer, Set, Seltenheit...',
    searchHint: 'Tipp: Kartennummer eingeben, z.B. "245/198" für schnellen Zugriff',
    searchResults: 'Ergebnisse',
    noResults: 'Keine Karten gefunden',
    
    // Filters
    filterAll: 'Alle Karten',
    filterOwned: 'Besessen',
    filterNeeded: 'Gesucht',
    filterTrades: 'Duplikate zum Tausch',
    sortBy: 'Sortieren nach',
    sortPrice: 'Preis',
    sortNumber: 'Kartennummer',
    sortSet: 'Set',
    sortRarity: 'Seltenheit',
    sortYear: 'Erscheinungsjahr',
    groupBy: 'Gruppieren nach',
    groupSet: 'Set',
    groupEra: 'Ära',
    groupLanguage: 'Sprache',
    groupRarity: 'Seltenheit',
    
    // Card Actions
    markOwned: 'Als besessen markieren',
    markNeeded: 'Als gesucht markieren',
    updateQuantity: 'Anzahl ändern',
    owned: 'Besessen',
    needed: 'Gesucht',
    forTrade: 'Zum Tausch',
    qty: 'Anz.',
    
    // Stats
    totalCards: 'Karten gesamt',
    ownedCards: 'Besessen',
    neededCards: 'Gesucht',
    completion: 'Vollständigkeit',
    estimatedValue: 'Geschätzter Sammlungswert',
    missingValue: 'Wert fehlender Karten',
    duplicates: 'Duplikate',
    artworkCompletion: 'Einzigartige Artworks',
    
    // Trade Binder
    tradeBinder: 'Tauschmappe',
    tradeBinderDesc: 'Karten mit Anzahl > 1 stehen zum Tausch',
    noTradeCards: 'Noch keine Duplikate',
    
    // Import/Export
    exportData: 'Exportieren',
    importData: 'Importieren',
    exportSuccess: 'Sammlung exportiert!',
    importSuccess: 'Sammlung importiert!',
    importError: 'Ungültiges Dateiformat',
    
    // Theme & Lang
    lightMode: 'Hellmodus',
    darkMode: 'Dunkelmodus',
    language: 'Sprache',
    
    // Misc
    price: 'Preis',
    rarity: 'Seltenheit',
    set: 'Set',
    number: 'Nummer',
    era: 'Ära',
    type: 'Typ',
    artist: 'Künstler',
    notes: 'Notizen',
    language_label: 'Sprache',
    allLanguages: 'Alle Sprachen',
    allEras: 'Alle Ären',
    allRarities: 'Alle Seltenheiten',
    convention: 'Messe-Modus',
    conventionDesc: 'Schnellsuche — Kartennummer eingeben für sofortige Sammlung',
    owned_badge: 'BESITZ',
    needed_badge: 'SUCHE',
    duplicate_badge: 'DUPLI',
    na: 'N/V',
    close: 'Schließen',
    resetFilters: 'Filter zurücksetzen',
    lastUpdated: 'Zuletzt aktualisiert',
    secretRare: 'Geheime Seltenheit',
    showAll: 'Alle anzeigen',
    collapse: 'Einklappen',
    cardDetails: 'Kartendetails',
  },
};

export type TranslationKey = keyof typeof translations.en;
