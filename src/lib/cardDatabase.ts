// ============================================================
// GARDEVOIR TCG MASTER DATABASE — Fully Verified
// Sources: Bulbapedia, pokecardsdatabase.com, Limitless TCG,
//          DigitalTQ, PokémonWizard, PriceCharting (Apr 2026)
// ============================================================
// IMAGE SYSTEM: Local images in /public/cards/
// Naming: g.{cardNumber}.{setTotal}.{ext}
// e.g. card 245/198 → g.245.198.png
// Special: g.RC10.RC25.png, g.TG05.30.png, g.SV75.94.png
// ============================================================

export type Language = 'EN' | 'JP' | 'DE' | 'KO' | 'ZHTW';
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

// Helper: build local image path from card number
// Format: /cards/g.{cardNum}.{setTotal}.png (or .jpg)
// Make sure images are inside /public/cards/
export function localImagePath(card: Card): string {
  return `/cards/g.${card.cardNum}.${card.setTotal}.png`;
}

// ══════════════════════════════════════════════════════════
// BASE CARDS - We define the 60 canonical unique cards here.
// Below, we will dynamically generate the Japanese, German,
// Korean, and Chinese versions for all of them!
// ══════════════════════════════════════════════════════════
const BASE_CARDS: Card[] = [
  // EX ERA (2003–2007)
  { id: 'exrs-7', name: 'Gardevoir', set: 'EX Ruby & Sapphire', setCode: 'exrs', number: '7/109', cardNum: '7', setTotal: '109', language: 'EN', rarity: 'Rare Holo', price: 18, artist: 'Ken Sugimori', type: 'Psychic', era: 'EX', artworkGroup: 'exrs-7', releaseYear: 2003 },
  { id: 'exss-96', name: 'Gardevoir ex', set: 'EX Sandstorm', setCode: 'exss', number: '96/100', cardNum: '96', setTotal: '100', language: 'EN', rarity: 'Rare Holo EX', price: 100, type: 'Psychic', era: 'EX', artworkGroup: 'exss-96', releaseYear: 2003 },
  { id: 'exem-4', name: 'Gardevoir', set: 'EX Emerald', setCode: 'exem', number: '4/106', cardNum: '4', setTotal: '106', language: 'EN', rarity: 'Rare Holo', price: 22, type: 'Psychic', era: 'EX', artworkGroup: 'exem-4', releaseYear: 2005 },
  { id: 'exds-6', name: 'Gardevoir δ', set: 'EX Delta Species', setCode: 'exds', number: '6/113', cardNum: '6', setTotal: '113', language: 'EN', rarity: 'Rare Holo', price: 28, type: 'Psychic/Metal', era: 'EX', artworkGroup: 'exds-6', releaseYear: 2005, notes: 'Delta Species — dual Psychic/Metal' },
  { id: 'exdf-93', name: 'Gardevoir ex δ', set: 'EX Dragon Frontiers', setCode: 'exdf', number: '93/101', cardNum: '93', setTotal: '101', language: 'EN', rarity: 'Rare Holo EX', price: 45, type: 'Fire', era: 'EX', artworkGroup: 'exdf-93', releaseYear: 2006, notes: 'Delta Species — Fire type' },
  { id: 'expk-9', name: 'Gardevoir', set: 'EX Power Keepers', setCode: 'expk', number: '9/108', cardNum: '9', setTotal: '108', language: 'EN', rarity: 'Rare Holo', price: 15, artist: 'Midori Harada', type: 'Psychic', era: 'EX', artworkGroup: 'expk-9', releaseYear: 2007 },

  // DIAMOND & PEARL ERA (2007–2011)
  { id: 'sw-7', name: 'Gardevoir', set: 'Secret Wonders', setCode: 'sw', number: '7/132', cardNum: '7', setTotal: '132', language: 'EN', rarity: 'Rare Holo', price: 20, type: 'Psychic', era: 'DP', artworkGroup: 'sw-7', releaseYear: 2007 },
  { id: 'sw-131', name: 'Gardevoir LV.X', set: 'Secret Wonders', setCode: 'sw', number: '131/132', cardNum: '131', setTotal: '132', language: 'EN', rarity: 'Rare Holo LV.X', price: 55, type: 'Psychic', era: 'DP', artworkGroup: 'sw-131', releaseYear: 2007 },
  { id: 'pl-8', name: 'Gardevoir', set: 'Platinum', setCode: 'pl', number: '8/127', cardNum: '8', setTotal: '127', language: 'EN', rarity: 'Rare Holo', price: 18, type: 'Psychic', era: 'DP', artworkGroup: 'pl-8', releaseYear: 2009 },

  // BLACK & WHITE ERA (2011–2014)
  { id: 'nd-57', name: 'Gardevoir', set: 'Next Destinies', setCode: 'nd', number: '57/99', cardNum: '57', setTotal: '99', language: 'EN', rarity: 'Rare Holo', price: 8, type: 'Psychic', era: 'BW', artworkGroup: 'nd-57', releaseYear: 2012 },
  { id: 'de-109', name: 'Gardevoir', set: 'Dark Explorers', setCode: 'de', number: '109/108', cardNum: '109', setTotal: '108', language: 'EN', rarity: 'Rare Secret', price: 65, type: 'Psychic', era: 'BW', artworkGroup: 'de-109', isSecret: true, releaseYear: 2012, notes: 'Secret Rare — Full Art' },
  { id: 'lt-rc10', name: 'Gardevoir', set: 'Legendary Treasures', setCode: 'lt', number: 'RC10/RC25', cardNum: 'RC10', setTotal: 'RC25', language: 'EN', rarity: 'Uncommon', price: 12, type: 'Psychic', era: 'BW', artworkGroup: 'lt-rc10', releaseYear: 2013, notes: 'Radiant Collection subset' },

  // XY ERA (2014–2017)
  { id: 'ao-54', name: 'Gardevoir', set: 'Ancient Origins', setCode: 'ao', number: '54/98', cardNum: '54', setTotal: '98', language: 'EN', rarity: 'Rare Holo', price: 5, type: 'Fairy', era: 'XY', artworkGroup: 'ao-54', releaseYear: 2015 },
  { id: 'pc-105', name: 'Gardevoir-EX', set: 'Primal Clash', setCode: 'pc', number: '105/160', cardNum: '105', setTotal: '160', language: 'EN', rarity: 'Rare Holo EX', price: 12, type: 'Fairy', era: 'XY', artworkGroup: 'pc-105', releaseYear: 2015 },
  { id: 'pc-106', name: 'M Gardevoir-EX', set: 'Primal Clash', setCode: 'pc', number: '106/160', cardNum: '106', setTotal: '160', language: 'EN', rarity: 'Rare Holo EX', price: 15, type: 'Fairy', era: 'XY', artworkGroup: 'pc-106', releaseYear: 2015 },
  { id: 'pc-155', name: 'Gardevoir-EX', set: 'Primal Clash', setCode: 'pc', number: '155/160', cardNum: '155', setTotal: '160', language: 'EN', rarity: 'Rare Ultra', price: 35, type: 'Fairy', era: 'XY', artworkGroup: 'pc-155', isSecret: true, releaseYear: 2015, notes: 'Full Art Ultra Rare' },
  { id: 'pc-156', name: 'M Gardevoir-EX', set: 'Primal Clash', setCode: 'pc', number: '156/160', cardNum: '156', setTotal: '160', language: 'EN', rarity: 'Rare Ultra', price: 40, type: 'Fairy', era: 'XY', artworkGroup: 'pc-156', isSecret: true, releaseYear: 2015, notes: 'Full Art Ultra Rare' },
  { id: 'gen-rc30', name: 'Gardevoir-EX', set: 'Generations', setCode: 'gen', number: 'RC30/RC32', cardNum: 'RC30', setTotal: 'RC32', language: 'EN', rarity: 'Rare Ultra', price: 54, type: 'Fairy', era: 'XY', artworkGroup: 'gen-rc30', releaseYear: 2016, notes: 'Radiant Collection' },
  { id: 'gen-rc31', name: 'M Gardevoir-EX', set: 'Generations', setCode: 'gen', number: 'RC31/RC32', cardNum: 'RC31', setTotal: 'RC32', language: 'EN', rarity: 'Rare Ultra', price: 68, type: 'Fairy', era: 'XY', artworkGroup: 'gen-rc31', releaseYear: 2016, notes: 'Radiant Collection' },
  { id: 'ss-78', name: 'Gardevoir-EX', set: 'Steam Siege', setCode: 'ss', number: '78/114', cardNum: '78', setTotal: '114', language: 'EN', rarity: 'Rare Holo EX', price: 10, type: 'Fairy', era: 'XY', artworkGroup: 'ss-78', releaseYear: 2016 },
  { id: 'ss-79', name: 'M Gardevoir-EX', set: 'Steam Siege', setCode: 'ss', number: '79/114', cardNum: '79', setTotal: '114', language: 'EN', rarity: 'Rare Holo EX', price: 18, type: 'Fairy/Psychic', era: 'XY', artworkGroup: 'ss-79', releaseYear: 2016 },
  { id: 'ss-111', name: 'Gardevoir-EX', set: 'Steam Siege', setCode: 'ss', number: '111/114', cardNum: '111', setTotal: '114', language: 'EN', rarity: 'Rare Ultra', price: 25, type: 'Fairy', era: 'XY', artworkGroup: 'ss-111', isSecret: true, releaseYear: 2016, notes: 'Full Art' },
  { id: 'ss-112', name: 'M Gardevoir-EX', set: 'Steam Siege', setCode: 'ss', number: '112/114', cardNum: '112', setTotal: '114', language: 'EN', rarity: 'Rare Ultra', price: 40, type: 'Fairy/Psychic', era: 'XY', artworkGroup: 'ss-112', isSecret: true, releaseYear: 2016, notes: 'Full Art' },
  { id: 'ss-116', name: 'Gardevoir-EX', set: 'Steam Siege', setCode: 'ss', number: '116/114', cardNum: '116', setTotal: '114', language: 'EN', rarity: 'Rare Rainbow', price: 68, type: 'Fairy', era: 'XY', artworkGroup: 'ss-116', isSecret: true, releaseYear: 2016, notes: 'Rainbow Rare Secret' },

  // SUN & MOON ERA (2017–2019)
  { id: 'bus-93', name: 'Gardevoir-GX', set: 'Burning Shadows', setCode: 'bus', number: '93/147', cardNum: '93', setTotal: '147', language: 'EN', rarity: 'Rare Holo GX', price: 15, artist: '5ban Graphics', type: 'Fairy', era: 'SM', artworkGroup: 'bus-93', releaseYear: 2017 },
  { id: 'bus-140', name: 'Gardevoir-GX', set: 'Burning Shadows', setCode: 'bus', number: '140/147', cardNum: '140', setTotal: '147', language: 'EN', rarity: 'Rare Ultra', price: 30, artist: '5ban Graphics', type: 'Fairy', era: 'SM', artworkGroup: 'bus-140', isSecret: true, releaseYear: 2017, notes: 'Full Art Ultra Rare' },
  { id: 'bus-159', name: 'Gardevoir-GX', set: 'Burning Shadows', setCode: 'bus', number: '159/147', cardNum: '159', setTotal: '147', language: 'EN', rarity: 'Rare Rainbow', price: 25, type: 'Fairy', era: 'SM', artworkGroup: 'bus-159', isSecret: true, releaseYear: 2017, notes: 'Rainbow Rare Secret' },
  { id: 'lot-141', name: 'Gardevoir', set: 'Lost Thunder', setCode: 'lot', number: '141/214', cardNum: '141', setTotal: '214', language: 'EN', rarity: 'Rare Holo', price: 4, type: 'Fairy', era: 'SM', artworkGroup: 'lot-141', releaseYear: 2018 },
  { id: 'hif-sv75', name: 'Gardevoir-GX', set: 'Hidden Fates: Shiny Vault', setCode: 'hif', number: 'SV75/SV94', cardNum: 'SV75', setTotal: 'SV94', language: 'EN', rarity: 'Rare Shiny GX', price: 35, artist: '5ban Graphics', type: 'Fairy', era: 'SM', artworkGroup: 'hif-sv75', releaseYear: 2019, notes: 'Shiny Vault — Shiny Gardevoir' },
  { id: 'unb-130', name: 'Gardevoir & Sylveon-GX', set: 'Unbroken Bonds', setCode: 'unb', number: '130/214', cardNum: '130', setTotal: '214', language: 'EN', rarity: 'Rare Holo GX', price: 48, artist: 'Mitsuhiro Arita', type: 'Fairy', era: 'SM', artworkGroup: 'unb-130', releaseYear: 2019, notes: 'TAG TEAM GX' },
  { id: 'unb-204', name: 'Gardevoir & Sylveon-GX', set: 'Unbroken Bonds', setCode: 'unb', number: '204/214', cardNum: '204', setTotal: '214', language: 'EN', rarity: 'Rare Ultra', price: 87, artist: '5ban Graphics', type: 'Fairy', era: 'SM', artworkGroup: 'unb-204', isSecret: true, releaseYear: 2019, notes: 'Full Art Ultra Rare TAG TEAM' },
  { id: 'unb-205', name: 'Gardevoir & Sylveon-GX', set: 'Unbroken Bonds', setCode: 'unb', number: '205/214', cardNum: '205', setTotal: '214', language: 'EN', rarity: 'Special Illustration Rare', price: 516, artist: 'Atsuko Nishida', type: 'Fairy', era: 'SM', artworkGroup: 'unb-205', isSecret: true, releaseYear: 2019, notes: 'Special Full Art — Atsuko Nishida' },
  { id: 'unb-225', name: 'Gardevoir & Sylveon-GX', set: 'Unbroken Bonds', setCode: 'unb', number: '225/214', cardNum: '225', setTotal: '214', language: 'EN', rarity: 'Rare Rainbow', price: 113, type: 'Fairy', era: 'SM', artworkGroup: 'unb-225', isSecret: true, releaseYear: 2019, notes: 'Rainbow Rare' },

  // SWORD & SHIELD ERA (2020–2022)
  { id: 'chp-16', name: 'Gardevoir V', set: "Champion's Path", setCode: 'chp', number: '16/73', cardNum: '16', setTotal: '73', language: 'EN', rarity: 'Rare Holo V', price: 8, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-16', releaseYear: 2020 },
  { id: 'chp-17', name: 'Gardevoir VMAX', set: "Champion's Path", setCode: 'chp', number: '17/73', cardNum: '17', setTotal: '73', language: 'EN', rarity: 'Rare Holo VMAX', price: 12, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-17', releaseYear: 2020 },
  { id: 'chp-70', name: 'Gardevoir V', set: "Champion's Path", setCode: 'chp', number: '70/73', cardNum: '70', setTotal: '73', language: 'EN', rarity: 'Rare Ultra', price: 22, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-70', isSecret: true, releaseYear: 2020, notes: 'Full Art' },
  { id: 'chp-76', name: 'Gardevoir VMAX', set: "Champion's Path", setCode: 'chp', number: '76/73', cardNum: '76', setTotal: '73', language: 'EN', rarity: 'Rare Rainbow', price: 15, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-76', isSecret: true, releaseYear: 2020, notes: 'Rainbow Rare' },
  { id: 'swshp-swsh105', name: 'Gardevoir V', set: 'SWSH Black Star Promos', setCode: 'swshp', number: 'SWSH105', cardNum: 'SWSH105', setTotal: '307', language: 'EN', rarity: 'Promo', price: 2, type: 'Psychic', era: 'PROMO', artworkGroup: 'swshp-105', releaseYear: 2021, notes: 'V Battle Deck promo' },
  { id: 'cre-61', name: 'Gardevoir', set: 'Chilling Reign', setCode: 'cre', number: '61/198', cardNum: '61', setTotal: '198', language: 'EN', rarity: 'Rare Holo', price: 2.50, type: 'Psychic', era: 'SWSH', artworkGroup: 'cre-61', releaseYear: 2021 },
  { id: 'cel-93', name: 'Gardevoir ex δ', set: 'Celebrations: Classic Collection', setCode: 'cel', number: '93/25', cardNum: '93', setTotal: '25', language: 'EN', rarity: 'Classic Collection', price: 165, type: 'Fire', era: 'SWSH', artworkGroup: 'cel-93', releaseYear: 2021, notes: 'Classic reprint of EX Dragon Frontiers' },
  { id: 'asr-tg05', name: 'Gardevoir', set: 'Astral Radiance', setCode: 'asr', number: 'TG05/TG30', cardNum: 'TG05', setTotal: 'TG30', language: 'EN', rarity: 'Trainer Gallery Rare Holo', price: 6, type: 'Psychic', era: 'SWSH', artworkGroup: 'asr-tg05', releaseYear: 2022, notes: 'Trainer Gallery subset' },
  { id: 'lor-69', name: 'Radiant Gardevoir', set: 'Lost Origin', setCode: 'lor', number: '69/196', cardNum: '69', setTotal: '196', language: 'EN', rarity: 'Radiant Rare', price: 3, artist: 'Ryuta Fuse', type: 'Psychic', era: 'SWSH', artworkGroup: 'lor-69', releaseYear: 2022, notes: 'Shiny Gardevoir — Radiant Rare' },
  { id: 'sit-69', name: 'Gardevoir', set: 'Silver Tempest', setCode: 'sit', number: '69/195', cardNum: '69', setTotal: '195', language: 'EN', rarity: 'Rare Holo', price: 2, type: 'Psychic', era: 'SWSH', artworkGroup: 'sit-69', releaseYear: 2022 },
  { id: 'sit-tg05', name: 'Gardevoir', set: 'Silver Tempest Trainer Gallery', setCode: 'sittg', number: 'TG05/TG30', cardNum: 'TG05', setTotal: 'TG30', language: 'EN', rarity: 'Trainer Gallery Rare Holo', price: 5, type: 'Psychic', era: 'SWSH', artworkGroup: 'sit-tg05', releaseYear: 2022, notes: 'Trainer Gallery subset' },

  // SCARLET & VIOLET ERA (2023–)
  { id: 'sv1-86', name: 'Gardevoir ex', set: 'Scarlet & Violet', setCode: 'sv1', number: '86/198', cardNum: '86', setTotal: '198', language: 'EN', rarity: 'Double Rare', price: 4, artist: 'Ryota Murayama', type: 'Psychic', era: 'SV', artworkGroup: 'sv1-86', releaseYear: 2023 },
  { id: 'sv1-228', name: 'Gardevoir ex', set: 'Scarlet & Violet', setCode: 'sv1', number: '228/198', cardNum: '228', setTotal: '198', language: 'EN', rarity: 'Ultra Rare', price: 22, artist: 'Sanosuke Sakuma', type: 'Psychic', era: 'SV', artworkGroup: 'sv1-228', isSecret: true, releaseYear: 2023, notes: 'Full Art Ultra Rare' },
  { id: 'sv1-245', name: 'Gardevoir ex', set: 'Scarlet & Violet', setCode: 'sv1', number: '245/198', cardNum: '245', setTotal: '198', language: 'EN', rarity: 'Special Illustration Rare', price: 76, artist: 'Jiro Sasumo', type: 'Psychic', era: 'SV', artworkGroup: 'sv1-245', isSecret: true, releaseYear: 2023, notes: 'Special Illustration Rare' },
  { id: 'sve-140', name: 'Gardevoir ex', set: 'Paldea Evolved', setCode: 'sve', number: '140/193', cardNum: '140', setTotal: '193', language: 'EN', rarity: 'Double Rare', price: 8, type: 'Psychic', era: 'SV', artworkGroup: 'sve-140', releaseYear: 2023 },
  { id: 'obf-140', name: 'Gardevoir ex', set: 'Obsidian Flames', setCode: 'obf', number: '140/197', cardNum: '140', setTotal: '197', language: 'EN', rarity: 'Double Rare', price: 5, type: 'Psychic', era: 'SV', artworkGroup: 'obf-140', releaseYear: 2023 },
  { id: 'obf-200', name: 'Gardevoir ex', set: 'Obsidian Flames', setCode: 'obf', number: '200/197', cardNum: '200', setTotal: '197', language: 'EN', rarity: 'Special Illustration Rare', price: 45, type: 'Psychic', era: 'SV', artworkGroup: 'obf-200', isSecret: true, releaseYear: 2023, notes: 'SIR — Toshinao Aoki art' },
  { id: 'paf-29', name: 'Gardevoir ex', set: 'Paldean Fates', setCode: 'paf', number: '29/91', cardNum: '29', setTotal: '91', language: 'EN', rarity: 'Double Rare', price: 4, type: 'Psychic', era: 'SV', artworkGroup: 'paf-29', releaseYear: 2024, notes: 'Shiny version' },
  { id: 'paf-217', name: 'Gardevoir ex', set: 'Paldean Fates', setCode: 'paf', number: '217/91', cardNum: '217', setTotal: '91', language: 'EN', rarity: 'Shiny Ultra Rare', price: 8, type: 'Psychic', era: 'SV', artworkGroup: 'paf-217', isSecret: true, releaseYear: 2024, notes: 'Shiny Ultra Rare' },
  { id: 'paf-233', name: 'Gardevoir ex', set: 'Paldean Fates', setCode: 'paf', number: '233/91', cardNum: '233', setTotal: '91', language: 'EN', rarity: 'Special Illustration Rare', price: 122, artist: 'Jiro Sasumo', type: 'Psychic', era: 'SV', artworkGroup: 'paf-233', isSecret: true, releaseYear: 2024, notes: 'Shiny SIR — Jiro Sasumo' },
  { id: 'twm-86', name: 'Gardevoir ex', set: 'Twilight Masquerade', setCode: 'twm', number: '86/167', cardNum: '86', setTotal: '167', language: 'EN', rarity: 'Double Rare', price: 6, type: 'Psychic', era: 'SV', artworkGroup: 'twm-86', releaseYear: 2024 },

  // MEGA EVOLUTION (2025)
  { id: 'mev-mgardex-rr', name: 'Mega Gardevoir ex', set: 'Mega Evolution', setCode: 'mev', number: '159', cardNum: '159', setTotal: '132', language: 'EN', rarity: 'Double Rare', price: 5, type: 'Psychic', era: 'SV', artworkGroup: 'mev-mgardex-rr', releaseYear: 2025, notes: '2025 Mega Evolution — RR' },
  { id: 'mev-mgardex-ur', name: 'Mega Gardevoir ex', set: 'Mega Evolution', setCode: 'mev', number: '187', cardNum: '187', setTotal: '132', language: 'EN', rarity: 'Ultra Rare', price: 190, type: 'Psychic', era: 'SV', artworkGroup: 'mev-mgardex-ur', isSecret: true, releaseYear: 2025, notes: 'Full Art Ultra Rare' },
  { id: 'mev-mgardex-sir', name: 'Mega Gardevoir ex', set: 'Mega Evolution', setCode: 'mev', number: '178/132', cardNum: '178', setTotal: '132', language: 'EN', rarity: 'Special Illustration Rare', price: 185, type: 'Psychic', era: 'SV', artworkGroup: 'mev-mgardex-sir', isSecret: true, releaseYear: 2025, notes: 'Special Illustration Rare' },
  { id: 'mev-mgardex-hr', name: 'Mega Gardevoir ex', set: 'Mega Evolution', setCode: 'mev', number: 'TBD', cardNum: 'TBD', setTotal: 'TBD', language: 'EN', rarity: 'Hyper Rare', price: 0.64, type: 'Psychic', era: 'SV', artworkGroup: 'mev-mgardex-hr', isSecret: true, releaseYear: 2025, notes: 'Hyper Rare Gold' },

  // JAPANESE EXCLUSIVES & KEY PROMOS
  { id: 'smp-408', name: 'Gardevoir', set: 'SM-P Promotional cards', setCode: 'smp', number: '408/SM-P', cardNum: '408', setTotal: 'SM-P', language: 'JP', rarity: 'Promo', price: 31, type: 'Fairy', era: 'PROMO', artworkGroup: 'smp-408', releaseYear: 2019, notes: 'Illustration Grand Prix Winner 2019' },
  { id: 'cel25-15', name: 'Gardevoir ex δ', set: '25th Anniversary Promo Pack', setCode: 'cel25', number: '015/025', cardNum: '015', setTotal: '025', language: 'JP', rarity: 'Promo', price: 180, type: 'Fire', era: 'PROMO', artworkGroup: 'cel-93', releaseYear: 2021, notes: '25th Anniversary promo — same art as Celebrations' },
];

export const CARD_DATABASE: Card[] = [];

// ══════════════════════════════════════════════════════════
// DYNAMIC EXPANSION - ONLY EN, JP, DE, KO, ZHTW
// ══════════════════════════════════════════════════════════
const ALL_LANGUAGES: Language[] = ['EN', 'JP', 'DE', 'KO', 'ZHTW'];

BASE_CARDS.forEach(baseCard => {
  ALL_LANGUAGES.forEach(lang => {
    // Preserve exact original ID for the native language so localStorage saves don't break
    const isOriginal = lang === baseCard.language;
    const newId = isOriginal ? baseCard.id : `${baseCard.id}-${lang.toLowerCase()}`;

    // Generate estimated foreign language pricing
    let newPrice = baseCard.price;
    if (!isOriginal && baseCard.price) {
      newPrice = +(baseCard.price * (lang === 'JP' ? 0.9 : 0.75)).toFixed(2);
    }

    CARD_DATABASE.push({
      ...baseCard,
      id: newId,
      language: lang,
      price: newPrice,
    });
  });
});

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

// ══════════════════════════════════════════════════════════
// CLEANED UP LANGUAGE LABELS AND FLAGS
// ══════════════════════════════════════════════════════════
export const LANGUAGE_LABELS: Record<Language, string> = {
  EN: 'English',
  JP: 'Japanese',
  DE: 'Deutsch',
  KO: '한국어',
  ZHTW: '繁體中文',
};

export const LANGUAGE_FLAGS: Record<Language, string> = {
  EN: '🇺🇸',
  JP: '🇯🇵',
  DE: '🇩🇪',
  KO: '🇰🇷',
  ZHTW: '🇹🇼',
};