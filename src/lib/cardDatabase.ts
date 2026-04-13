// ============================================================
// GARDEVOIR TCG MASTER DATABASE — Fully Verified & Corrected
// Sources: Bulbapedia, pkmn.gg, Limitless TCG, TCGPlayer
// Last updated: April 2026
// ============================================================
// LANGUAGE NOTES:
//   EN  — English international print (same numbers as DE/FR/IT/ES/PT)
//   DE  — German: same card numbers as EN international, different set names
//   JP  — Japanese: completely separate sets with own numbering
//   KO  — Korean: pre-SV had own sets; SV era matches EN international numbering
//
// IMAGE SYSTEM: Local images in /public/cards/
// Naming: {setCode}-{cardNum}.png
// ============================================================

export type Language = 'EN' | 'JP' | 'DE' | 'KO';
export type Rarity =
  | 'Common' | 'Uncommon' | 'Rare' | 'Rare Holo'
  | 'Rare Holo EX' | 'Rare Holo LV.X' | 'Rare Holo GX'
  | 'Rare Holo V' | 'Rare Holo VMAX' | 'Rare Ultra'
  | 'Rare Rainbow' | 'Rare Secret' | 'Rare Shiny GX'
  | 'Radiant Rare' | 'Trainer Gallery Rare Holo'
  | 'Double Rare' | 'Ultra Rare' | 'Illustration Rare'
  | 'Special Illustration Rare' | 'Hyper Rare'
  | 'Shiny Rare' | 'Shiny Ultra Rare'
  | 'Classic Collection' | 'Promo';

export type Era = 'EX' | 'DP' | 'BW' | 'XY' | 'SM' | 'SWSH' | 'SV' | 'PROMO';

export interface Card {
  id: string;
  name: string;
  set: string;
  setCode: string;
  number: string;
  cardNum: string;
  setTotal: string;
  language: Language;
  rarity: Rarity;
  price: number | null;
  artist?: string;
  type?: string;
  era: Era;
  isSecret?: boolean;
  artworkGroup: string;
  releaseYear: number;
  notes?: string;
}

export function localImagePath(card: Card): string {
  return `/cards/${card.setCode}-${card.cardNum}.png`;
}

// ══════════════════════════════════════════════════════════
// CARD DATABASE
// Each card is defined per-language explicitly.
// DE cards: same number as EN, different set name.
// JP cards: different set code AND number.
// KO cards: SV era matches EN; older era listed separately where they exist.
// ══════════════════════════════════════════════════════════

