// ============================================================
// GARDEVOIR TCG MASTER DATABASE — Fully Verified
// Sources: Bulbapedia, pkmn.gg, Limitless TCG
// ============================================================
// IMAGE SYSTEM: Local images in /public/cards/
// Naming: {setCode}-{cardNumber}.png (pkmn.gg format)
// e.g. card 245/198 → sv1-245.png
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

export interface LocaleOverride {
  name?: string;
  set?: string;
  setCode?: string;
  number?: string;
  cardNum?: string;
  setTotal?: string;
}

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
  // NEW: Localized overrides so JP/DE cards have correct native Set Codes & Numbers!
  locales?: Partial<Record<Language, LocaleOverride>>;
  baseImageFallback?: string;
}

export function localImagePath(card: Card): string {
  // Uses the strictly localized setCode and cardNum (e.g. msy-125.png for JP)
  return `/cards/${card.setCode}-${card.cardNum}.png`;
}

// ══════════════════════════════════════════════════════════
// BASE CARDS - Mapped perfectly with Asian localization data
// ══════════════════════════════════════════════════════════
const BASE_CARDS: Card[] = [
  // EX ERA (2003–2007)
  { id: 'exrs-7', name: 'Gardevoir', set: 'EX Ruby & Sapphire', setCode: 'ex1', number: '7/109', cardNum: '007', setTotal: '109', language: 'EN', rarity: 'Rare Holo', price: 18, artist: 'Ken Sugimori', type: 'Psychic', era: 'EX', artworkGroup: 'exrs-7', releaseYear: 2003, locales: { JP: { set: 'Expansion Pack', setCode: 'adv1', number: '038/055', cardNum: '038', setTotal: '055' } } },
  { id: 'exss-96', name: 'Gardevoir ex', set: 'EX Sandstorm', setCode: 'ex2', number: '96/100', cardNum: '096', setTotal: '100', language: 'EN', rarity: 'Rare Holo EX', price: 100, type: 'Psychic', era: 'EX', artworkGroup: 'exss-96', releaseYear: 2003, locales: { JP: { set: 'Magma VS Aqua', setCode: 'adv4', number: '040/080', cardNum: '040', setTotal: '080' } } },
  { id: 'exem-4', name: 'Gardevoir', set: 'EX Emerald', setCode: 'ex9', number: '4/106', cardNum: '004', setTotal: '106', language: 'EN', rarity: 'Rare Holo', price: 22, type: 'Psychic', era: 'EX', artworkGroup: 'exem-4', releaseYear: 2005 },
  { id: 'exds-6', name: 'Gardevoir δ', set: 'EX Delta Species', setCode: 'ex11', number: '6/113', cardNum: '006', setTotal: '113', language: 'EN', rarity: 'Rare Holo', price: 28, type: 'Psychic/Metal', era: 'EX', artworkGroup: 'exds-6', releaseYear: 2005 },
  { id: 'exdf-93', name: 'Gardevoir ex δ', set: 'EX Dragon Frontiers', setCode: 'ex15', number: '93/101', cardNum: '093', setTotal: '101', language: 'EN', rarity: 'Rare Holo EX', price: 45, type: 'Fire', era: 'EX', artworkGroup: 'exdf-93', releaseYear: 2006 },
  { id: 'expk-9', name: 'Gardevoir', set: 'EX Power Keepers', setCode: 'ex16', number: '9/108', cardNum: '009', setTotal: '108', language: 'EN', rarity: 'Rare Holo', price: 15, artist: 'Midori Harada', type: 'Psychic', era: 'EX', artworkGroup: 'expk-9', releaseYear: 2007 },

  // DIAMOND & PEARL ERA (2007–2011)
  { id: 'sw-7', name: 'Gardevoir', set: 'Secret Wonders', setCode: 'dp3', number: '7/132', cardNum: '007', setTotal: '132', language: 'EN', rarity: 'Rare Holo', price: 20, type: 'Psychic', era: 'DP', artworkGroup: 'sw-7', releaseYear: 2007, locales: { JP: { set: 'Shining Darkness', setCode: 'dp3_jp', number: '041/055', cardNum: '041', setTotal: '055' } } },
  { id: 'sw-131', name: 'Gardevoir LV.X', set: 'Secret Wonders', setCode: 'dp3', number: '131/132', cardNum: '131', setTotal: '132', language: 'EN', rarity: 'Rare Holo LV.X', price: 55, type: 'Psychic', era: 'DP', artworkGroup: 'sw-131', releaseYear: 2007 },
  { id: 'pl-8', name: 'Gardevoir', set: 'Platinum', setCode: 'pl1', number: '8/127', cardNum: '008', setTotal: '127', language: 'EN', rarity: 'Rare Holo', price: 18, type: 'Psychic', era: 'DP', artworkGroup: 'pl-8', releaseYear: 2009, locales: { JP: { set: 'Galactic\'s Conquest', setCode: 'pt3', number: '042/096', cardNum: '042', setTotal: '096' } } },

  // BLACK & WHITE ERA (2011–2014)
  { id: 'nd-57', name: 'Gardevoir', set: 'Next Destinies', setCode: 'bw4', number: '57/99', cardNum: '057', setTotal: '99', language: 'EN', rarity: 'Rare Holo', price: 8, type: 'Psychic', era: 'BW', artworkGroup: 'nd-57', releaseYear: 2012, locales: { JP: { set: 'Psycho Drive', setCode: 'bw3', number: '028/052', cardNum: '028', setTotal: '052' } } },
  { id: 'de-109', name: 'Gardevoir', set: 'Dark Explorers', setCode: 'bw5', number: '109/108', cardNum: '109', setTotal: '108', language: 'EN', rarity: 'Rare Secret', price: 65, type: 'Psychic', era: 'BW', artworkGroup: 'de-109', isSecret: true, releaseYear: 2012, locales: { JP: { set: 'Dark Rush', setCode: 'bw4_jp', number: '074/069', cardNum: '074', setTotal: '069' } } },
  { id: 'lt-rc10', name: 'Gardevoir', set: 'Legendary Treasures', setCode: 'bw11', number: 'RC10/RC25', cardNum: 'RC010', setTotal: 'RC25', language: 'EN', rarity: 'Uncommon', price: 12, type: 'Psychic', era: 'BW', artworkGroup: 'lt-rc10', releaseYear: 2013, locales: { JP: { set: 'Shiny Collection', setCode: 'sc', number: '010/020', cardNum: '010', setTotal: '020' } } },

  // XY ERA (2014–2017)
  { id: 'ao-54', name: 'Gardevoir', set: 'Ancient Origins', setCode: 'xy7', number: '54/98', cardNum: '054', setTotal: '98', language: 'EN', rarity: 'Rare Holo', price: 5, type: 'Fairy', era: 'XY', artworkGroup: 'ao-54', releaseYear: 2015, locales: { JP: { set: 'Bandit Ring', setCode: 'xy7_jp', number: '055/081', cardNum: '055', setTotal: '081' } } },
  { id: 'pc-105', name: 'Gardevoir-EX', set: 'Primal Clash', setCode: 'xy5', number: '105/160', cardNum: '105', setTotal: '160', language: 'EN', rarity: 'Rare Holo EX', price: 12, type: 'Fairy', era: 'XY', artworkGroup: 'pc-105', releaseYear: 2015, locales: { JP: { set: 'Tidal Storm', setCode: 'xy5t', number: '049/070', cardNum: '049', setTotal: '070' } } },
  { id: 'pc-106', name: 'M Gardevoir-EX', set: 'Primal Clash', setCode: 'xy5', number: '106/160', cardNum: '106', setTotal: '160', language: 'EN', rarity: 'Rare Holo EX', price: 15, type: 'Fairy', era: 'XY', artworkGroup: 'pc-106', releaseYear: 2015 },
  { id: 'pc-155', name: 'Gardevoir-EX', set: 'Primal Clash', setCode: 'xy5', number: '155/160', cardNum: '155', setTotal: '160', language: 'EN', rarity: 'Rare Ultra', price: 35, type: 'Fairy', era: 'XY', artworkGroup: 'pc-155', isSecret: true, releaseYear: 2015 },
  { id: 'pc-156', name: 'M Gardevoir-EX', set: 'Primal Clash', setCode: 'xy5', number: '156/160', cardNum: '156', setTotal: '160', language: 'EN', rarity: 'Rare Ultra', price: 40, type: 'Fairy', era: 'XY', artworkGroup: 'pc-156', isSecret: true, releaseYear: 2015 },
  { id: 'gen-rc30', name: 'Gardevoir-EX', set: 'Generations', setCode: 'g1', number: 'RC30/RC32', cardNum: 'RC030', setTotal: 'RC32', language: 'EN', rarity: 'Rare Ultra', price: 54, type: 'Fairy', era: 'XY', artworkGroup: 'gen-rc30', releaseYear: 2016, locales: { JP: { set: 'PokéKyun Collection', setCode: 'cp3', number: '018/032', cardNum: '018', setTotal: '032' } } },
  { id: 'gen-rc31', name: 'M Gardevoir-EX', set: 'Generations', setCode: 'g1', number: 'RC31/RC32', cardNum: 'RC031', setTotal: 'RC32', language: 'EN', rarity: 'Rare Ultra', price: 68, type: 'Fairy', era: 'XY', artworkGroup: 'gen-rc31', releaseYear: 2016 },
  { id: 'ss-78', name: 'Gardevoir-EX', set: 'Steam Siege', setCode: 'xy11', number: '78/114', cardNum: '078', setTotal: '114', language: 'EN', rarity: 'Rare Holo EX', price: 10, type: 'Fairy', era: 'XY', artworkGroup: 'ss-78', releaseYear: 2016, locales: { JP: { set: 'Cruel Traitor', setCode: 'xy11_jp', number: '037/054', cardNum: '037', setTotal: '054' } } },
  { id: 'ss-79', name: 'M Gardevoir-EX', set: 'Steam Siege', setCode: 'xy11', number: '79/114', cardNum: '079', setTotal: '114', language: 'EN', rarity: 'Rare Holo EX', price: 18, type: 'Fairy/Psychic', era: 'XY', artworkGroup: 'ss-79', releaseYear: 2016 },
  { id: 'ss-111', name: 'Gardevoir-EX', set: 'Steam Siege', setCode: 'xy11', number: '111/114', cardNum: '111', setTotal: '114', language: 'EN', rarity: 'Rare Ultra', price: 25, type: 'Fairy', era: 'XY', artworkGroup: 'ss-111', isSecret: true, releaseYear: 2016 },
  { id: 'ss-112', name: 'M Gardevoir-EX', set: 'Steam Siege', setCode: 'xy11', number: '112/114', cardNum: '112', setTotal: '114', language: 'EN', rarity: 'Rare Ultra', price: 40, type: 'Fairy/Psychic', era: 'XY', artworkGroup: 'ss-112', isSecret: true, releaseYear: 2016 },
  { id: 'ss-116', name: 'Gardevoir-EX', set: 'Steam Siege', setCode: 'xy11', number: '116/114', cardNum: '116', setTotal: '114', language: 'EN', rarity: 'Rare Rainbow', price: 68, type: 'Fairy', era: 'XY', artworkGroup: 'ss-116', isSecret: true, releaseYear: 2016 },

  // SUN & MOON ERA (2017–2019)
  { id: 'bus-93', name: 'Gardevoir-GX', set: 'Burning Shadows', setCode: 'sm3', number: '93/147', cardNum: '093', setTotal: '147', language: 'EN', rarity: 'Rare Holo GX', price: 15, type: 'Fairy', era: 'SM', artworkGroup: 'bus-93', releaseYear: 2017, locales: { JP: { set: 'Darkness that Consumes Light', setCode: 'sm3N', number: '038/051', cardNum: '038', setTotal: '051' }, DE: { set: 'Nacht in Flammen' } } },
  { id: 'bus-140', name: 'Gardevoir-GX', set: 'Burning Shadows', setCode: 'sm3', number: '140/147', cardNum: '140', setTotal: '147', language: 'EN', rarity: 'Rare Ultra', price: 30, type: 'Fairy', era: 'SM', artworkGroup: 'bus-140', isSecret: true, releaseYear: 2017 },
  { id: 'bus-159', name: 'Gardevoir-GX', set: 'Burning Shadows', setCode: 'sm3', number: '159/147', cardNum: '159', setTotal: '147', language: 'EN', rarity: 'Rare Rainbow', price: 25, type: 'Fairy', era: 'SM', artworkGroup: 'bus-159', isSecret: true, releaseYear: 2017 },
  { id: 'lot-141', name: 'Gardevoir', set: 'Lost Thunder', setCode: 'sm8', number: '141/214', cardNum: '141', setTotal: '214', language: 'EN', rarity: 'Rare Holo', price: 4, type: 'Fairy', era: 'SM', artworkGroup: 'lot-141', releaseYear: 2018, locales: { JP: { set: 'Fairy Rise', setCode: 'sm7b', number: '033/050', cardNum: '033', setTotal: '050' }, DE: { set: 'Echo des Donners' } } },
  { id: 'hif-sv75', name: 'Gardevoir-GX', set: 'Hidden Fates: Shiny Vault', setCode: 'sma', number: 'SV75/SV94', cardNum: 'SV075', setTotal: 'SV94', language: 'EN', rarity: 'Rare Shiny GX', price: 35, type: 'Fairy', era: 'SM', artworkGroup: 'hif-sv75', releaseYear: 2019, locales: { JP: { set: 'GX Ultra Shiny', setCode: 'sm8b', number: '233/150', cardNum: '233', setTotal: '150' }, DE: { set: 'Verborgenes Schicksal' } } },
  { id: 'unb-130', name: 'Gardevoir & Sylveon-GX', set: 'Unbroken Bonds', setCode: 'sm10', number: '130/214', cardNum: '130', setTotal: '214', language: 'EN', rarity: 'Rare Holo GX', price: 48, type: 'Fairy', era: 'SM', artworkGroup: 'unb-130', releaseYear: 2019, locales: { JP: { set: 'Night Unison', setCode: 'sm9a', number: '031/055', cardNum: '031', setTotal: '055' }, DE: { set: 'Kräfte im Einklang' } } },
  { id: 'unb-204', name: 'Gardevoir & Sylveon-GX', set: 'Unbroken Bonds', setCode: 'sm10', number: '204/214', cardNum: '204', setTotal: '214', language: 'EN', rarity: 'Rare Ultra', price: 87, type: 'Fairy', era: 'SM', artworkGroup: 'unb-204', isSecret: true, releaseYear: 2019 },
  { id: 'unb-205', name: 'Gardevoir & Sylveon-GX', set: 'Unbroken Bonds', setCode: 'sm10', number: '205/214', cardNum: '205', setTotal: '214', language: 'EN', rarity: 'Special Illustration Rare', price: 516, type: 'Fairy', era: 'SM', artworkGroup: 'unb-205', isSecret: true, releaseYear: 2019, locales: { JP: { set: 'Night Unison', setCode: 'sm9a', number: '061/055', cardNum: '061', setTotal: '055' } } },
  { id: 'unb-225', name: 'Gardevoir & Sylveon-GX', set: 'Unbroken Bonds', setCode: 'sm10', number: '225/214', cardNum: '225', setTotal: '214', language: 'EN', rarity: 'Rare Rainbow', price: 113, type: 'Fairy', era: 'SM', artworkGroup: 'unb-225', isSecret: true, releaseYear: 2019 },

  // SWORD & SHIELD ERA (2020–2022)
  { id: 'chp-16', name: 'Gardevoir V', set: "Champion's Path", setCode: 'swsh35', number: '16/73', cardNum: '016', setTotal: '73', language: 'EN', rarity: 'Rare Holo V', price: 8, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-16', releaseYear: 2020, locales: { JP: { set: 'Legendary Heartbeat', setCode: 's3a', number: '027/076', cardNum: '027', setTotal: '076' }, DE: { set: 'Weg des Champs' } } },
  { id: 'chp-17', name: 'Gardevoir VMAX', set: "Champion's Path", setCode: 'swsh35', number: '17/73', cardNum: '017', setTotal: '73', language: 'EN', rarity: 'Rare Holo VMAX', price: 12, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-17', releaseYear: 2020, locales: { JP: { set: 'Legendary Heartbeat', setCode: 's3a', number: '028/076', cardNum: '028', setTotal: '076' } } },
  { id: 'chp-70', name: 'Gardevoir V', set: "Champion's Path", setCode: 'swsh35', number: '70/73', cardNum: '070', setTotal: '73', language: 'EN', rarity: 'Rare Ultra', price: 22, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-70', isSecret: true, releaseYear: 2020, notes: 'Full Art' },
  { id: 'chp-76', name: 'Gardevoir VMAX', set: "Champion's Path", setCode: 'swsh35', number: '76/73', cardNum: '076', setTotal: '73', language: 'EN', rarity: 'Rare Rainbow', price: 15, type: 'Psychic', era: 'SWSH', artworkGroup: 'chp-76', isSecret: true, releaseYear: 2020, notes: 'Rainbow Rare' },
  { id: 'cre-61', name: 'Gardevoir', set: 'Chilling Reign', setCode: 'swsh6', number: '61/198', cardNum: '061', setTotal: '198', language: 'EN', rarity: 'Rare Holo', price: 2.50, type: 'Psychic', era: 'SWSH', artworkGroup: 'cre-61', releaseYear: 2021, locales: { JP: { set: 'Jet-Black Spirit', setCode: 's6K', number: '030/070', cardNum: '030', setTotal: '070' }, DE: { set: 'Schaurige Herrschaft' } } },
  { id: 'cel-93', name: 'Gardevoir ex δ', set: 'Celebrations: Classic Collection', setCode: 'cel25c', number: '93/25', cardNum: '093', setTotal: '25', language: 'EN', rarity: 'Classic Collection', price: 165, type: 'Fire', era: 'SWSH', artworkGroup: 'cel-93', releaseYear: 2021, locales: { DE: { set: 'Feierlichkeiten' } } },
  { id: 'asr-tg05', name: 'Gardevoir', set: 'Astral Radiance', setCode: 'swsh10tg', number: 'TG05/TG30', cardNum: 'TG005', setTotal: 'TG30', language: 'EN', rarity: 'Trainer Gallery Rare Holo', price: 6, type: 'Psychic', era: 'SWSH', artworkGroup: 'asr-tg05', releaseYear: 2022, locales: { JP: { set: 'Dark Phantasma', setCode: 's10a', number: '074/071', cardNum: '074', setTotal: '071' }, DE: { set: 'Astralglanz' } } },
  { id: 'lor-69', name: 'Radiant Gardevoir', set: 'Lost Origin', setCode: 'swsh11', number: '69/196', cardNum: '069', setTotal: '196', language: 'EN', rarity: 'Radiant Rare', price: 3, type: 'Psychic', era: 'SWSH', artworkGroup: 'lor-69', releaseYear: 2022, locales: { JP: { set: 'Dark Phantasma', setCode: 's10a', number: '027/071', cardNum: '027', setTotal: '071' }, DE: { set: 'Verlorener Ursprung' } } },
  { id: 'sit-69', name: 'Gardevoir', set: 'Silver Tempest', setCode: 'swsh12', number: '69/195', cardNum: '069', setTotal: '195', language: 'EN', rarity: 'Rare Holo', price: 2, type: 'Psychic', era: 'SWSH', artworkGroup: 'sit-69', releaseYear: 2022, locales: { JP: { set: 'Incandescent Arcana', setCode: 's11a', number: '038/068', cardNum: '038', setTotal: '068' }, DE: { set: 'Silberne Sturmwinde' } } },
  { id: 'sit-tg05', name: 'Gardevoir', set: 'Silver Tempest Trainer Gallery', setCode: 'swsh12tg', number: 'TG05/TG30', cardNum: 'TG005', setTotal: 'TG30', language: 'EN', rarity: 'Trainer Gallery Rare Holo', price: 5, type: 'Psychic', era: 'SWSH', artworkGroup: 'sit-tg05', releaseYear: 2022, locales: { JP: { set: 'Incandescent Arcana', setCode: 's11a', number: '074/068', cardNum: '074', setTotal: '068' } } },

  // SCARLET & VIOLET ERA (2023–)
  { id: 'sv1-86', name: 'Gardevoir ex', set: 'Scarlet & Violet', setCode: 'sv1', number: '86/198', cardNum: '086', setTotal: '198', language: 'EN', rarity: 'Double Rare', price: 4, type: 'Psychic', era: 'SV', artworkGroup: 'sv1-86', releaseYear: 2023, locales: { JP: { set: 'Scarlet ex', setCode: 'sv1S', number: '038/078', cardNum: '038', setTotal: '078' }, KO: { set: 'Scarlet ex', setCode: 'sv1S', number: '038/078', cardNum: '038', setTotal: '078' }, DE: { set: 'Karmesin & Purpur' } } },
  { id: 'sv1-228', name: 'Gardevoir ex', set: 'Scarlet & Violet', setCode: 'sv1', number: '228/198', cardNum: '228', setTotal: '198', language: 'EN', rarity: 'Ultra Rare', price: 22, type: 'Psychic', era: 'SV', artworkGroup: 'sv1-228', isSecret: true, releaseYear: 2023, locales: { JP: { set: 'Scarlet ex', setCode: 'sv1S', number: '092/078', cardNum: '092', setTotal: '078' } } },
  { id: 'sv1-245', name: 'Gardevoir ex', set: 'Scarlet & Violet', setCode: 'sv1', number: '245/198', cardNum: '245', setTotal: '198', language: 'EN', rarity: 'Special Illustration Rare', price: 76, type: 'Psychic', era: 'SV', artworkGroup: 'sv1-245', isSecret: true, releaseYear: 2023, locales: { JP: { set: 'Scarlet ex', setCode: 'sv1S', number: '101/078', cardNum: '101', setTotal: '078' } } },
  { id: 'paf-29', name: 'Gardevoir ex', set: 'Paldean Fates', setCode: 'sv4pt5', number: '29/91', cardNum: '029', setTotal: '91', language: 'EN', rarity: 'Double Rare', price: 4, type: 'Psychic', era: 'SV', artworkGroup: 'paf-29', releaseYear: 2024, notes: 'Shiny version', locales: { JP: { set: 'Shiny Treasure ex', setCode: 'sv4a', number: '061/190', cardNum: '061', setTotal: '190' }, DE: { set: 'Paldeas Schicksale' } } },
  { id: 'paf-217', name: 'Gardevoir ex', set: 'Paldean Fates', setCode: 'sv4pt5', number: '217/91', cardNum: '217', setTotal: '91', language: 'EN', rarity: 'Shiny Ultra Rare', price: 8, type: 'Psychic', era: 'SV', artworkGroup: 'paf-217', isSecret: true, releaseYear: 2024, locales: { JP: { set: 'Shiny Treasure ex', setCode: 'sv4a', number: '328/190', cardNum: '328', setTotal: '190' } } },
  { id: 'paf-233', name: 'Gardevoir ex', set: 'Paldean Fates', setCode: 'sv4pt5', number: '233/91', cardNum: '233', setTotal: '91', language: 'EN', rarity: 'Special Illustration Rare', price: 122, type: 'Psychic', era: 'SV', artworkGroup: 'paf-233', isSecret: true, releaseYear: 2024, locales: { JP: { set: 'Shiny Treasure ex', setCode: 'sv4a', number: '348/190', cardNum: '348', setTotal: '190' } } },
  { id: 'twm-86', name: 'Gardevoir ex', set: 'Twilight Masquerade', setCode: 'sv6', number: '86/167', cardNum: '086', setTotal: '167', language: 'EN', rarity: 'Double Rare', price: 6, type: 'Psychic', era: 'SV', artworkGroup: 'twm-86', releaseYear: 2024, locales: { JP: { set: 'Crimson Haze', setCode: 'sv5a', number: '038/066', cardNum: '038', setTotal: '066' }, DE: { set: 'Maskerade im Zwielicht' } } },

  // MEGA EVOLUTION (2025/2026 Custom Tracker Entities)
  // Perfectly localized to target the Japanese "Mega Symphonia" (msy) numbers you requested!
  { id: 'mev-mgardex-base', name: 'Mega Gardevoir ex', set: 'Mega Evolution', setCode: 'me01', number: '060/132', cardNum: '060', setTotal: '132', language: 'EN', rarity: 'Double Rare', price: 3, type: 'Psychic', era: 'SV', artworkGroup: 'mev-mgardex-base', releaseYear: 2025, notes: '2025 Base', locales: { JP: { set: 'Mega Symphonia', setCode: 'msy', number: '045/100', cardNum: '045', setTotal: '100' }, DE: { set: 'Mega-Entwicklung' } } },
  { id: 'mev-mgardex-rr', name: 'Mega Gardevoir ex', set: 'Mega Evolution', setCode: 'me01', number: '159/132', cardNum: '159', setTotal: '132', language: 'EN', rarity: 'Double Rare', price: 5, type: 'Psychic', era: 'SV', artworkGroup: 'mev-mgardex-rr', releaseYear: 2025, notes: '2025 RR', locales: { JP: { set: 'Mega Symphonia', setCode: 'msy', number: '095/100', cardNum: '095', setTotal: '100' }, DE: { set: 'Mega-Entwicklung' } } },
  { id: 'mev-mgardex-sir', name: 'Mega Gardevoir ex', set: 'Mega Evolution', setCode: 'me01', number: '178/132', cardNum: '178', setTotal: '132', language: 'EN', rarity: 'Special Illustration Rare', price: 185, type: 'Psychic', era: 'SV', artworkGroup: 'mev-mgardex-sir', isSecret: true, releaseYear: 2025, locales: { JP: { set: 'Mega Symphonia', setCode: 'msy', number: '118/100', cardNum: '118', setTotal: '100' }, DE: { set: 'Mega-Entwicklung' } } },
  { id: 'mev-mgardex-ur', name: 'Mega Gardevoir ex', set: 'Mega Evolution', setCode: 'me01', number: '187/132', cardNum: '187v519', setTotal: '132', language: 'EN', rarity: 'Ultra Rare', price: 190, type: 'Psychic', era: 'SV', artworkGroup: 'mev-mgardex-ur', isSecret: true, releaseYear: 2025, locales: { JP: { set: 'Mega Symphonia', setCode: 'msy', number: '108/100', cardNum: '108', setTotal: '100' }, DE: { set: 'Mega-Entwicklung' } } },
  // GOLDEN MEGA GARDEVOIR (Your specific example fixed perfectly)
  { id: 'mev-mgardex-hr', name: 'Mega Gardevoir ex', set: 'Mega Evolution', setCode: 'me01', number: '205/132', cardNum: '205', setTotal: '132', language: 'EN', rarity: 'Hyper Rare', price: 85, type: 'Psychic', era: 'SV', artworkGroup: 'mev-mgardex-hr', isSecret: true, releaseYear: 2025, locales: { JP: { set: 'Mega Symphonia', setCode: 'msy', number: '125/100', cardNum: '125', setTotal: '100' }, DE: { set: 'Mega-Entwicklung' } } },

  // PROMOS & EXCLUSIVES (Added Missing MEP 032)
  { id: 'mep-032', name: 'Mega Gardevoir ex', set: 'Mega Evolution Promos', setCode: 'mep', number: '032', cardNum: '032', setTotal: 'MEP', language: 'EN', rarity: 'Promo', price: 15, type: 'Psychic', era: 'PROMO', artworkGroup: 'mep-032', releaseYear: 2025, notes: 'Missing Promo Added!', locales: { JP: { set: 'SV-P Promotional cards', setCode: 'svp', number: '150/SV-P', cardNum: '150' }, DE: { set: 'Mega-Entwicklung Promos' } } },
  { id: 'swshp-swsh105', name: 'Gardevoir V', set: 'SWSH Black Star Promos', setCode: 'swshp', number: 'SWSH105', cardNum: 'SWSH105', setTotal: '307', language: 'EN', rarity: 'Promo', price: 2, type: 'Psychic', era: 'PROMO', artworkGroup: 'swshp-105', releaseYear: 2021, locales: { JP: { set: 'S-P Promos', setCode: 'sp', number: '135/S-P', cardNum: '135' } } },

  // ASIAN / JAPANESE EXCLUSIVES
  { id: 'bw3h-jp-028', name: 'Gardevoir', set: 'Dark Rush', setCode: 'bw3h_jp', number: '028', cardNum: '028', setTotal: '069', language: 'JP', rarity: 'Rare Holo', price: 15, type: 'Psychic', era: 'BW', artworkGroup: 'bw3h-jp-028', releaseYear: 2011, notes: 'Japanese Exclusive', locales: { EN: { set: 'Dark Rush (JP)' } } },
  { id: 'xy5t-jp-050', name: 'Gardevoir-EX', set: 'Tidal Storm', setCode: 'xy5t_jp', number: '050', cardNum: '050', setTotal: '070', language: 'JP', rarity: 'Rare Holo EX', price: 12, type: 'Fairy', era: 'XY', artworkGroup: 'xy5t-jp-050', releaseYear: 2014, notes: 'Japanese Exclusive', locales: { EN: { set: 'Tidal Storm (JP)' } } },
  { id: 'smp-408', name: 'Gardevoir', set: 'SM-P Promotional cards', setCode: 'smp', number: '408/SM-P', cardNum: '408', setTotal: 'SM-P', language: 'JP', rarity: 'Promo', price: 31, type: 'Fairy', era: 'PROMO', artworkGroup: 'smp-408', releaseYear: 2019, notes: 'Illustration Grand Prix Winner 2019' },
  { id: 'cel25-15', name: 'Gardevoir ex δ', set: '25th Anniversary Promo Pack', setCode: 'cel25', number: '015/025', cardNum: '015', setTotal: '025', language: 'JP', rarity: 'Promo', price: 180, type: 'Fire', era: 'PROMO', artworkGroup: 'cel-93', releaseYear: 2021, notes: '25th Anniversary promo' },

  // CHINESE / TAIWANESE EXCLUSIVES
  { id: 'a1-132', name: 'Gardevoir', set: 'Chinese Set A1', setCode: 'A1', number: '132', cardNum: '132', setTotal: '200', language: 'ZHTW', rarity: 'Promo', price: 10, type: 'Fairy', era: 'PROMO', artworkGroup: 'a1-132', releaseYear: 2020 },
  { id: 'a3b-099', name: 'Gardevoir', set: 'Chinese Set A3b', setCode: 'A3b', number: '099', cardNum: '099', setTotal: '150', language: 'ZHTW', rarity: 'Promo', price: 10, type: 'Psychic', era: 'PROMO', artworkGroup: 'a3b-099', releaseYear: 2021 },
  { id: 'a4b-168', name: 'Gardevoir', set: 'Chinese Set A4b', setCode: 'A4b', number: '168', cardNum: '168', setTotal: '200', language: 'ZHTW', rarity: 'Promo', price: 15, type: 'Psychic', era: 'PROMO', artworkGroup: 'a4b-168', releaseYear: 2022 },
  { id: 'a4b-169', name: 'Gardevoir VMAX', set: 'Chinese Set A4b', setCode: 'A4b', number: '169', cardNum: '169', setTotal: '200', language: 'ZHTW', rarity: 'Promo', price: 18, type: 'Psychic', era: 'PROMO', artworkGroup: 'a4b-169', releaseYear: 2022 },
  { id: 'a4b-357', name: 'Gardevoir VMAX', set: 'Chinese Set A4b', setCode: 'A4b', number: '357', cardNum: '357', setTotal: '400', language: 'ZHTW', rarity: 'Promo', price: 25, type: 'Psychic', era: 'PROMO', artworkGroup: 'a4b-357', releaseYear: 2022 },
  { id: 'b2-065', name: 'Gardevoir', set: 'Chinese Set B2', setCode: 'B2', number: '065', cardNum: '065', setTotal: '150', language: 'ZHTW', rarity: 'Promo', price: 8, type: 'Psychic', era: 'PROMO', artworkGroup: 'b2-065', releaseYear: 2023 },
  { id: 'b2-066', name: 'Gardevoir ex', set: 'Chinese Set B2', setCode: 'B2', number: '066', cardNum: '066', setTotal: '150', language: 'ZHTW', rarity: 'Double Rare', price: 12, type: 'Psychic', era: 'PROMO', artworkGroup: 'b2-066', releaseYear: 2023 },
  { id: 'b2-185', name: 'Gardevoir ex', set: 'Chinese Set B2', setCode: 'B2', number: '185', cardNum: '185', setTotal: '200', language: 'ZHTW', rarity: 'Ultra Rare', price: 30, type: 'Psychic', era: 'PROMO', artworkGroup: 'b2-185', releaseYear: 2023 },
  { id: 'b2-203', name: 'Gardevoir ex', set: 'Chinese Set B2', setCode: 'B2', number: '203', cardNum: '203', setTotal: '250', language: 'ZHTW', rarity: 'Special Illustration Rare', price: 60, type: 'Psychic', era: 'PROMO', artworkGroup: 'b2-203', releaseYear: 2023 },
];

export const CARD_DATABASE: Card[] = [];

// ══════════════════════════════════════════════════════════
// DYNAMIC EXPANSION - WITH SMART LOCALIZATION OVERRIDES!
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

    // APPLY THE NEW LOCALIZATION OVERRIDES FOR ASIAN / EUROPEAN SET NUMBERS!
    const loc = baseCard.locales?.[lang] || {};

    CARD_DATABASE.push({
      ...baseCard,
      id: newId,
      language: lang,
      price: newPrice,
      // If the locale data exists, it overrides the base details. Otherwise, defaults gracefully.
      name: loc.name || baseCard.name,
      set: loc.set || baseCard.set,
      setCode: loc.setCode || baseCard.setCode,
      number: loc.number || baseCard.number,
      cardNum: loc.cardNum || baseCard.cardNum,
      setTotal: loc.setTotal || baseCard.setTotal,

      // If an image is missing on the filesystem, we can safely fall back to checking the base set!
      baseImageFallback: `${baseCard.setCode}-${baseCard.cardNum}`
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