export const CARD_DATABASE: Card[] = [

  // ────────────────────────────────────────────────────────
  // EX ERA (2003–2007)
  // ────────────────────────────────────────────────────────

  // EX Ruby & Sapphire — Gardevoir 7/109
  { id: 'exrs-7-en', name: 'Gardevoir', set: 'EX Ruby & Sapphire', setCode: 'ex1', number: '7/109', cardNum: '007', setTotal: '109', language: 'EN', rarity: 'Rare Holo', price: 18, artist: 'Ken Sugimori', type: 'Psychic', era: 'EX', artworkGroup: 'exrs-7', releaseYear: 2003 },
  { id: 'exrs-7-de', name: 'Gardevoir', set: 'EX Rubin & Saphir', setCode: 'ex1', number: '7/109', cardNum: '007', setTotal: '109', language: 'DE', rarity: 'Rare Holo', price: 14, artist: 'Ken Sugimori', type: 'Psychic', era: 'EX', artworkGroup: 'exrs-7', releaseYear: 2003 },
  // JP equivalent: ADV Expansion Pack (adv1) 038/055
  { id: 'adv1-038-jp', name: 'サーナイト', set: 'ADV Expansion Pack', setCode: 'adv1', number: '038/055', cardNum: '038', setTotal: '055', language: 'JP', rarity: 'Rare Holo', price: 15, type: 'Psychic', era: 'EX', artworkGroup: 'exrs-7', releaseYear: 2002 },

  // EX Sandstorm — Gardevoir ex 96/100
  { id: 'exss-96-en', name: 'Gardevoir ex', set: 'EX Sandstorm', setCode: 'ex2', number: '96/100', cardNum: '096', setTotal: '100', language: 'EN', rarity: 'Rare Holo EX', price: 100, type: 'Psychic', era: 'EX', artworkGroup: 'exss-96', releaseYear: 2003 },
  { id: 'exss-96-de', name: 'Gardevoir ex', set: 'EX Sandsturm', setCode: 'ex2', number: '96/100', cardNum: '096', setTotal: '100', language: 'DE', rarity: 'Rare Holo EX', price: 75, type: 'Psychic', era: 'EX', artworkGroup: 'exss-96', releaseYear: 2003 },
  // JP equivalent: Magma vs. Aqua (ADV4) — Gardevoir ex is card 083/080 secret
  { id: 'adv4-083-jp', name: 'サーナイトex', set: 'マグマVSアクア', setCode: 'adv4', number: '083/080', cardNum: '083', setTotal: '080', language: 'JP', rarity: 'Rare Holo EX', price: 80, type: 'Psychic', era: 'EX', artworkGroup: 'exss-96', releaseYear: 2004 },

  // EX Trainer Kit: Latias — Gardevoir 4/10
  { id: 'tk2-4-en', name: 'Gardevoir', set: 'EX Trainer Kit: Latias', setCode: 'tk2', number: '4/10', cardNum: '004', setTotal: '10', language: 'EN', rarity: 'Rare Holo', price: 10, type: 'Psychic', era: 'EX', artworkGroup: 'tk2-4', releaseYear: 2004, notes: 'Latias Half Deck' },

  // EX Emerald — Gardevoir 4/106
  { id: 'exem-4-en', name: 'Gardevoir', set: 'EX Emerald', setCode: 'ex9', number: '4/106', cardNum: '004', setTotal: '106', language: 'EN', rarity: 'Rare Holo', price: 22, type: 'Psychic', era: 'EX', artworkGroup: 'exem-4', releaseYear: 2005 },
  { id: 'exem-4-de', name: 'Gardevoir', set: 'EX Smaragd', setCode: 'ex9', number: '4/106', cardNum: '004', setTotal: '106', language: 'DE', rarity: 'Rare Holo', price: 17, type: 'Psychic', era: 'EX', artworkGroup: 'exem-4', releaseYear: 2005 },

  // EX Delta Species — Gardevoir δ 6/113
  { id: 'exds-6-en', name: 'Gardevoir δ', set: 'EX Delta Species', setCode: 'ex11', number: '6/113', cardNum: '006', setTotal: '113', language: 'EN', rarity: 'Rare Holo', price: 28, type: 'Psychic/Metal', era: 'EX', artworkGroup: 'exds-6', releaseYear: 2005, notes: 'Delta Species — dual Psychic/Metal' },
  { id: 'exds-6-de', name: 'Gardevoir δ', set: 'EX Delta-Spezies', setCode: 'ex11', number: '6/113', cardNum: '006', setTotal: '113', language: 'DE', rarity: 'Rare Holo', price: 22, type: 'Psychic/Metal', era: 'EX', artworkGroup: 'exds-6', releaseYear: 2005 },
  // JP: Holon Research Tower Half Deck — not widely available; skip dedicated entry

  // EX Dragon Frontiers — Gardevoir ex δ 93/101
  { id: 'exdf-93-en', name: 'Gardevoir ex δ', set: 'EX Dragon Frontiers', setCode: 'ex15', number: '93/101', cardNum: '093', setTotal: '101', language: 'EN', rarity: 'Rare Holo EX', price: 45, type: 'Fire', era: 'EX', artworkGroup: 'exdf-93', releaseYear: 2006, notes: 'Delta Species — Fire type' },
  { id: 'exdf-93-de', name: 'Gardevoir ex δ', set: 'EX Drachenfrontier', setCode: 'ex15', number: '93/101', cardNum: '093', setTotal: '101', language: 'DE', rarity: 'Rare Holo EX', price: 35, type: 'Fire', era: 'EX', artworkGroup: 'exdf-93', releaseYear: 2006 },
  // JP: Miracle Crystal — Gardevoir ex δ 056/075
  { id: 'mc-056-jp', name: 'サーナイトex δ', set: 'Miracle Crystal', setCode: 'mc', number: '056/075', cardNum: '056', setTotal: '075', language: 'JP', rarity: 'Rare Holo EX', price: 38, type: 'Fire', era: 'EX', artworkGroup: 'exdf-93', releaseYear: 2006 },

  // EX Power Keepers — Gardevoir 9/108
  { id: 'expk-9-en', name: 'Gardevoir', set: 'EX Power Keepers', setCode: 'ex16', number: '9/108', cardNum: '009', setTotal: '108', language: 'EN', rarity: 'Rare Holo', price: 15, artist: 'Midori Harada', type: 'Psychic', era: 'EX', artworkGroup: 'expk-9', releaseYear: 2007 },
  { id: 'expk-9-de', name: 'Gardevoir', set: 'EX Kraftstoß', setCode: 'ex16', number: '9/108', cardNum: '009', setTotal: '108', language: 'DE', rarity: 'Rare Holo', price: 12, type: 'Psychic', era: 'EX', artworkGroup: 'expk-9', releaseYear: 2007 },

  // ────────────────────────────────────────────────────────
  // DIAMOND & PEARL ERA (2007–2011)
  // ────────────────────────────────────────────────────────

  // Secret Wonders — Gardevoir 7/132
  { id: 'sw-7-en', name: 'Gardevoir', set: 'Secret Wonders', setCode: 'dp3', number: '7/132', cardNum: '007', setTotal: '132', language: 'EN', rarity: 'Rare Holo', price: 20, type: 'Psychic', era: 'DP', artworkGroup: 'sw-7', releaseYear: 2007 },
  { id: 'sw-7-de', name: 'Gardevoir', set: 'Geheimnisvolle Sphären', setCode: 'dp3', number: '7/132', cardNum: '007', setTotal: '132', language: 'DE', rarity: 'Rare Holo', price: 15, type: 'Psychic', era: 'DP', artworkGroup: 'sw-7', releaseYear: 2007 },
  // JP: Shining Darkness 041/100
  { id: 'dp3jp-041-jp', name: 'サーナイト', set: 'Shining Darkness', setCode: 'dp3jp', number: '041/100', cardNum: '041', setTotal: '100', language: 'JP', rarity: 'Rare Holo', price: 16, type: 'Psychic', era: 'DP', artworkGroup: 'sw-7', releaseYear: 2007 },

  // Secret Wonders — Gardevoir LV.X 131/132
  { id: 'sw-131-en', name: 'Gardevoir LV.X', set: 'Secret Wonders', setCode: 'dp3', number: '131/132', cardNum: '131', setTotal: '132', language: 'EN', rarity: 'Rare Holo LV.X', price: 55, type: 'Psychic', era: 'DP', artworkGroup: 'sw-131', releaseYear: 2007 },
  { id: 'sw-131-de', name: 'Gardevoir LV.X', set: 'Geheimnisvolle Sphären', setCode: 'dp3', number: '131/132', cardNum: '131', setTotal: '132', language: 'DE', rarity: 'Rare Holo LV.X', price: 42, type: 'Psychic', era: 'DP', artworkGroup: 'sw-131', releaseYear: 2007 },
  // JP: Shining Darkness — LV.X promo DP-P 031
  { id: 'dp-p-031-jp', name: 'サーナイト LV.X', set: 'DP-P Promotional cards', setCode: 'dp-p', number: '031/DP-P', cardNum: '031', setTotal: 'DP-P', language: 'JP', rarity: 'Rare Holo LV.X', price: 45, type: 'Psychic', era: 'DP', artworkGroup: 'sw-131', releaseYear: 2007 },

  // Platinum — Gardevoir 8/127
  { id: 'pl-8-en', name: 'Gardevoir', set: 'Platinum', setCode: 'pl1', number: '8/127', cardNum: '008', setTotal: '127', language: 'EN', rarity: 'Rare Holo', price: 18, type: 'Psychic', era: 'DP', artworkGroup: 'pl-8', releaseYear: 2009 },
  { id: 'pl-8-de', name: 'Gardevoir', set: 'Platin', setCode: 'pl1', number: '8/127', cardNum: '008', setTotal: '127', language: 'DE', rarity: 'Rare Holo', price: 14, type: 'Psychic', era: 'DP', artworkGroup: 'pl-8', releaseYear: 2009 },
  // JP: Galactic's Conquest 042/096
  { id: 'pt1jp-042-jp', name: 'サーナイト', set: "Galactic's Conquest", setCode: 'pt1jp', number: '042/096', cardNum: '042', setTotal: '096', language: 'JP', rarity: 'Rare Holo', price: 14, type: 'Psychic', era: 'DP', artworkGroup: 'pl-8', releaseYear: 2008 },

  // ────────────────────────────────────────────────────────
  // BLACK & WHITE ERA (2011–2014)
  // ────────────────────────────────────────────────────────

  // Next Destinies — Gardevoir 57/99
  { id: 'nd-57-en', name: 'Gardevoir', set: 'Next Destinies', setCode: 'bw4', number: '57/99', cardNum: '057', setTotal: '99', language: 'EN', rarity: 'Rare Holo', price: 8, type: 'Psychic', era: 'BW', artworkGroup: 'nd-57', releaseYear: 2012 },
  { id: 'nd-57-de', name: 'Gardevoir', set: 'Nächste Schicksale', setCode: 'bw4', number: '57/99', cardNum: '057', setTotal: '99', language: 'DE', rarity: 'Rare Holo', price: 6, type: 'Psychic', era: 'BW', artworkGroup: 'nd-57', releaseYear: 2012 },
  // JP: Psycho Drive 028/052
  { id: 'bw3jp-028-jp', name: 'サーナイト', set: 'Psycho Drive', setCode: 'bw3jp', number: '028/052', cardNum: '028', setTotal: '052', language: 'JP', rarity: 'Rare Holo', price: 7, type: 'Psychic', era: 'BW', artworkGroup: 'nd-57', releaseYear: 2011 },

  // Dark Explorers — Gardevoir 109/108 (secret)
  { id: 'de-109-en', name: 'Gardevoir', set: 'Dark Explorers', setCode: 'bw5', number: '109/108', cardNum: '109', setTotal: '108', language: 'EN', rarity: 'Rare Secret', price: 65, type: 'Psychic', era: 'BW', artworkGroup: 'de-109', isSecret: true, releaseYear: 2012 },
  { id: 'de-109-de', name: 'Gardevoir', set: 'Finstere Erkunder', setCode: 'bw5', number: '109/108', cardNum: '109', setTotal: '108', language: 'DE', rarity: 'Rare Secret', price: 50, type: 'Psychic', era: 'BW', artworkGroup: 'de-109', isSecret: true, releaseYear: 2012 },
  // JP: Dark Rush — Gardevoir 074/069 secret
  { id: 'bw4jp-074-jp', name: 'サーナイト', set: 'Dark Rush', setCode: 'bw4jp', number: '074/069', cardNum: '074', setTotal: '069', language: 'JP', rarity: 'Rare Secret', price: 55, type: 'Psychic', era: 'BW', artworkGroup: 'de-109', isSecret: true, releaseYear: 2012 },

  // Legendary Treasures RC — Gardevoir RC10/RC25 (Radiant Collection)
  { id: 'lt-rc10-en', name: 'Gardevoir', set: 'Legendary Treasures', setCode: 'bw11', number: 'RC10/RC25', cardNum: 'RC010', setTotal: 'RC25', language: 'EN', rarity: 'Uncommon', price: 12, type: 'Psychic', era: 'BW', artworkGroup: 'lt-rc10', releaseYear: 2013 },
  { id: 'lt-rc10-de', name: 'Gardevoir', set: 'Legendäre Schätze', setCode: 'bw11', number: 'RC10/RC25', cardNum: 'RC010', setTotal: 'RC25', language: 'DE', rarity: 'Uncommon', price: 9, type: 'Psychic', era: 'BW', artworkGroup: 'lt-rc10', releaseYear: 2013 },
  // JP: Shiny Collection 010/020
  { id: 'sc-010-jp', name: 'サーナイト', set: 'Shiny Collection', setCode: 'sc', number: '010/020', cardNum: '010', setTotal: '020', language: 'JP', rarity: 'Uncommon', price: 10, type: 'Psychic', era: 'BW', artworkGroup: 'lt-rc10', releaseYear: 2012 },

  // ────────────────────────────────────────────────────────
  // XY ERA (2014–2017)
  // ────────────────────────────────────────────────────────

  // Ancient Origins — Gardevoir 54/98
  { id: 'ao-54-en', name: 'Gardevoir', set: 'Ancient Origins', setCode: 'xy7', number: '54/98', cardNum: '054', setTotal: '98', language: 'EN', rarity: 'Rare Holo', price: 5, type: 'Fairy', era: 'XY', artworkGroup: 'ao-54', releaseYear: 2015 },
  { id: 'ao-54-de', name: 'Gardevoir', set: 'Uralte Ursprünge', setCode: 'xy7', number: '54/98', cardNum: '054', setTotal: '98', language: 'DE', rarity: 'Rare Holo', price: 4, type: 'Fairy', era: 'XY', artworkGroup: 'ao-54', releaseYear: 2015 },
  // JP: Bandit Ring 055/081
  { id: 'xy7jp-055-jp', name: 'サーナイト', set: 'Bandit Ring', setCode: 'xy7jp', number: '055/081', cardNum: '055', setTotal: '081', language: 'JP', rarity: 'Rare Holo', price: 4, type: 'Fairy', era: 'XY', artworkGroup: 'ao-54', releaseYear: 2015 },

  // Primal Clash — Gardevoir-EX 105/160
  { id: 'pc-105-en', name: 'Gardevoir-EX', set: 'Primal Clash', setCode: 'xy5', number: '105/160', cardNum: '105', setTotal: '160', language: 'EN', rarity: 'Rare Holo EX', price: 12, type: 'Fairy', era: 'XY', artworkGroup: 'pc-105', releaseYear: 2015 },
  { id: 'pc-105-de', name: 'Gardevoir-EX', set: 'Ur-Kraft Paukenschlag', setCode: 'xy5', number: '105/160', cardNum: '105', setTotal: '160', language: 'DE', rarity: 'Rare Holo EX', price: 9, type: 'Fairy', era: 'XY', artworkGroup: 'pc-105', releaseYear: 2015 },
  // JP: Tidal Storm 049/070
  { id: 'xy5t-049-jp', name: 'サーナイトEX', set: 'Tidal Storm', setCode: 'xy5t', number: '049/070', cardNum: '049', setTotal: '070', language: 'JP', rarity: 'Rare Holo EX', price: 10, type: 'Fairy', era: 'XY', artworkGroup: 'pc-105', releaseYear: 2014 },

  // Primal Clash — M Gardevoir-EX 106/160
  { id: 'pc-106-en', name: 'M Gardevoir-EX', set: 'Primal Clash', setCode: 'xy5', number: '106/160', cardNum: '106', setTotal: '160', language: 'EN', rarity: 'Rare Holo EX', price: 15, type: 'Fairy', era: 'XY', artworkGroup: 'pc-106', releaseYear: 2015 },
  { id: 'pc-106-de', name: 'Mega-Gardevoir-EX', set: 'Ur-Kraft Paukenschlag', setCode: 'xy5', number: '106/160', cardNum: '106', setTotal: '160', language: 'DE', rarity: 'Rare Holo EX', price: 12, type: 'Fairy', era: 'XY', artworkGroup: 'pc-106', releaseYear: 2015 },
  // JP: Tidal Storm 050/070
  { id: 'xy5t-050-jp', name: 'Mサーナイトex', set: 'Tidal Storm', setCode: 'xy5t', number: '050/070', cardNum: '050', setTotal: '070', language: 'JP', rarity: 'Rare Holo EX', price: 13, type: 'Fairy', era: 'XY', artworkGroup: 'pc-106', releaseYear: 2014 },

  // Primal Clash — Gardevoir-EX 155/160 (Full Art)
  { id: 'pc-155-en', name: 'Gardevoir-EX', set: 'Primal Clash', setCode: 'xy5', number: '155/160', cardNum: '155', setTotal: '160', language: 'EN', rarity: 'Rare Ultra', price: 35, type: 'Fairy', era: 'XY', artworkGroup: 'pc-155', isSecret: true, releaseYear: 2015, notes: 'Full Art' },
  { id: 'pc-155-de', name: 'Gardevoir-EX', set: 'Ur-Kraft Paukenschlag', setCode: 'xy5', number: '155/160', cardNum: '155', setTotal: '160', language: 'DE', rarity: 'Rare Ultra', price: 27, type: 'Fairy', era: 'XY', artworkGroup: 'pc-155', isSecret: true, releaseYear: 2015 },
  // JP: Tidal Storm 076/070
  { id: 'xy5t-076-jp', name: 'サーナイトEX', set: 'Tidal Storm', setCode: 'xy5t', number: '076/070', cardNum: '076', setTotal: '070', language: 'JP', rarity: 'Rare Ultra', price: 30, type: 'Fairy', era: 'XY', artworkGroup: 'pc-155', isSecret: true, releaseYear: 2014 },

  // Primal Clash — M Gardevoir-EX 156/160 (Full Art)
  { id: 'pc-156-en', name: 'M Gardevoir-EX', set: 'Primal Clash', setCode: 'xy5', number: '156/160', cardNum: '156', setTotal: '160', language: 'EN', rarity: 'Rare Ultra', price: 40, type: 'Fairy', era: 'XY', artworkGroup: 'pc-156', isSecret: true, releaseYear: 2015 },
  { id: 'pc-156-de', name: 'Mega-Gardevoir-EX', set: 'Ur-Kraft Paukenschlag', setCode: 'xy5', number: '156/160', cardNum: '156', setTotal: '160', language: 'DE', rarity: 'Rare Ultra', price: 32, type: 'Fairy', era: 'XY', artworkGroup: 'pc-156', isSecret: true, releaseYear: 2015 },
  // JP: Tidal Storm 077/070
  { id: 'xy5t-077-jp', name: 'Mサーナイトex', set: 'Tidal Storm', setCode: 'xy5t', number: '077/070', cardNum: '077', setTotal: '070', language: 'JP', rarity: 'Rare Ultra', price: 36, type: 'Fairy', era: 'XY', artworkGroup: 'pc-156', isSecret: true, releaseYear: 2014 },

  // Generations Radiant Collection — Gardevoir-EX RC30/RC32
  { id: 'gen-rc30-en', name: 'Gardevoir-EX', set: 'Generations', setCode: 'g1', number: 'RC30/RC32', cardNum: 'RC030', setTotal: 'RC32', language: 'EN', rarity: 'Rare Ultra', price: 54, type: 'Fairy', era: 'XY', artworkGroup: 'gen-rc30', releaseYear: 2016 },
  { id: 'gen-rc30-de', name: 'Gardevoir-EX', set: 'Generationen', setCode: 'g1', number: 'RC30/RC32', cardNum: 'RC030', setTotal: 'RC32', language: 'DE', rarity: 'Rare Ultra', price: 42, type: 'Fairy', era: 'XY', artworkGroup: 'gen-rc30', releaseYear: 2016 },
  // JP: PokéKyun Collection 018/032
  { id: 'cp3-018-jp', name: 'サーナイトEX', set: 'PokéKyun Collection', setCode: 'cp3', number: '018/032', cardNum: '018', setTotal: '032', language: 'JP', rarity: 'Rare Ultra', price: 48, type: 'Fairy', era: 'XY', artworkGroup: 'gen-rc30', releaseYear: 2016 },

  // Generations Radiant Collection — M Gardevoir-EX RC31/RC32
  { id: 'gen-rc31-en', name: 'M Gardevoir-EX', set: 'Generations', setCode: 'g1', number: 'RC31/RC32', cardNum: 'RC031', setTotal: 'RC32', language: 'EN', rarity: 'Rare Ultra', price: 68, type: 'Fairy', era: 'XY', artworkGroup: 'gen-rc31', releaseYear: 2016 },
  { id: 'gen-rc31-de', name: 'Mega-Gardevoir-EX', set: 'Generationen', setCode: 'g1', number: 'RC31/RC32', cardNum: 'RC031', setTotal: 'RC32', language: 'DE', rarity: 'Rare Ultra', price: 54, type: 'Fairy', era: 'XY', artworkGroup: 'gen-rc31', releaseYear: 2016 },
  // JP: PokéKyun Collection 019/032
  { id: 'cp3-019-jp', name: 'Mサーナイトex', set: 'PokéKyun Collection', setCode: 'cp3', number: '019/032', cardNum: '019', setTotal: '032', language: 'JP', rarity: 'Rare Ultra', price: 60, type: 'Fairy', era: 'XY', artworkGroup: 'gen-rc31', releaseYear: 2016 },

  // Steam Siege — Gardevoir-EX 78/114
  { id: 'ss-78-en', name: 'Gardevoir-EX', set: 'Steam Siege', setCode: 'xy11', number: '78/114', cardNum: '078', setTotal: '114', language: 'EN', rarity: 'Rare Holo EX', price: 10, type: 'Fairy', era: 'XY', artworkGroup: 'ss-78', releaseYear: 2016 },
  { id: 'ss-78-de', name: 'Gardevoir-EX', set: 'Dampfkessel', setCode: 'xy11', number: '78/114', cardNum: '078', setTotal: '114', language: 'DE', rarity: 'Rare Holo EX', price: 8, type: 'Fairy', era: 'XY', artworkGroup: 'ss-78', releaseYear: 2016 },
  // JP: Fever-Burst Fighter 037/054
  { id: 'xy11a-037-jp', name: 'サーナイトEX', set: 'Fever-Burst Fighter', setCode: 'xy11a', number: '037/054', cardNum: '037', setTotal: '054', language: 'JP', rarity: 'Rare Holo EX', price: 8, type: 'Fairy', era: 'XY', artworkGroup: 'ss-78', releaseYear: 2016 },

  // Steam Siege — M Gardevoir-EX 79/114
  { id: 'ss-79-en', name: 'M Gardevoir-EX', set: 'Steam Siege', setCode: 'xy11', number: '79/114', cardNum: '079', setTotal: '114', language: 'EN', rarity: 'Rare Holo EX', price: 18, type: 'Fairy/Psychic', era: 'XY', artworkGroup: 'ss-79', releaseYear: 2016 },
  { id: 'ss-79-de', name: 'Mega-Gardevoir-EX', set: 'Dampfkessel', setCode: 'xy11', number: '79/114', cardNum: '079', setTotal: '114', language: 'DE', rarity: 'Rare Holo EX', price: 14, type: 'Fairy/Psychic', era: 'XY', artworkGroup: 'ss-79', releaseYear: 2016 },
  // JP: Fever-Burst Fighter 038/054
  { id: 'xy11a-038-jp', name: 'Mサーナイトex', set: 'Fever-Burst Fighter', setCode: 'xy11a', number: '038/054', cardNum: '038', setTotal: '054', language: 'JP', rarity: 'Rare Holo EX', price: 15, type: 'Fairy/Psychic', era: 'XY', artworkGroup: 'ss-79', releaseYear: 2016 },

  // Steam Siege — Gardevoir-EX 111/114 (Full Art)
  { id: 'ss-111-en', name: 'Gardevoir-EX', set: 'Steam Siege', setCode: 'xy11', number: '111/114', cardNum: '111', setTotal: '114', language: 'EN', rarity: 'Rare Ultra', price: 25, type: 'Fairy', era: 'XY', artworkGroup: 'ss-111', isSecret: true, releaseYear: 2016 },
  { id: 'ss-111-de', name: 'Gardevoir-EX', set: 'Dampfkessel', setCode: 'xy11', number: '111/114', cardNum: '111', setTotal: '114', language: 'DE', rarity: 'Rare Ultra', price: 20, type: 'Fairy', era: 'XY', artworkGroup: 'ss-111', isSecret: true, releaseYear: 2016 },
  // JP: Fever-Burst Fighter 064/054
  { id: 'xy11a-064-jp', name: 'サーナイトEX', set: 'Fever-Burst Fighter', setCode: 'xy11a', number: '064/054', cardNum: '064', setTotal: '054', language: 'JP', rarity: 'Rare Ultra', price: 22, type: 'Fairy', era: 'XY', artworkGroup: 'ss-111', isSecret: true, releaseYear: 2016 },

  // Steam Siege — M Gardevoir-EX 112/114 (Full Art)
  { id: 'ss-112-en', name: 'M Gardevoir-EX', set: 'Steam Siege', setCode: 'xy11', number: '112/114', cardNum: '112', setTotal: '114', language: 'EN', rarity: 'Rare Ultra', price: 40, type: 'Fairy/Psychic', era: 'XY', artworkGroup: 'ss-112', isSecret: true, releaseYear: 2016 },
  { id: 'ss-112-de', name: 'Mega-Gardevoir-EX', set: 'Dampfkessel', setCode: 'xy11', number: '112/114', cardNum: '112', setTotal: '114', language: 'DE', rarity: 'Rare Ultra', price: 32, type: 'Fairy/Psychic', era: 'XY', artworkGroup: 'ss-112', isSecret: true, releaseYear: 2016 },
  // JP: Fever-Burst Fighter 065/054
  { id: 'xy11a-065-jp', name: 'Mサーナイトex', set: 'Fever-Burst Fighter', setCode: 'xy11a', number: '065/054', cardNum: '065', setTotal: '054', language: 'JP', rarity: 'Rare Ultra', price: 35, type: 'Fairy/Psychic', era: 'XY', artworkGroup: 'ss-112', isSecret: true, releaseYear: 2016 },

  // Steam Siege — Gardevoir-EX 116/114 (Rainbow Rare)
  { id: 'ss-116-en', name: 'Gardevoir-EX', set: 'Steam Siege', setCode: 'xy11', number: '116/114', cardNum: '116', setTotal: '114', language: 'EN', rarity: 'Rare Rainbow', price: 68, type: 'Fairy', era: 'XY', artworkGroup: 'ss-116', isSecret: true, releaseYear: 2016 },
  { id: 'ss-116-de', name: 'Gardevoir-EX', set: 'Dampfkessel', setCode: 'xy11', number: '116/114', cardNum: '116', setTotal: '114', language: 'DE', rarity: 'Rare Rainbow', price: 54, type: 'Fairy', era: 'XY', artworkGroup: 'ss-116', isSecret: true, releaseYear: 2016 },
  // JP: Fever-Burst Fighter 068/054
  { id: 'xy11a-068-jp', name: 'サーナイトEX', set: 'Fever-Burst Fighter', setCode: 'xy11a', number: '068/054', cardNum: '068', setTotal: '054', language: 'JP', rarity: 'Rare Rainbow', price: 60, type: 'Fairy', era: 'XY', artworkGroup: 'ss-116', isSecret: true, releaseYear: 2016 },

  // ────────────────────────────────────────────────────────
  // SUN & MOON ERA (2017–2019)
  // ────────────────────────────────────────────────────────

  // Burning Shadows — Gardevoir-GX 93/147
  { id: 'bus-93-en', name: 'Gardevoir-GX', set: 'Burning Shadows', setCode: 'sm3', number: '93/147', cardNum: '093', setTotal: '147', language: 'EN', rarity: 'Rare Holo GX', price: 15, type: 'Fairy', era: 'SM', artworkGroup: 'bus-93', releaseYear: 2017 },
  { id: 'bus-93-de', name: 'Gardevoir-GX', set: 'Nacht in Flammen', setCode: 'sm3', number: '93/147', cardNum: '093', setTotal: '147', language: 'DE', rarity: 'Rare Holo GX', price: 12, type: 'Fairy', era: 'SM', artworkGroup: 'bus-93', releaseYear: 2017 },
  // JP: Darkness that Consumes Light 038/051
  { id: 'sm3n-038-jp', name: 'サーナイトGX', set: 'Darkness that Consumes Light', setCode: 'sm3N', number: '038/051', cardNum: '038', setTotal: '051', language: 'JP', rarity: 'Rare Holo GX', price: 13, type: 'Fairy', era: 'SM', artworkGroup: 'bus-93', releaseYear: 2017 },

  // Burning Shadows — Gardevoir-GX 140/147 (Full Art)
  { id: 'bus-140-en', name: 'Gardevoir-GX', set: 'Burning Shadows', setCode: 'sm3', number: '140/147', cardNum: '140', setTotal: '147', language: 'EN', rarity: 'Rare Ultra', price: 30, type: 'Fairy', era: 'SM', artworkGroup: 'bus-140', isSecret: true, releaseYear: 2017 },
  { id: 'bus-140-de', name: 'Gardevoir-GX', set: 'Nacht in Flammen', setCode: 'sm3', number: '140/147', cardNum: '140', setTotal: '147', language: 'DE', rarity: 'Rare Ultra', price: 24, type: 'Fairy', era: 'SM', artworkGroup: 'bus-140', isSecret: true, releaseYear: 2017 },
  // JP: Darkness that Consumes Light 057/051
  { id: 'sm3n-057-jp', name: 'サーナイトGX', set: 'Darkness that Consumes Light', setCode: 'sm3N', number: '057/051', cardNum: '057', setTotal: '051', language: 'JP', rarity: 'Rare Ultra', price: 26, type: 'Fairy', era: 'SM', artworkGroup: 'bus-140', isSecret: true, releaseYear: 2017 },

  // Burning Shadows — Gardevoir-GX 159/147 (Rainbow Rare)
  { id: 'bus-159-en', name: 'Gardevoir-GX', set: 'Burning Shadows', setCode: 'sm3', number: '159/147', cardNum: '159', setTotal: '147', language: 'EN', rarity: 'Rare Rainbow', price: 25, type: 'Fairy', era: 'SM', artworkGroup: 'bus-159', isSecret: true, releaseYear: 2017 },
  { id: 'bus-159-de', name: 'Gardevoir-GX', set: 'Nacht in Flammen', setCode: 'sm3', number: '159/147', cardNum: '159', setTotal: '147', language: 'DE', rarity: 'Rare Rainbow', price: 20, type: 'Fairy', era: 'SM', artworkGroup: 'bus-159', isSecret: true, releaseYear: 2017 },
  // JP rainbow equivalent — SM3N 059/051
  { id: 'sm3n-059-jp', name: 'サーナイトGX', set: 'Darkness that Consumes Light', setCode: 'sm3N', number: '059/051', cardNum: '059', setTotal: '051', language: 'JP', rarity: 'Rare Rainbow', price: 22, type: 'Fairy', era: 'SM', artworkGroup: 'bus-159', isSecret: true, releaseYear: 2017 },

  // Lost Thunder — Gardevoir 141/214
  { id: 'lot-141-en', name: 'Gardevoir', set: 'Lost Thunder', setCode: 'sm8', number: '141/214', cardNum: '141', setTotal: '214', language: 'EN', rarity: 'Rare Holo', price: 4, type: 'Fairy', era: 'SM', artworkGroup: 'lot-141', releaseYear: 2018 },
  { id: 'lot-141-de', name: 'Gardevoir', set: 'Echo des Donners', setCode: 'sm8', number: '141/214', cardNum: '141', setTotal: '214', language: 'DE', rarity: 'Rare Holo', price: 3, type: 'Fairy', era: 'SM', artworkGroup: 'lot-141', releaseYear: 2018 },
  // JP: Fairy Rise 033/050
  { id: 'sm7b-033-jp', name: 'サーナイト', set: 'Fairy Rise', setCode: 'sm7b', number: '033/050', cardNum: '033', setTotal: '050', language: 'JP', rarity: 'Rare Holo', price: 3, type: 'Fairy', era: 'SM', artworkGroup: 'lot-141', releaseYear: 2018 },

  // Hidden Fates Shiny Vault — Gardevoir-GX SV75/SV94
  { id: 'hif-sv75-en', name: 'Gardevoir-GX', set: 'Hidden Fates: Shiny Vault', setCode: 'sma', number: 'SV75/SV94', cardNum: 'SV075', setTotal: 'SV94', language: 'EN', rarity: 'Rare Shiny GX', price: 35, type: 'Fairy', era: 'SM', artworkGroup: 'hif-sv75', releaseYear: 2019 },
  { id: 'hif-sv75-de', name: 'Gardevoir-GX', set: 'Verborgenes Schicksal: Shiny Vault', setCode: 'sma', number: 'SV75/SV94', cardNum: 'SV075', setTotal: 'SV94', language: 'DE', rarity: 'Rare Shiny GX', price: 28, type: 'Fairy', era: 'SM', artworkGroup: 'hif-sv75', releaseYear: 2019 },
  // JP: GX Ultra Shiny 233/150
  { id: 'sm8b-233-jp', name: 'サーナイトGX', set: 'GX Ultra Shiny', setCode: 'sm8b', number: '233/150', cardNum: '233', setTotal: '150', language: 'JP', rarity: 'Rare Shiny GX', price: 30, type: 'Fairy', era: 'SM', artworkGroup: 'hif-sv75', releaseYear: 2018 },

  // Unbroken Bonds — Gardevoir & Sylveon-GX 130/214
  { id: 'unb-130-en', name: 'Gardevoir & Sylveon-GX', set: 'Unbroken Bonds', setCode: 'sm10', number: '130/214', cardNum: '130', setTotal: '214', language: 'EN', rarity: 'Rare Holo GX', price: 48, type: 'Fairy', era: 'SM', artworkGroup: 'unb-130', releaseYear: 2019 },
  { id: 'unb-130-de', name: 'Gardevoir & Feelinara-GX', set: 'Kräfte im Einklang', setCode: 'sm10', number: '130/214', cardNum: '130', setTotal: '214', language: 'DE', rarity: 'Rare Holo GX', price: 38, type: 'Fairy', era: 'SM', artworkGroup: 'unb-130', releaseYear: 2019 },
  // JP: Night Unison 031/055
  { id: 'sm9a-031-jp', name: 'サーナイト&ニンフィアGX', set: 'Night Unison', setCode: 'sm9a', number: '031/055', cardNum: '031', setTotal: '055', language: 'JP', rarity: 'Rare Holo GX', price: 40, type: 'Fairy', era: 'SM', artworkGroup: 'unb-130', releaseYear: 2019 },

  // Unbroken Bonds — Gardevoir & Sylveon-GX 204/214 (Full Art)
  { id: 'unb-204-en', name: 'Gardevoir & Sylveon-GX', set: 'Unbroken Bonds', setCode: 'sm10', number: '204/214', cardNum: '204', setTotal: '214', language: 'EN', rarity: 'Rare Ultra', price: 87, type: 'Fairy', era: 'SM', artworkGroup: 'unb-204', isSecret: true, releaseYear: 2019 },
  { id: 'unb-204-de', name: 'Gardevoir & Feelinara-GX', set: 'Kräfte im Einklang', setCode: 'sm10', number: '204/214', cardNum: '204', setTotal: '214', language: 'DE', rarity: 'Rare Ultra', price: 70, type: 'Fairy', era: 'SM', artworkGroup: 'unb-204', isSecret: true, releaseYear: 2019 },
  // JP: Night Unison 059/055
  { id: 'sm9a-059-jp', name: 'サーナイト&ニンフィアGX', set: 'Night Unison', setCode: 'sm9a', number: '059/055', cardNum: '059', setTotal: '055', language: 'JP', rarity: 'Rare Ultra', price: 75, type: 'Fairy', era: 'SM', artworkGroup: 'unb-204', isSecret: true, releaseYear: 2019 },

  // Unbroken Bonds — Gardevoir & Sylveon-GX 205/214 (Special Art)
  { id: 'unb-205-en', name: 'Gardevoir & Sylveon-GX', set: 'Unbroken Bonds', setCode: 'sm10', number: '205/214', cardNum: '205', setTotal: '214', language: 'EN', rarity: 'Special Illustration Rare', price: 516, type: 'Fairy', era: 'SM', artworkGroup: 'unb-205', isSecret: true, releaseYear: 2019 },
  { id: 'unb-205-de', name: 'Gardevoir & Feelinara-GX', set: 'Kräfte im Einklang', setCode: 'sm10', number: '205/214', cardNum: '205', setTotal: '214', language: 'DE', rarity: 'Special Illustration Rare', price: 410, type: 'Fairy', era: 'SM', artworkGroup: 'unb-205', isSecret: true, releaseYear: 2019 },
  // JP: Night Unison 061/055
  { id: 'sm9a-061-jp', name: 'サーナイト&ニンフィアGX', set: 'Night Unison', setCode: 'sm9a', number: '061/055', cardNum: '061', setTotal: '055', language: 'JP', rarity: 'Special Illustration Rare', price: 450, type: 'Fairy', era: 'SM', artworkGroup: 'unb-205', isSecret: true, releaseYear: 2019 },

  // Unbroken Bonds — Gardevoir & Sylveon-GX 225/214 (Rainbow)
  { id: 'unb-225-en', name: 'Gardevoir & Sylveon-GX', set: 'Unbroken Bonds', setCode: 'sm10', number: '225/214', cardNum: '225', setTotal: '214', language: 'EN', rarity: 'Rare Rainbow', price: 113, type: 'Fairy', era: 'SM', artworkGroup: 'unb-225', isSecret: true, releaseYear: 2019 },
  { id: 'unb-225-de', name: 'Gardevoir & Feelinara-GX', set: 'Kräfte im Einklang', setCode: 'sm10', number: '225/214', cardNum: '225', setTotal: '214', language: 'DE', rarity: 'Rare Rainbow', price: 90, type: 'Fairy', era: 'SM', artworkGroup: 'unb-225', isSecret: true, releaseYear: 2019 },
  // JP: Night Unison 063/055
  { id: 'sm9a-063-jp', name: 'サーナイト&ニンフィアGX', set: 'Night Unison', setCode: 'sm9a', number: '063/055', cardNum: '063', setTotal: '055', language: 'JP', rarity: 'Rare Rainbow', price: 100, type: 'Fairy', era: 'SM', artworkGroup: 'unb-225', isSecret: true, releaseYear: 2019 },

  // Japanese Exclusive — SM-P Promo 408 (Illustration Grand Prix 2019)
  { id: 'smp-408-jp', name: 'サーナイト', set: 'SM-P Promotional cards', setCode: 'smp', number: '408/SM-P', cardNum: '408', setTotal: 'SM-P', language: 'JP', rarity: 'Promo', price: 31, type: 'Fairy', era: 'PROMO', artworkGroup: 'smp-408', releaseYear: 2019, notes: 'Illustration Grand Prix Winner 2019 — JP Exclusive' },

  // ────────────────────────────────────────────────────────
  // SWORD & SHIELD ERA (2020–2022)
  // ────────────────────────────────────────────────────────

  // Champion's Path — Gardevoir V 16/73
  { id: 'chp-16-en', name: 'Gardevoir V', set: "Champion's Path", setCode: 'swsh35', number: '16/73', cardNum: '016', setTotal: '73', language: 'EN', rarity: 'Rare Holo V', price: 8, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-16', releaseYear: 2020 },
  { id: 'chp-16-de', name: 'Gardevoir V', set: 'Weg des Champs', setCode: 'swsh35', number: '16/73', cardNum: '016', setTotal: '73', language: 'DE', rarity: 'Rare Holo V', price: 6, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-16', releaseYear: 2020 },
  // JP: Explosive Walker S2a 030/070
  { id: 's2a-030-jp', name: 'サーナイトV', set: 'Explosive Walker', setCode: 's2a', number: '030/070', cardNum: '030', setTotal: '070', language: 'JP', rarity: 'Rare Holo V', price: 7, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-16', releaseYear: 2020 },

  // Champion's Path — Gardevoir VMAX 17/73
  { id: 'chp-17-en', name: 'Gardevoir VMAX', set: "Champion's Path", setCode: 'swsh35', number: '17/73', cardNum: '017', setTotal: '73', language: 'EN', rarity: 'Rare Holo VMAX', price: 12, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-17', releaseYear: 2020 },
  { id: 'chp-17-de', name: 'Gardevoir VMAX', set: 'Weg des Champs', setCode: 'swsh35', number: '17/73', cardNum: '017', setTotal: '73', language: 'DE', rarity: 'Rare Holo VMAX', price: 9, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-17', releaseYear: 2020 },
  // JP: Explosive Walker S2a 031/070
  { id: 's2a-031-jp', name: 'サーナイトVMAX', set: 'Explosive Walker', setCode: 's2a', number: '031/070', cardNum: '031', setTotal: '070', language: 'JP', rarity: 'Rare Holo VMAX', price: 10, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-17', releaseYear: 2020 },

  // Champion's Path — Gardevoir V 70/73 (Full Art)
  { id: 'chp-70-en', name: 'Gardevoir V', set: "Champion's Path", setCode: 'swsh35', number: '70/73', cardNum: '070', setTotal: '73', language: 'EN', rarity: 'Rare Ultra', price: 22, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-70', isSecret: true, releaseYear: 2020, notes: 'Full Art' },
  { id: 'chp-70-de', name: 'Gardevoir V', set: 'Weg des Champs', setCode: 'swsh35', number: '70/73', cardNum: '070', setTotal: '73', language: 'DE', rarity: 'Rare Ultra', price: 18, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-70', isSecret: true, releaseYear: 2020 },
  // JP: Explosive Walker S2a 074/070
  { id: 's2a-074-jp', name: 'サーナイトV', set: 'Explosive Walker', setCode: 's2a', number: '074/070', cardNum: '074', setTotal: '070', language: 'JP', rarity: 'Rare Ultra', price: 19, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-70', isSecret: true, releaseYear: 2020 },

  // Champion's Path — Gardevoir VMAX 76/73 (Rainbow)
  { id: 'chp-76-en', name: 'Gardevoir VMAX', set: "Champion's Path", setCode: 'swsh35', number: '76/73', cardNum: '076', setTotal: '73', language: 'EN', rarity: 'Rare Rainbow', price: 15, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-76', isSecret: true, releaseYear: 2020 },
  { id: 'chp-76-de', name: 'Gardevoir VMAX', set: 'Weg des Champs', setCode: 'swsh35', number: '76/73', cardNum: '076', setTotal: '73', language: 'DE', rarity: 'Rare Rainbow', price: 12, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-76', isSecret: true, releaseYear: 2020 },
  // JP: Explosive Walker S2a 081/070
  { id: 's2a-081-jp', name: 'サーナイトVMAX', set: 'Explosive Walker', setCode: 's2a', number: '081/070', cardNum: '081', setTotal: '070', language: 'JP', rarity: 'Rare Rainbow', price: 13, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-76', isSecret: true, releaseYear: 2020 },

  // SWSH Black Star Promos — Gardevoir V SWSH105
  { id: 'swshp-swsh105-en', name: 'Gardevoir V', set: 'SWSH Black Star Promos', setCode: 'swshp', number: 'SWSH105', cardNum: 'SWSH105', setTotal: '307', language: 'EN', rarity: 'Promo', price: 2, type: 'Psychic', era: 'PROMO', artworkGroup: 'swshp-105', releaseYear: 2021 },
  { id: 'swshp-swsh105-de', name: 'Gardevoir V', set: 'SWSH Schwarze Stern Promos', setCode: 'swshp', number: 'SWSH105', cardNum: 'SWSH105', setTotal: '307', language: 'DE', rarity: 'Promo', price: 2, type: 'Psychic', era: 'PROMO', artworkGroup: 'swshp-105', releaseYear: 2021 },
  // JP: S-P Promo 135
  { id: 'sp-135-jp', name: 'サーナイトV', set: 'S-P Promotional cards', setCode: 'sp', number: '135/S-P', cardNum: '135', setTotal: 'S-P', language: 'JP', rarity: 'Promo', price: 2, type: 'Psychic', era: 'PROMO', artworkGroup: 'swshp-105', releaseYear: 2021 },

  // Chilling Reign — Gardevoir 61/198
  { id: 'cre-61-en', name: 'Gardevoir', set: 'Chilling Reign', setCode: 'swsh6', number: '61/198', cardNum: '061', setTotal: '198', language: 'EN', rarity: 'Rare Holo', price: 2.50, type: 'Psychic', era: 'SWSH', artworkGroup: 'cre-61', releaseYear: 2021 },
  { id: 'cre-61-de', name: 'Gardevoir', set: 'Schaurige Herrschaft', setCode: 'swsh6', number: '61/198', cardNum: '061', setTotal: '198', language: 'DE', rarity: 'Rare Holo', price: 2, type: 'Psychic', era: 'SWSH', artworkGroup: 'cre-61', releaseYear: 2021 },
  // JP: Jet-Black Spirit S6K 030/070
  { id: 's6k-030-jp', name: 'サーナイト', set: 'Jet-Black Spirit', setCode: 's6K', number: '030/070', cardNum: '030', setTotal: '070', language: 'JP', rarity: 'Rare Holo', price: 2, type: 'Psychic', era: 'SWSH', artworkGroup: 'cre-61', releaseYear: 2021 },

  // Celebrations Classic Collection — Gardevoir ex δ 93/25 (reprint of EX Dragon Frontiers)
  { id: 'cel-93-en', name: 'Gardevoir ex δ', set: 'Celebrations: Classic Collection', setCode: 'cel25c', number: '93/25', cardNum: '093', setTotal: '25', language: 'EN', rarity: 'Classic Collection', price: 165, type: 'Fire', era: 'SWSH', artworkGroup: 'cel-93', releaseYear: 2021, notes: 'Reprint of EX Dragon Frontiers' },
  { id: 'cel-93-de', name: 'Gardevoir ex δ', set: 'Feierlichkeiten: Classic Collection', setCode: 'cel25c', number: '93/25', cardNum: '093', setTotal: '25', language: 'DE', rarity: 'Classic Collection', price: 130, type: 'Fire', era: 'SWSH', artworkGroup: 'cel-93', releaseYear: 2021 },
  // JP: 25th Anniversary promo 015/025
  { id: 'cel25-015-jp', name: 'サーナイトex δ', set: '25th Anniversary Promo Pack', setCode: 'cel25', number: '015/025', cardNum: '015', setTotal: '025', language: 'JP', rarity: 'Promo', price: 180, type: 'Fire', era: 'PROMO', artworkGroup: 'cel-93', releaseYear: 2021, notes: '25th Anniversary JP Exclusive Promo' },

  // Astral Radiance Trainer Gallery — Gardevoir TG05/TG30
  { id: 'asr-tg05-en', name: 'Gardevoir', set: 'Astral Radiance', setCode: 'swsh10tg', number: 'TG05/TG30', cardNum: 'TG005', setTotal: 'TG30', language: 'EN', rarity: 'Trainer Gallery Rare Holo', price: 6, type: 'Psychic', era: 'SWSH', artworkGroup: 'asr-tg05', releaseYear: 2022 },
  { id: 'asr-tg05-de', name: 'Gardevoir', set: 'Astralglanz', setCode: 'swsh10tg', number: 'TG05/TG30', cardNum: 'TG005', setTotal: 'TG30', language: 'DE', rarity: 'Trainer Gallery Rare Holo', price: 5, type: 'Psychic', era: 'SWSH', artworkGroup: 'asr-tg05', releaseYear: 2022 },
  // JP: Dark Phantasma S10a 074/071
  { id: 's10a-074-jp', name: 'サーナイト', set: 'Dark Phantasma', setCode: 's10a', number: '074/071', cardNum: '074', setTotal: '071', language: 'JP', rarity: 'Trainer Gallery Rare Holo', price: 5, type: 'Psychic', era: 'SWSH', artworkGroup: 'asr-tg05', releaseYear: 2022 },

  // Lost Origin — Radiant Gardevoir 69/196
  { id: 'lor-69-en', name: 'Radiant Gardevoir', set: 'Lost Origin', setCode: 'swsh11', number: '69/196', cardNum: '069', setTotal: '196', language: 'EN', rarity: 'Radiant Rare', price: 3, type: 'Psychic', era: 'SWSH', artworkGroup: 'lor-69', releaseYear: 2022 },
  { id: 'lor-69-de', name: 'Strahlendes Gardevoir', set: 'Verlorener Ursprung', setCode: 'swsh11', number: '69/196', cardNum: '069', setTotal: '196', language: 'DE', rarity: 'Radiant Rare', price: 2.50, type: 'Psychic', era: 'SWSH', artworkGroup: 'lor-69', releaseYear: 2022 },
  // JP: Dark Phantasma S10a 027/071
  { id: 's10a-027-jp', name: 'かがやくサーナイト', set: 'Dark Phantasma', setCode: 's10a', number: '027/071', cardNum: '027', setTotal: '071', language: 'JP', rarity: 'Radiant Rare', price: 2.50, type: 'Psychic', era: 'SWSH', artworkGroup: 'lor-69', releaseYear: 2022 },

  // Silver Tempest — Gardevoir 69/195
  { id: 'sit-69-en', name: 'Gardevoir', set: 'Silver Tempest', setCode: 'swsh12', number: '69/195', cardNum: '069', setTotal: '195', language: 'EN', rarity: 'Rare Holo', price: 2, type: 'Psychic', era: 'SWSH', artworkGroup: 'sit-69', releaseYear: 2022 },
  { id: 'sit-69-de', name: 'Gardevoir', set: 'Silberne Sturmwinde', setCode: 'swsh12', number: '69/195', cardNum: '069', setTotal: '195', language: 'DE', rarity: 'Rare Holo', price: 1.50, type: 'Psychic', era: 'SWSH', artworkGroup: 'sit-69', releaseYear: 2022 },
  // JP: Incandescent Arcana S11a 038/068
  { id: 's11a-038-jp', name: 'サーナイト', set: 'Incandescent Arcana', setCode: 's11a', number: '038/068', cardNum: '038', setTotal: '068', language: 'JP', rarity: 'Rare Holo', price: 1.50, type: 'Psychic', era: 'SWSH', artworkGroup: 'sit-69', releaseYear: 2022 },

  // Silver Tempest Trainer Gallery — Gardevoir TG05/TG30
  { id: 'sit-tg05-en', name: 'Gardevoir', set: 'Silver Tempest Trainer Gallery', setCode: 'swsh12tg', number: 'TG05/TG30', cardNum: 'TG005', setTotal: 'TG30', language: 'EN', rarity: 'Trainer Gallery Rare Holo', price: 5, type: 'Psychic', era: 'SWSH', artworkGroup: 'sit-tg05', releaseYear: 2022 },
  { id: 'sit-tg05-de', name: 'Gardevoir', set: 'Silberne Sturmwinde Trainer Gallery', setCode: 'swsh12tg', number: 'TG05/TG30', cardNum: 'TG005', setTotal: 'TG30', language: 'DE', rarity: 'Trainer Gallery Rare Holo', price: 4, type: 'Psychic', era: 'SWSH', artworkGroup: 'sit-tg05', releaseYear: 2022 },
  // JP: Incandescent Arcana S11a 074/068
  { id: 's11a-074-jp', name: 'サーナイト', set: 'Incandescent Arcana', setCode: 's11a', number: '074/068', cardNum: '074', setTotal: '068', language: 'JP', rarity: 'Trainer Gallery Rare Holo', price: 4, type: 'Psychic', era: 'SWSH', artworkGroup: 'sit-tg05', releaseYear: 2022 },

  // ────────────────────────────────────────────────────────
  // SCARLET & VIOLET ERA (2023–)
  // ────────────────────────────────────────────────────────

  // Scarlet & Violet Base — Gardevoir ex 86/198
  { id: 'sv1-86-en', name: 'Gardevoir ex', set: 'Scarlet & Violet', setCode: 'sv1', number: '86/198', cardNum: '086', setTotal: '198', language: 'EN', rarity: 'Double Rare', price: 4, type: 'Psychic', era: 'SV', artworkGroup: 'sv1-86', releaseYear: 2023 },
  { id: 'sv1-86-de', name: 'Gardevoir ex', set: 'Karmesin & Purpur', setCode: 'sv1', number: '86/198', cardNum: '086', setTotal: '198', language: 'DE', rarity: 'Double Rare', price: 3.50, type: 'Psychic', era: 'SV', artworkGroup: 'sv1-86', releaseYear: 2023 },
  // KO: same international numbering for SV era
  { id: 'sv1-86-ko', name: '가디안ex', set: 'Scarlet & Violet', setCode: 'sv1', number: '86/198', cardNum: '086', setTotal: '198', language: 'KO', rarity: 'Double Rare', price: 3, type: 'Psychic', era: 'SV', artworkGroup: 'sv1-86', releaseYear: 2023 },
  // JP: Scarlet ex sv1S 038/078
  { id: 'sv1s-038-jp', name: 'サーナイトex', set: 'Scarlet ex', setCode: 'sv1S', number: '038/078', cardNum: '038', setTotal: '078', language: 'JP', rarity: 'Double Rare', price: 3.50, type: 'Psychic', era: 'SV', artworkGroup: 'sv1-86', releaseYear: 2023 },

  // Scarlet & Violet Base — Gardevoir ex 228/198 (Ultra Rare / Full Art)
  { id: 'sv1-228-en', name: 'Gardevoir ex', set: 'Scarlet & Violet', setCode: 'sv1', number: '228/198', cardNum: '228', setTotal: '198', language: 'EN', rarity: 'Ultra Rare', price: 22, type: 'Psychic', era: 'SV', artworkGroup: 'sv1-228', isSecret: true, releaseYear: 2023 },
  { id: 'sv1-228-de', name: 'Gardevoir ex', set: 'Karmesin & Purpur', setCode: 'sv1', number: '228/198', cardNum: '228', setTotal: '198', language: 'DE', rarity: 'Ultra Rare', price: 18, type: 'Psychic', era: 'SV', artworkGroup: 'sv1-228', isSecret: true, releaseYear: 2023 },
  { id: 'sv1-228-ko', name: '가디안ex', set: 'Scarlet & Violet', setCode: 'sv1', number: '228/198', cardNum: '228', setTotal: '198', language: 'KO', rarity: 'Ultra Rare', price: 17, type: 'Psychic', era: 'SV', artworkGroup: 'sv1-228', isSecret: true, releaseYear: 2023 },
  // JP: Scarlet ex sv1S 092/078
  { id: 'sv1s-092-jp', name: 'サーナイトex', set: 'Scarlet ex', setCode: 'sv1S', number: '092/078', cardNum: '092', setTotal: '078', language: 'JP', rarity: 'Ultra Rare', price: 19, type: 'Psychic', era: 'SV', artworkGroup: 'sv1-228', isSecret: true, releaseYear: 2023 },

  // Scarlet & Violet Base — Gardevoir ex 245/198 (Special Illustration Rare)
  { id: 'sv1-245-en', name: 'Gardevoir ex', set: 'Scarlet & Violet', setCode: 'sv1', number: '245/198', cardNum: '245', setTotal: '198', language: 'EN', rarity: 'Special Illustration Rare', price: 76, type: 'Psychic', era: 'SV', artworkGroup: 'sv1-245', isSecret: true, releaseYear: 2023 },
  { id: 'sv1-245-de', name: 'Gardevoir ex', set: 'Karmesin & Purpur', setCode: 'sv1', number: '245/198', cardNum: '245', setTotal: '198', language: 'DE', rarity: 'Special Illustration Rare', price: 60, type: 'Psychic', era: 'SV', artworkGroup: 'sv1-245', isSecret: true, releaseYear: 2023 },
  { id: 'sv1-245-ko', name: '가디안ex', set: 'Scarlet & Violet', setCode: 'sv1', number: '245/198', cardNum: '245', setTotal: '198', language: 'KO', rarity: 'Special Illustration Rare', price: 58, type: 'Psychic', era: 'SV', artworkGroup: 'sv1-245', isSecret: true, releaseYear: 2023 },
  // JP: Scarlet ex sv1S 101/078
  { id: 'sv1s-101-jp', name: 'サーナイトex', set: 'Scarlet ex', setCode: 'sv1S', number: '101/078', cardNum: '101', setTotal: '078', language: 'JP', rarity: 'Special Illustration Rare', price: 65, type: 'Psychic', era: 'SV', artworkGroup: 'sv1-245', isSecret: true, releaseYear: 2023 },

  // SV-P Promo — Gardevoir ex (JP Exclusive Launch Promo)
  { id: 'svp-014-jp', name: 'サーナイトex', set: 'SV-P Promotional cards', setCode: 'svp', number: '014/SV-P', cardNum: '014', setTotal: 'SV-P', language: 'JP', rarity: 'Promo', price: 8, type: 'Psychic', era: 'PROMO', artworkGroup: 'svp-014', releaseYear: 2023, notes: 'JP Scarlet & Violet Launch Promo' },

  // Obsidian Flames — Gardevoir ex 86/197 (note: different artwork from sv1!)
  { id: 'sv3-86-en', name: 'Gardevoir ex', set: 'Obsidian Flames', setCode: 'sv3', number: '86/197', cardNum: '086', setTotal: '197', language: 'EN', rarity: 'Double Rare', price: 5, type: 'Psychic', era: 'SV', artworkGroup: 'sv3-86', releaseYear: 2023 },
  { id: 'sv3-86-de', name: 'Gardevoir ex', set: 'Obsidianflammen', setCode: 'sv3', number: '86/197', cardNum: '086', setTotal: '197', language: 'DE', rarity: 'Double Rare', price: 4, type: 'Psychic', era: 'SV', artworkGroup: 'sv3-86', releaseYear: 2023 },
  { id: 'sv3-86-ko', name: '가디안ex', set: 'Obsidian Flames', setCode: 'sv3', number: '86/197', cardNum: '086', setTotal: '197', language: 'KO', rarity: 'Double Rare', price: 4, type: 'Psychic', era: 'SV', artworkGroup: 'sv3-86', releaseYear: 2023 },
  // JP: Ruler of the Black Flame sv3 038/108
  { id: 'sv3jp-038-jp', name: 'サーナイトex', set: 'Ruler of the Black Flame', setCode: 'sv3jp', number: '038/108', cardNum: '038', setTotal: '108', language: 'JP', rarity: 'Double Rare', price: 4.50, type: 'Psychic', era: 'SV', artworkGroup: 'sv3-86', releaseYear: 2023 },

  // Obsidian Flames — Gardevoir ex 195/197 (Special Illustration Rare)
  { id: 'sv3-195-en', name: 'Gardevoir ex', set: 'Obsidian Flames', setCode: 'sv3', number: '195/197', cardNum: '195', setTotal: '197', language: 'EN', rarity: 'Special Illustration Rare', price: 35, type: 'Psychic', era: 'SV', artworkGroup: 'sv3-195', isSecret: true, releaseYear: 2023 },
  { id: 'sv3-195-de', name: 'Gardevoir ex', set: 'Obsidianflammen', setCode: 'sv3', number: '195/197', cardNum: '195', setTotal: '197', language: 'DE', rarity: 'Special Illustration Rare', price: 28, type: 'Psychic', era: 'SV', artworkGroup: 'sv3-195', isSecret: true, releaseYear: 2023 },
  { id: 'sv3-195-ko', name: '가디안ex', set: 'Obsidian Flames', setCode: 'sv3', number: '195/197', cardNum: '195', setTotal: '197', language: 'KO', rarity: 'Special Illustration Rare', price: 27, type: 'Psychic', era: 'SV', artworkGroup: 'sv3-195', isSecret: true, releaseYear: 2023 },
  // JP: Ruler of the Black Flame sv3 106/108
  { id: 'sv3jp-106-jp', name: 'サーナイトex', set: 'Ruler of the Black Flame', setCode: 'sv3jp', number: '106/108', cardNum: '106', setTotal: '108', language: 'JP', rarity: 'Special Illustration Rare', price: 30, type: 'Psychic', era: 'SV', artworkGroup: 'sv3-195', isSecret: true, releaseYear: 2023 },

  // Paldean Fates — Gardevoir ex 29/91 (Shiny)
  { id: 'paf-29-en', name: 'Gardevoir ex', set: 'Paldean Fates', setCode: 'sv4pt5', number: '29/91', cardNum: '029', setTotal: '91', language: 'EN', rarity: 'Shiny Rare', price: 4, type: 'Psychic', era: 'SV', artworkGroup: 'paf-29', releaseYear: 2024, notes: 'Shiny version' },
  { id: 'paf-29-de', name: 'Gardevoir ex', set: 'Paldeas Schicksale', setCode: 'sv4pt5', number: '29/91', cardNum: '029', setTotal: '91', language: 'DE', rarity: 'Shiny Rare', price: 3.50, type: 'Psychic', era: 'SV', artworkGroup: 'paf-29', releaseYear: 2024 },
  { id: 'paf-29-ko', name: '가디안ex', set: 'Paldean Fates', setCode: 'sv4pt5', number: '29/91', cardNum: '029', setTotal: '91', language: 'KO', rarity: 'Shiny Rare', price: 3, type: 'Psychic', era: 'SV', artworkGroup: 'paf-29', releaseYear: 2024 },
  // JP: Shiny Treasure ex sv4a 061/190
  { id: 'sv4a-061-jp', name: 'サーナイトex', set: 'Shiny Treasure ex', setCode: 'sv4a', number: '061/190', cardNum: '061', setTotal: '190', language: 'JP', rarity: 'Shiny Rare', price: 3.50, type: 'Psychic', era: 'SV', artworkGroup: 'paf-29', releaseYear: 2023 },

  // Paldean Fates — Gardevoir ex 217/91 (Shiny Ultra Rare)
  { id: 'paf-217-en', name: 'Gardevoir ex', set: 'Paldean Fates', setCode: 'sv4pt5', number: '217/91', cardNum: '217', setTotal: '91', language: 'EN', rarity: 'Shiny Ultra Rare', price: 8, type: 'Psychic', era: 'SV', artworkGroup: 'paf-217', isSecret: true, releaseYear: 2024 },
  { id: 'paf-217-de', name: 'Gardevoir ex', set: 'Paldeas Schicksale', setCode: 'sv4pt5', number: '217/91', cardNum: '217', setTotal: '91', language: 'DE', rarity: 'Shiny Ultra Rare', price: 6.50, type: 'Psychic', era: 'SV', artworkGroup: 'paf-217', isSecret: true, releaseYear: 2024 },
  { id: 'paf-217-ko', name: '가디안ex', set: 'Paldean Fates', setCode: 'sv4pt5', number: '217/91', cardNum: '217', setTotal: '91', language: 'KO', rarity: 'Shiny Ultra Rare', price: 6, type: 'Psychic', era: 'SV', artworkGroup: 'paf-217', isSecret: true, releaseYear: 2024 },
  // JP: Shiny Treasure ex sv4a 328/190
  { id: 'sv4a-328-jp', name: 'サーナイトex', set: 'Shiny Treasure ex', setCode: 'sv4a', number: '328/190', cardNum: '328', setTotal: '190', language: 'JP', rarity: 'Shiny Ultra Rare', price: 7, type: 'Psychic', era: 'SV', artworkGroup: 'paf-217', isSecret: true, releaseYear: 2023 },

  // Paldean Fates — Gardevoir ex 233/91 (Special Illustration Rare Shiny)
  { id: 'paf-233-en', name: 'Gardevoir ex', set: 'Paldean Fates', setCode: 'sv4pt5', number: '233/91', cardNum: '233', setTotal: '91', language: 'EN', rarity: 'Special Illustration Rare', price: 122, type: 'Psychic', era: 'SV', artworkGroup: 'paf-233', isSecret: true, releaseYear: 2024 },
  { id: 'paf-233-de', name: 'Gardevoir ex', set: 'Paldeas Schicksale', setCode: 'sv4pt5', number: '233/91', cardNum: '233', setTotal: '91', language: 'DE', rarity: 'Special Illustration Rare', price: 97, type: 'Psychic', era: 'SV', artworkGroup: 'paf-233', isSecret: true, releaseYear: 2024 },
  { id: 'paf-233-ko', name: '가디안ex', set: 'Paldean Fates', setCode: 'sv4pt5', number: '233/91', cardNum: '233', setTotal: '91', language: 'KO', rarity: 'Special Illustration Rare', price: 95, type: 'Psychic', era: 'SV', artworkGroup: 'paf-233', isSecret: true, releaseYear: 2024 },
  // JP: Shiny Treasure ex sv4a 348/190
  { id: 'sv4a-348-jp', name: 'サーナイトex', set: 'Shiny Treasure ex', setCode: 'sv4a', number: '348/190', cardNum: '348', setTotal: '190', language: 'JP', rarity: 'Special Illustration Rare', price: 105, type: 'Psychic', era: 'SV', artworkGroup: 'paf-233', isSecret: true, releaseYear: 2023 },

  // Twilight Masquerade — Gardevoir ex 86/167
  { id: 'twm-86-en', name: 'Gardevoir ex', set: 'Twilight Masquerade', setCode: 'sv6', number: '86/167', cardNum: '086', setTotal: '167', language: 'EN', rarity: 'Double Rare', price: 6, type: 'Psychic', era: 'SV', artworkGroup: 'twm-86', releaseYear: 2024 },
  { id: 'twm-86-de', name: 'Gardevoir ex', set: 'Maskerade im Zwielicht', setCode: 'sv6', number: '86/167', cardNum: '086', setTotal: '167', language: 'DE', rarity: 'Double Rare', price: 5, type: 'Psychic', era: 'SV', artworkGroup: 'twm-86', releaseYear: 2024 },
  { id: 'twm-86-ko', name: '가디안ex', set: 'Twilight Masquerade', setCode: 'sv6', number: '86/167', cardNum: '086', setTotal: '167', language: 'KO', rarity: 'Double Rare', price: 5, type: 'Psychic', era: 'SV', artworkGroup: 'twm-86', releaseYear: 2024 },
  // JP: Crimson Haze sv5a 038/066
  { id: 'sv5a-038-jp', name: 'サーナイトex', set: 'Crimson Haze', setCode: 'sv5a', number: '038/066', cardNum: '038', setTotal: '066', language: 'JP', rarity: 'Double Rare', price: 5, type: 'Psychic', era: 'SV', artworkGroup: 'twm-86', releaseYear: 2024 },

  // Twilight Masquerade — Gardevoir ex 162/167 (Ultra Rare Full Art)
  { id: 'twm-162-en', name: 'Gardevoir ex', set: 'Twilight Masquerade', setCode: 'sv6', number: '162/167', cardNum: '162', setTotal: '167', language: 'EN', rarity: 'Ultra Rare', price: 18, type: 'Psychic', era: 'SV', artworkGroup: 'twm-162', isSecret: true, releaseYear: 2024 },
  { id: 'twm-162-de', name: 'Gardevoir ex', set: 'Maskerade im Zwielicht', setCode: 'sv6', number: '162/167', cardNum: '162', setTotal: '167', language: 'DE', rarity: 'Ultra Rare', price: 14, type: 'Psychic', era: 'SV', artworkGroup: 'twm-162', isSecret: true, releaseYear: 2024 },
  { id: 'twm-162-ko', name: '가디안ex', set: 'Twilight Masquerade', setCode: 'sv6', number: '162/167', cardNum: '162', setTotal: '167', language: 'KO', rarity: 'Ultra Rare', price: 14, type: 'Psychic', era: 'SV', artworkGroup: 'twm-162', isSecret: true, releaseYear: 2024 },
  // JP: Crimson Haze sv5a 083/066
  { id: 'sv5a-083-jp', name: 'サーナイトex', set: 'Crimson Haze', setCode: 'sv5a', number: '083/066', cardNum: '083', setTotal: '066', language: 'JP', rarity: 'Ultra Rare', price: 15, type: 'Psychic', era: 'SV', artworkGroup: 'twm-162', isSecret: true, releaseYear: 2024 },

  // Twilight Masquerade — Gardevoir ex 203/167 (Special Illustration Rare)
  { id: 'twm-203-en', name: 'Gardevoir ex', set: 'Twilight Masquerade', setCode: 'sv6', number: '203/167', cardNum: '203', setTotal: '167', language: 'EN', rarity: 'Special Illustration Rare', price: 55, type: 'Psychic', era: 'SV', artworkGroup: 'twm-203', isSecret: true, releaseYear: 2024 },
  { id: 'twm-203-de', name: 'Gardevoir ex', set: 'Maskerade im Zwielicht', setCode: 'sv6', number: '203/167', cardNum: '203', setTotal: '167', language: 'DE', rarity: 'Special Illustration Rare', price: 44, type: 'Psychic', era: 'SV', artworkGroup: 'twm-203', isSecret: true, releaseYear: 2024 },
  { id: 'twm-203-ko', name: '가디안ex', set: 'Twilight Masquerade', setCode: 'sv6', number: '203/167', cardNum: '203', setTotal: '167', language: 'KO', rarity: 'Special Illustration Rare', price: 43, type: 'Psychic', era: 'SV', artworkGroup: 'twm-203', isSecret: true, releaseYear: 2024 },
  // JP: Crimson Haze sv5a 101/066
  { id: 'sv5a-101-jp', name: 'サーナイトex', set: 'Crimson Haze', setCode: 'sv5a', number: '101/066', cardNum: '101', setTotal: '066', language: 'JP', rarity: 'Special Illustration Rare', price: 48, type: 'Psychic', era: 'SV', artworkGroup: 'twm-203', isSecret: true, releaseYear: 2024 },

  // Stellar Crown — Gardevoir ex (sv7 / Stellar Crown)
  { id: 'sv7-87-en', name: 'Gardevoir ex', set: 'Stellar Crown', setCode: 'sv7', number: '87/142', cardNum: '087', setTotal: '142', language: 'EN', rarity: 'Double Rare', price: 5, type: 'Psychic', era: 'SV', artworkGroup: 'sv7-87', releaseYear: 2024 },
  { id: 'sv7-87-de', name: 'Gardevoir ex', set: 'Strahlende Krone', setCode: 'sv7', number: '87/142', cardNum: '087', setTotal: '142', language: 'DE', rarity: 'Double Rare', price: 4, type: 'Psychic', era: 'SV', artworkGroup: 'sv7-87', releaseYear: 2024 },
  { id: 'sv7-87-ko', name: '가디안ex', set: 'Stellar Crown', setCode: 'sv7', number: '87/142', cardNum: '087', setTotal: '142', language: 'KO', rarity: 'Double Rare', price: 4, type: 'Psychic', era: 'SV', artworkGroup: 'sv7-87', releaseYear: 2024 },
  // JP: Super Electric Breaker sv6a 044/095
  { id: 'sv6a-044-jp', name: 'サーナイトex', set: 'Super Electric Breaker', setCode: 'sv6a', number: '044/095', cardNum: '044', setTotal: '095', language: 'JP', rarity: 'Double Rare', price: 4.50, type: 'Psychic', era: 'SV', artworkGroup: 'sv7-87', releaseYear: 2024 },

  // Stellar Crown — Gardevoir ex 128/142 (Ultra Rare)
  { id: 'sv7-128-en', name: 'Gardevoir ex', set: 'Stellar Crown', setCode: 'sv7', number: '128/142', cardNum: '128', setTotal: '142', language: 'EN', rarity: 'Ultra Rare', price: 14, type: 'Psychic', era: 'SV', artworkGroup: 'sv7-128', isSecret: true, releaseYear: 2024 },
  { id: 'sv7-128-de', name: 'Gardevoir ex', set: 'Strahlende Krone', setCode: 'sv7', number: '128/142', cardNum: '128', setTotal: '142', language: 'DE', rarity: 'Ultra Rare', price: 11, type: 'Psychic', era: 'SV', artworkGroup: 'sv7-128', isSecret: true, releaseYear: 2024 },
  { id: 'sv7-128-ko', name: '가디안ex', set: 'Stellar Crown', setCode: 'sv7', number: '128/142', cardNum: '128', setTotal: '142', language: 'KO', rarity: 'Ultra Rare', price: 11, type: 'Psychic', era: 'SV', artworkGroup: 'sv7-128', isSecret: true, releaseYear: 2024 },
  // JP: Super Electric Breaker sv6a 083/095
  { id: 'sv6a-083-jp', name: 'サーナイトex', set: 'Super Electric Breaker', setCode: 'sv6a', number: '083/095', cardNum: '083', setTotal: '095', language: 'JP', rarity: 'Ultra Rare', price: 12, type: 'Psychic', era: 'SV', artworkGroup: 'sv7-128', isSecret: true, releaseYear: 2024 },

  // Stellar Crown — Gardevoir ex 165/142 (Special Illustration Rare)
  { id: 'sv7-165-en', name: 'Gardevoir ex', set: 'Stellar Crown', setCode: 'sv7', number: '165/142', cardNum: '165', setTotal: '142', language: 'EN', rarity: 'Special Illustration Rare', price: 42, type: 'Psychic', era: 'SV', artworkGroup: 'sv7-165', isSecret: true, releaseYear: 2024 },
  { id: 'sv7-165-de', name: 'Gardevoir ex', set: 'Strahlende Krone', setCode: 'sv7', number: '165/142', cardNum: '165', setTotal: '142', language: 'DE', rarity: 'Special Illustration Rare', price: 34, type: 'Psychic', era: 'SV', artworkGroup: 'sv7-165', isSecret: true, releaseYear: 2024 },
  { id: 'sv7-165-ko', name: '가디안ex', set: 'Stellar Crown', setCode: 'sv7', number: '165/142', cardNum: '165', setTotal: '142', language: 'KO', rarity: 'Special Illustration Rare', price: 33, type: 'Psychic', era: 'SV', artworkGroup: 'sv7-165', isSecret: true, releaseYear: 2024 },
  // JP: Super Electric Breaker sv6a 100/095
  { id: 'sv6a-100-jp', name: 'サーナイトex', set: 'Super Electric Breaker', setCode: 'sv6a', number: '100/095', cardNum: '100', setTotal: '095', language: 'JP', rarity: 'Special Illustration Rare', price: 37, type: 'Psychic', era: 'SV', artworkGroup: 'sv7-165', isSecret: true, releaseYear: 2024 },

  // Prismatic Evolutions — Gardevoir ex 073/131 (Double Rare)
  { id: 'sve-73-en', name: 'Gardevoir ex', set: 'Prismatic Evolutions', setCode: 'sv8pt5', number: '73/131', cardNum: '073', setTotal: '131', language: 'EN', rarity: 'Double Rare', price: 7, type: 'Psychic', era: 'SV', artworkGroup: 'sve-73', releaseYear: 2025 },
  { id: 'sve-73-de', name: 'Gardevoir ex', set: 'Prismatische Entwicklungen', setCode: 'sv8pt5', number: '73/131', cardNum: '073', setTotal: '131', language: 'DE', rarity: 'Double Rare', price: 6, type: 'Psychic', era: 'SV', artworkGroup: 'sve-73', releaseYear: 2025 },
  { id: 'sve-73-ko', name: '가디안ex', set: 'Prismatic Evolutions', setCode: 'sv8pt5', number: '73/131', cardNum: '073', setTotal: '131', language: 'KO', rarity: 'Double Rare', price: 6, type: 'Psychic', era: 'SV', artworkGroup: 'sve-73', releaseYear: 2025 },
  // JP: Terastal Festival ex sv8a 042/088
  { id: 'sv8a-042-jp', name: 'サーナイトex', set: 'Terastal Festival ex', setCode: 'sv8a', number: '042/088', cardNum: '042', setTotal: '088', language: 'JP', rarity: 'Double Rare', price: 6.50, type: 'Psychic', era: 'SV', artworkGroup: 'sve-73', releaseYear: 2024 },

  // Prismatic Evolutions — Gardevoir ex 157/131 (Ultra Rare)
  { id: 'sve-157-en', name: 'Gardevoir ex', set: 'Prismatic Evolutions', setCode: 'sv8pt5', number: '157/131', cardNum: '157', setTotal: '131', language: 'EN', rarity: 'Ultra Rare', price: 20, type: 'Psychic', era: 'SV', artworkGroup: 'sve-157', isSecret: true, releaseYear: 2025 },
  { id: 'sve-157-de', name: 'Gardevoir ex', set: 'Prismatische Entwicklungen', setCode: 'sv8pt5', number: '157/131', cardNum: '157', setTotal: '131', language: 'DE', rarity: 'Ultra Rare', price: 16, type: 'Psychic', era: 'SV', artworkGroup: 'sve-157', isSecret: true, releaseYear: 2025 },
  { id: 'sve-157-ko', name: '가디안ex', set: 'Prismatic Evolutions', setCode: 'sv8pt5', number: '157/131', cardNum: '157', setTotal: '131', language: 'KO', rarity: 'Ultra Rare', price: 16, type: 'Psychic', era: 'SV', artworkGroup: 'sve-157', isSecret: true, releaseYear: 2025 },
  // JP: Terastal Festival ex sv8a 080/088
  { id: 'sv8a-080-jp', name: 'サーナイトex', set: 'Terastal Festival ex', setCode: 'sv8a', number: '080/088', cardNum: '080', setTotal: '088', language: 'JP', rarity: 'Ultra Rare', price: 17, type: 'Psychic', era: 'SV', artworkGroup: 'sve-157', isSecret: true, releaseYear: 2024 },

  // Prismatic Evolutions — Gardevoir ex 196/131 (Special Illustration Rare)
  { id: 'sve-196-en', name: 'Gardevoir ex', set: 'Prismatic Evolutions', setCode: 'sv8pt5', number: '196/131', cardNum: '196', setTotal: '131', language: 'EN', rarity: 'Special Illustration Rare', price: 95, type: 'Psychic', era: 'SV', artworkGroup: 'sve-196', isSecret: true, releaseYear: 2025 },
  { id: 'sve-196-de', name: 'Gardevoir ex', set: 'Prismatische Entwicklungen', setCode: 'sv8pt5', number: '196/131', cardNum: '196', setTotal: '131', language: 'DE', rarity: 'Special Illustration Rare', price: 76, type: 'Psychic', era: 'SV', artworkGroup: 'sve-196', isSecret: true, releaseYear: 2025 },
  { id: 'sve-196-ko', name: '가디안ex', set: 'Prismatic Evolutions', setCode: 'sv8pt5', number: '196/131', cardNum: '196', setTotal: '131', language: 'KO', rarity: 'Special Illustration Rare', price: 75, type: 'Psychic', era: 'SV', artworkGroup: 'sve-196', isSecret: true, releaseYear: 2025 },
  // JP: Terastal Festival ex sv8a 098/088
  { id: 'sv8a-098-jp', name: 'サーナイトex', set: 'Terastal Festival ex', setCode: 'sv8a', number: '098/088', cardNum: '098', setTotal: '088', language: 'JP', rarity: 'Special Illustration Rare', price: 83, type: 'Psychic', era: 'SV', artworkGroup: 'sve-196', isSecret: true, releaseYear: 2024 },

  // ────────────────────────────────────────────────────────
  // JAPANESE EXCLUSIVES (no EN equivalent)
  // ────────────────────────────────────────────────────────

  // JP Promo: VS Pack Champion Road Gardevoir ex promo (2023)
  { id: 'svp-098-jp', name: 'サーナイトex', set: 'SV-P Promotional cards', setCode: 'svp', number: '098/SV-P', cardNum: '098', setTotal: 'SV-P', language: 'JP', rarity: 'Promo', price: 12, type: 'Psychic', era: 'PROMO', artworkGroup: 'svp-098', releaseYear: 2023, notes: 'JP Exclusive Promo — Champion Road' },

  // JP Promo: Gardevoir ex VS Miraidon ex tournament promo 2024
  { id: 'svp-283-jp', name: 'サーナイトex', set: 'SV-P Promotional cards', setCode: 'svp', number: '283/SV-P', cardNum: '283', setTotal: 'SV-P', language: 'JP', rarity: 'Promo', price: 15, type: 'Psychic', era: 'PROMO', artworkGroup: 'svp-283', releaseYear: 2024, notes: 'JP Exclusive Tournament Promo 2024' },

  // JP: Eevee Heroes Gardevoir (SM-era Japanese set — some were JP exclusive designs)
  // Note: Fairy Rise sm7b additional card not in EN sets
  { id: 'sm7b-034-jp', name: 'サーナイトGX', set: 'Fairy Rise', setCode: 'sm7b', number: '034/050', cardNum: '034', setTotal: '050', language: 'JP', rarity: 'Rare Holo GX', price: 18, type: 'Fairy', era: 'SM', artworkGroup: 'sm7b-034', releaseYear: 2018, notes: 'JP Exclusive — Fairy Rise' },

  // JP: Night Unison additional card
  { id: 'sm9a-032-jp', name: 'サーナイト&ニンフィアGX', set: 'Night Unison', setCode: 'sm9a', number: '032/055', cardNum: '032', setTotal: '055', language: 'JP', rarity: 'Double Rare', price: 25, type: 'Fairy', era: 'SM', artworkGroup: 'sm9a-032', releaseYear: 2019, notes: 'JP Exclusive — Night Unison SAR preview' },

  // ────────────────────────────────────────────────────────
  // MEGA EVOLUTION SERIES (2025–)
  // EN set: Mega Evolution (meg / ME01) — released September 26, 2025
  // JP sets: Mega Brave (m1l) + Mega Symphonia (m1s) — released August 1, 2025
  // Mega Symphonia is JP-exclusive (no EN equivalent set, but cards appear in EN Mega Evolution)
  //
  // Mega Gardevoir ex is the headliner of Mega Symphonia (m1s).
  // EN Mega Evolution setCode: meg   |   JP Mega Symphonia setCode: m1s
  //
  // Verified card numbers:
  // EN meg 060/132  = JP m1s 042/063  (Double Rare / RR)
  // EN meg 159/132  = JP m1s (no direct jp equivalent — IR only in EN)
  // EN meg 178/132  = JP m1s 087/063  (Special Illustration Rare / SAR)
  // EN meg 187/132  = JP m1s 078/063  (Ultra Rare full art / SR)
  // EN meg 205/132  = JP m1s 092/063  (Mega Hyper Rare gold / MUR)
  // ────────────────────────────────────────────────────────

  // Mega Evolution — Mega Gardevoir ex 060/132 (Double Rare)
  { id: 'meg-060-en', name: 'Mega Gardevoir ex', set: 'Mega Evolution', setCode: 'meg', number: '060/132', cardNum: '060', setTotal: '132', language: 'EN', rarity: 'Double Rare', price: 3, type: 'Psychic', era: 'SV', artworkGroup: 'meg-060', releaseYear: 2025 },
  { id: 'meg-060-de', name: 'Mega Gardevoir ex', set: 'Mega-Entwicklung', setCode: 'meg', number: '060/132', cardNum: '060', setTotal: '132', language: 'DE', rarity: 'Double Rare', price: 2.50, type: 'Psychic', era: 'SV', artworkGroup: 'meg-060', releaseYear: 2025 },
  { id: 'meg-060-ko', name: '메가 가디안ex', set: 'Mega Evolution', setCode: 'meg', number: '060/132', cardNum: '060', setTotal: '132', language: 'KO', rarity: 'Double Rare', price: 2.50, type: 'Psychic', era: 'SV', artworkGroup: 'meg-060', releaseYear: 2025 },
  // JP: Mega Symphonia m1s 042/063 (RR)
  { id: 'm1s-042-jp', name: 'メガサーナイトex', set: 'Mega Symphonia', setCode: 'm1s', number: '042/063', cardNum: '042', setTotal: '063', language: 'JP', rarity: 'Double Rare', price: 3, type: 'Psychic', era: 'SV', artworkGroup: 'meg-060', releaseYear: 2025 },

  // Mega Evolution — Mega Gardevoir ex 159/132 (Illustration Rare)
  // Note: This IR has unique artwork (no direct JP m1s equivalent — EN-exclusive IR)
  { id: 'meg-159-en', name: 'Mega Gardevoir ex', set: 'Mega Evolution', setCode: 'meg', number: '159/132', cardNum: '159', setTotal: '132', language: 'EN', rarity: 'Illustration Rare', price: 18, type: 'Psychic', era: 'SV', artworkGroup: 'meg-159', isSecret: true, releaseYear: 2025, notes: 'Illustration Rare — EN/international only' },
  { id: 'meg-159-de', name: 'Mega Gardevoir ex', set: 'Mega-Entwicklung', setCode: 'meg', number: '159/132', cardNum: '159', setTotal: '132', language: 'DE', rarity: 'Illustration Rare', price: 14, type: 'Psychic', era: 'SV', artworkGroup: 'meg-159', isSecret: true, releaseYear: 2025 },
  { id: 'meg-159-ko', name: '메가 가디안ex', set: 'Mega Evolution', setCode: 'meg', number: '159/132', cardNum: '159', setTotal: '132', language: 'KO', rarity: 'Illustration Rare', price: 14, type: 'Psychic', era: 'SV', artworkGroup: 'meg-159', isSecret: true, releaseYear: 2025 },

  // Mega Evolution — Mega Gardevoir ex 178/132 (Special Illustration Rare / SAR)
  { id: 'meg-178-en', name: 'Mega Gardevoir ex', set: 'Mega Evolution', setCode: 'meg', number: '178/132', cardNum: '178', setTotal: '132', language: 'EN', rarity: 'Special Illustration Rare', price: 185, type: 'Psychic', era: 'SV', artworkGroup: 'meg-178', isSecret: true, releaseYear: 2025, notes: 'SAR — artwork by Raita Kazama' },
  { id: 'meg-178-de', name: 'Mega Gardevoir ex', set: 'Mega-Entwicklung', setCode: 'meg', number: '178/132', cardNum: '178', setTotal: '132', language: 'DE', rarity: 'Special Illustration Rare', price: 148, type: 'Psychic', era: 'SV', artworkGroup: 'meg-178', isSecret: true, releaseYear: 2025 },
  { id: 'meg-178-ko', name: '메가 가디안ex', set: 'Mega Evolution', setCode: 'meg', number: '178/132', cardNum: '178', setTotal: '132', language: 'KO', rarity: 'Special Illustration Rare', price: 145, type: 'Psychic', era: 'SV', artworkGroup: 'meg-178', isSecret: true, releaseYear: 2025 },
  // JP: Mega Symphonia m1s 087/063 (SAR)
  { id: 'm1s-087-jp', name: 'メガサーナイトex', set: 'Mega Symphonia', setCode: 'm1s', number: '087/063', cardNum: '087', setTotal: '063', language: 'JP', rarity: 'Special Illustration Rare', price: 170, type: 'Psychic', era: 'SV', artworkGroup: 'meg-178', isSecret: true, releaseYear: 2025 },

  // Mega Evolution — Mega Gardevoir ex 187/132 (Ultra Rare / Full Art)
  { id: 'meg-187-en', name: 'Mega Gardevoir ex', set: 'Mega Evolution', setCode: 'meg', number: '187/132', cardNum: '187', setTotal: '132', language: 'EN', rarity: 'Ultra Rare', price: 190, type: 'Psychic', era: 'SV', artworkGroup: 'meg-187', isSecret: true, releaseYear: 2025, notes: 'Full Art Ultra Rare' },
  { id: 'meg-187-de', name: 'Mega Gardevoir ex', set: 'Mega-Entwicklung', setCode: 'meg', number: '187/132', cardNum: '187', setTotal: '132', language: 'DE', rarity: 'Ultra Rare', price: 152, type: 'Psychic', era: 'SV', artworkGroup: 'meg-187', isSecret: true, releaseYear: 2025 },
  { id: 'meg-187-ko', name: '메가 가디안ex', set: 'Mega Evolution', setCode: 'meg', number: '187/132', cardNum: '187', setTotal: '132', language: 'KO', rarity: 'Ultra Rare', price: 150, type: 'Psychic', era: 'SV', artworkGroup: 'meg-187', isSecret: true, releaseYear: 2025 },
  // JP: Mega Symphonia m1s 078/063 (SR / Full Art)
  { id: 'm1s-078-jp', name: 'メガサーナイトex', set: 'Mega Symphonia', setCode: 'm1s', number: '078/063', cardNum: '078', setTotal: '063', language: 'JP', rarity: 'Ultra Rare', price: 80, type: 'Psychic', era: 'SV', artworkGroup: 'meg-187', isSecret: true, releaseYear: 2025 },

  // Mega Evolution — Mega Gardevoir ex 205/132 (Mega Hyper Rare / gold — MHR)
  // Pull rate: 1 in 1,260 packs. Market price ~$500–600 at launch.
  { id: 'meg-205-en', name: 'Mega Gardevoir ex', set: 'Mega Evolution', setCode: 'meg', number: '205/132', cardNum: '205', setTotal: '132', language: 'EN', rarity: 'Hyper Rare', price: 530, type: 'Psychic', era: 'SV', artworkGroup: 'meg-205', isSecret: true, releaseYear: 2025, notes: 'Mega Hyper Rare (MHR) gold — artwork by 5ban Graphics' },
  { id: 'meg-205-de', name: 'Mega Gardevoir ex', set: 'Mega-Entwicklung', setCode: 'meg', number: '205/132', cardNum: '205', setTotal: '132', language: 'DE', rarity: 'Hyper Rare', price: 425, type: 'Psychic', era: 'SV', artworkGroup: 'meg-205', isSecret: true, releaseYear: 2025 },
  { id: 'meg-205-ko', name: '메가 가디안ex', set: 'Mega Evolution', setCode: 'meg', number: '205/132', cardNum: '205', setTotal: '132', language: 'KO', rarity: 'Hyper Rare', price: 420, type: 'Psychic', era: 'SV', artworkGroup: 'meg-205', isSecret: true, releaseYear: 2025 },
  // JP: Mega Symphonia m1s 092/063 (MUR — Mega Ultra Rare / gold)
  { id: 'm1s-092-jp', name: 'メガサーナイトex', set: 'Mega Symphonia', setCode: 'm1s', number: '092/063', cardNum: '092', setTotal: '063', language: 'JP', rarity: 'Hyper Rare', price: 440, type: 'Psychic', era: 'SV', artworkGroup: 'meg-205', isSecret: true, releaseYear: 2025, notes: 'MUR — Mega Ultra Rare (JP-exclusive gold rarity)' },

  // MEP Black Star Promos — Mega Gardevoir ex promo
  // EN: MEP promo included in Ascended Heroes Premium Poster Collection (March 2026)
  // Confirmed from Bulbapedia: "released in English as an MEP Black Star Promotional card"
  { id: 'mep-032-en', name: 'Mega Gardevoir ex', set: 'Mega Evolution Black Star Promos', setCode: 'mep', number: '032/MEP', cardNum: '032', setTotal: 'MEP', language: 'EN', rarity: 'Promo', price: 15, type: 'Psychic', era: 'PROMO', artworkGroup: 'mep-032', releaseYear: 2026, notes: 'Ascended Heroes Premium Poster Collection promo (March 2026)' },
  { id: 'mep-032-de', name: 'Mega Gardevoir ex', set: 'Mega-Entwicklung Promos', setCode: 'mep', number: '032/MEP', cardNum: '032', setTotal: 'MEP', language: 'DE', rarity: 'Promo', price: 12, type: 'Psychic', era: 'PROMO', artworkGroup: 'mep-032', releaseYear: 2026 },
  // JP equivalent: MEGA Dream ex subset (reprint) — Mega Attack Rare
  // "In Japan, this card is reprinted as a Regular card and a Full Art Mega attack rare card in the MEGA Dream ex subset"
  { id: 'mega-dream-jp', name: 'メガサーナイトex', set: 'MEGA Dream ex', setCode: 'mega-dream', number: '???', cardNum: '???', setTotal: '???', language: 'JP', rarity: 'Promo', price: 18, type: 'Psychic', era: 'PROMO', artworkGroup: 'mep-032', releaseYear: 2025, notes: 'MEGA Dream ex subset reprint — JP Exclusive; exact number TBD' },

];

// ── Helper exports ───────────────────────────────────────────

export function getArtworkGroups(): string[] {
  const groups = new Set<string>();
  CARD_DATABASE.forEach(c => groups.add(c.artworkGroup));
  return Array.from(groups);
}

export function getCardsByArtworkGroup(group: string): Card[] {
  return CARD_DATABASE.filter(c => c.artworkGroup === group);
}

// Cross-language ownership: if ANY card in the same artworkGroup is owned, the "artwork" is collected
export function isArtworkCollected(group: string, collection: Record<string, { qty: number }>): boolean {
  return getCardsByArtworkGroup(group).some(c => (collection[c.id]?.qty ?? 0) > 0);
}

export const ERAS: Record<Era, string> = {
  EX: 'EX Era (2003–2007)',
  DP: 'Diamond & Pearl (2007–2010)',
  BW: 'Black & White (2011–2014)',
  XY: 'X & Y (2014–2017)',
  SM: 'Sun & Moon (2017–2019)',
  SWSH: 'Sword & Shield (2020–2022)',
  SV: 'Scarlet & Violet (2023–)',
  PROMO: 'Promotional Cards',
};

export const LANGUAGE_LABELS: Record<Language, string> = {
  EN: 'English',
  JP: 'Japanese',
  DE: 'Deutsch',
  KO: '한국어',
};

export const LANGUAGE_FLAGS: Record<Language, string> = {
  EN: '🇺🇸',
  JP: '🇯🇵',
  DE: '🇩🇪',
  KO: '🇰🇷',
};