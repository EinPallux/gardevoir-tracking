// Comprehensive Gardevoir TCG Master Card Database
// Sources: Bulbapedia, TCGPlayer, Pokescreener, PriceCharting (April 2026 estimates)
// Images: images.pokemontcg.io CDN

export type Language = 'EN' | 'JP' | 'DE' | 'FR' | 'IT' | 'ES' | 'PT' | 'KO' | 'ZHTW';
export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Rare Holo' | 'Rare Holo EX' | 'Rare Holo LV.X' | 'Ultra Rare' | 'Secret Rare' | 'Double Rare' | 'Illustration Rare' | 'Special Illustration Rare' | 'Hyper Rare' | 'Shiny Rare' | 'Shiny Ultra Rare' | 'ACE SPEC Rare' | 'Promo' | 'Classic Collection' | 'Trainer Gallery';

export interface Card {
  id: string;
  name: string;
  set: string;
  setCode: string;
  number: string;
  language: Language;
  rarity: Rarity;
  price: number | null;
  artist?: string;
  type?: string;
  era: 'EX' | 'DP' | 'BW' | 'XY' | 'SM' | 'SWSH' | 'SV' | 'PROMO';
  isSecret?: boolean;
  artworkGroup?: string;
  releaseYear: number;
  notes?: string;
  imageUrl?: string;
}

const I = (setId: string, num: string | number) =>
  `https://images.pokemontcg.io/${setId}/${num}.png`;

export const CARD_DATABASE: Card[] = [
  // ─── EX ERA ──────────────────────────────────────────────────────────────
  { id:'exrs-7-en', name:'Gardevoir', set:'EX Ruby & Sapphire', setCode:'EXRS', number:'7/109', language:'EN', rarity:'Rare Holo', price:18, type:'Psychic', era:'EX', artworkGroup:'exrs-7', releaseYear:2003, imageUrl:I('ex1','7') },
  { id:'adv-029-jp', name:'Gardevoir', set:'ADV Expansion Pack', setCode:'ADV', number:'029/055', language:'JP', rarity:'Rare Holo', price:12, type:'Psychic', era:'EX', artworkGroup:'exrs-7', releaseYear:2003 },
  { id:'exrs-7-de', name:'Gardevoir', set:'EX Ruby & Sapphire', setCode:'EXRS', number:'7/109', language:'DE', rarity:'Rare Holo', price:20, type:'Psychic', era:'EX', artworkGroup:'exrs-7', releaseYear:2003, imageUrl:I('ex1','7') },
  { id:'exss-96-en', name:'Gardevoir ex', set:'EX Sandstorm', setCode:'EXSS', number:'96/100', language:'EN', rarity:'Rare Holo EX', price:35, type:'Psychic', era:'EX', artworkGroup:'exss-96', releaseYear:2003, imageUrl:I('ex3','96') },
  { id:'miracle-028-jp', name:'Gardevoir ex', set:'Miracle of the Desert', setCode:'MOTD', number:'028/053', language:'JP', rarity:'Rare Holo EX', price:25, type:'Psychic', era:'EX', artworkGroup:'exss-96', releaseYear:2003 },
  { id:'exss-96-de', name:'Gardevoir ex', set:'EX Sandstorm', setCode:'EXSS', number:'96/100', language:'DE', rarity:'Rare Holo EX', price:40, type:'Psychic', era:'EX', artworkGroup:'exss-96', releaseYear:2003, imageUrl:I('ex3','96') },
  { id:'exem-4-en', name:'Gardevoir', set:'EX Emerald', setCode:'EXEM', number:'4/106', language:'EN', rarity:'Rare Holo', price:22, type:'Psychic', era:'EX', artworkGroup:'exem-4', releaseYear:2005, imageUrl:I('ex7','4') },
  { id:'pcgp-070-jp', name:'Gardevoir', set:'PCG-P Promo', setCode:'PCGP', number:'070/PCG-P', language:'JP', rarity:'Promo', price:15, type:'Psychic', era:'PROMO', artworkGroup:'exem-4', releaseYear:2005 },
  { id:'exds-6-en', name:'Gardevoir δ', set:'EX Delta Species', setCode:'EXDS', number:'6/113', language:'EN', rarity:'Rare Holo', price:28, type:'Psychic/Metal', era:'EX', artworkGroup:'exds-6', releaseYear:2005, notes:'Delta Species', imageUrl:I('ex9','6') },
  { id:'holon-050-jp', name:'Gardevoir δ', set:'Holon Research Tower', setCode:'HRT', number:'050/086', language:'JP', rarity:'Rare Holo', price:18, type:'Psychic/Metal', era:'EX', artworkGroup:'exds-6', releaseYear:2005 },
  { id:'exdf-93-en', name:'Gardevoir ex δ', set:'EX Dragon Frontiers', setCode:'EXDF', number:'93/101', language:'EN', rarity:'Rare Holo EX', price:45, type:'Fire', era:'EX', artworkGroup:'exdf-93', releaseYear:2006, notes:'Delta Species — Fire type', imageUrl:I('ex15','93') },
  { id:'imprison-005-jp', name:'Gardevoir ex δ', set:'Imprison! Gardevoir ex Deck', setCode:'IMPDECK', number:'005/024', language:'JP', rarity:'Rare Holo EX', price:30, type:'Fire', era:'EX', artworkGroup:'exdf-93', releaseYear:2006 },
  { id:'expk-9-en', name:'Gardevoir', set:'EX Power Keepers', setCode:'EXPK', number:'9/108', language:'EN', rarity:'Rare Holo', price:15, type:'Psychic', era:'EX', artworkGroup:'expk-9', releaseYear:2007, imageUrl:I('ex16','9') },
  { id:'wcp-034-jp', name:'Gardevoir', set:'World Champions Pack', setCode:'WCP', number:'034/108', language:'JP', rarity:'Rare Holo', price:12, type:'Psychic', era:'EX', artworkGroup:'expk-9', releaseYear:2007 },

  // ─── DP ERA ──────────────────────────────────────────────────────────────
  { id:'sw-7-en', name:'Gardevoir', set:'Secret Wonders', setCode:'SW', number:'7/132', language:'EN', rarity:'Rare Holo', price:20, type:'Psychic', era:'DP', artworkGroup:'sw-7', releaseYear:2007, imageUrl:I('dp3','7') },
  { id:'dawndash-jp', name:'Gardevoir', set:'Dawn Dash', setCode:'DD', number:'See set', language:'JP', rarity:'Rare Holo', price:15, type:'Psychic', era:'DP', artworkGroup:'sw-7', releaseYear:2007 },
  { id:'sw-131-en', name:'Gardevoir LV.X', set:'Secret Wonders', setCode:'SW', number:'131/132', language:'EN', rarity:'Rare Holo LV.X', price:55, type:'Psychic', era:'DP', artworkGroup:'sw-131', releaseYear:2007, imageUrl:I('dp3','131') },
  { id:'dawndash-lvx-jp', name:'Gardevoir LV.X', set:'Dawn Dash', setCode:'DD', number:'See set', language:'JP', rarity:'Rare Holo LV.X', price:40, type:'Psychic', era:'DP', artworkGroup:'sw-131', releaseYear:2007 },
  { id:'pl-8-en', name:'Gardevoir', set:'Platinum', setCode:'PL', number:'8/127', language:'EN', rarity:'Rare Holo', price:18, type:'Psychic', era:'DP', artworkGroup:'pl-8', releaseYear:2009, imageUrl:I('pl1','8') },
  { id:'galactic-045-jp', name:'Gardevoir', set:"Galactic's Conquest", setCode:'GC', number:'045/096', language:'JP', rarity:'Rare Holo', price:12, type:'Psychic', era:'DP', artworkGroup:'pl-8', releaseYear:2009 },

  // ─── BW ERA ──────────────────────────────────────────────────────────────
  { id:'nd-57-en', name:'Gardevoir', set:'Next Destinies', setCode:'ND', number:'57/99', language:'EN', rarity:'Rare Holo', price:8, type:'Psychic', era:'BW', artworkGroup:'nd-57', releaseYear:2012, imageUrl:I('bw4','57') },
  { id:'hailblizzard-028-jp', name:'Gardevoir', set:'Hail Blizzard', setCode:'HB', number:'028/052', language:'JP', rarity:'Rare', price:6, type:'Psychic', era:'BW', artworkGroup:'nd-57', releaseYear:2012 },
  { id:'de-109-en', name:'Gardevoir', set:'Dark Explorers', setCode:'DE', number:'109/108', language:'EN', rarity:'Secret Rare', price:65, type:'Psychic', era:'BW', artworkGroup:'de-109', isSecret:true, releaseYear:2012, imageUrl:I('bw5','109') },
  { id:'darkrush-074-jp', name:'Gardevoir', set:'Dark Rush', setCode:'DR', number:'074/069', language:'JP', rarity:'Secret Rare', price:50, type:'Psychic', era:'BW', artworkGroup:'de-109', isSecret:true, releaseYear:2012 },
  { id:'lt-rc10-en', name:'Gardevoir', set:'Legendary Treasures', setCode:'LT', number:'RC10/RC25', language:'EN', rarity:'Rare Holo', price:12, type:'Psychic', era:'BW', artworkGroup:'lt-rc10', releaseYear:2013, imageUrl:I('bw11','RC10') },
  { id:'shinycollection-010-jp', name:'Gardevoir', set:'Shiny Collection', setCode:'SC', number:'010/020', language:'JP', rarity:'Uncommon', price:8, type:'Psychic', era:'BW', artworkGroup:'lt-rc10', releaseYear:2013 },

  // ─── XY ERA ──────────────────────────────────────────────────────────────
  { id:'pc-105-en', name:'Gardevoir-EX', set:'Primal Clash', setCode:'PC', number:'105/160', language:'EN', rarity:'Ultra Rare', price:12, type:'Fairy', era:'XY', artworkGroup:'pc-105', releaseYear:2015, imageUrl:I('xy5','105') },
  { id:'tidalstorm-050-jp', name:'Gardevoir-EX', set:'Tidal Storm', setCode:'TS', number:'050/070', language:'JP', rarity:'Ultra Rare', price:10, type:'Fairy', era:'XY', artworkGroup:'pc-105', releaseYear:2015 },
  { id:'pc-155-en', name:'Gardevoir-EX', set:'Primal Clash', setCode:'PC', number:'155/160', language:'EN', rarity:'Secret Rare', price:35, type:'Fairy', era:'XY', artworkGroup:'pc-155', isSecret:true, releaseYear:2015, notes:'Full Art', imageUrl:I('xy5','155') },
  { id:'tidalstorm-075-jp', name:'Gardevoir-EX', set:'Tidal Storm', setCode:'TS', number:'075/070', language:'JP', rarity:'Secret Rare', price:28, type:'Fairy', era:'XY', artworkGroup:'pc-155', isSecret:true, releaseYear:2015 },
  { id:'pc-106-en', name:'M Gardevoir-EX', set:'Primal Clash', setCode:'PC', number:'106/160', language:'EN', rarity:'Ultra Rare', price:15, type:'Fairy', era:'XY', artworkGroup:'pc-106', releaseYear:2015, imageUrl:I('xy5','106') },
  { id:'tidalstorm-051-jp', name:'M Gardevoir-EX', set:'Tidal Storm', setCode:'TS', number:'051/070', language:'JP', rarity:'Ultra Rare', price:12, type:'Fairy', era:'XY', artworkGroup:'pc-106', releaseYear:2015 },
  { id:'pc-156-en', name:'M Gardevoir-EX', set:'Primal Clash', setCode:'PC', number:'156/160', language:'EN', rarity:'Secret Rare', price:40, type:'Fairy', era:'XY', artworkGroup:'pc-156', isSecret:true, releaseYear:2015, notes:'Full Art', imageUrl:I('xy5','156') },
  { id:'gen-rc30-en', name:'Gardevoir-EX', set:'Generations', setCode:'GEN', number:'RC30/RC32', language:'EN', rarity:'Ultra Rare', price:18, type:'Fairy', era:'XY', artworkGroup:'gen-rc30', releaseYear:2016, imageUrl:I('g1','RC30') },
  { id:'pokekyun-019-jp', name:'Gardevoir-EX', set:'PokéKyun Collection', setCode:'PKC', number:'019/032', language:'JP', rarity:'Ultra Rare', price:14, type:'Fairy', era:'XY', artworkGroup:'gen-rc30', releaseYear:2016 },
  { id:'gen-rc31-en', name:'M Gardevoir-EX', set:'Generations', setCode:'GEN', number:'RC31/RC32', language:'EN', rarity:'Ultra Rare', price:20, type:'Fairy', era:'XY', artworkGroup:'gen-rc31', releaseYear:2016, imageUrl:I('g1','RC31') },
  { id:'ss-78-en', name:'Gardevoir-EX', set:'Steam Siege', setCode:'SS', number:'78/114', language:'EN', rarity:'Ultra Rare', price:10, type:'Fairy', era:'XY', artworkGroup:'ss-78', releaseYear:2016, imageUrl:I('xy11','78') },
  { id:'crueltraitor-038-jp', name:'Gardevoir-EX', set:'Cruel Traitor', setCode:'CT', number:'038/054', language:'JP', rarity:'Ultra Rare', price:8, type:'Fairy', era:'XY', artworkGroup:'ss-78', releaseYear:2016 },
  { id:'ss-111-en', name:'Gardevoir-EX', set:'Steam Siege', setCode:'SS', number:'111/114', language:'EN', rarity:'Secret Rare', price:25, type:'Fairy', era:'XY', artworkGroup:'ss-111', isSecret:true, releaseYear:2016, notes:'Full Art', imageUrl:I('xy11','111') },
  { id:'ss-116-en', name:'Gardevoir-EX', set:'Steam Siege', setCode:'SS', number:'116/114', language:'EN', rarity:'Secret Rare', price:55, type:'Fairy', era:'XY', artworkGroup:'ss-116', isSecret:true, releaseYear:2016, notes:'Rainbow', imageUrl:I('xy11','116') },
  { id:'ao-54-en', name:'Gardevoir', set:'Ancient Origins', setCode:'AO', number:'54/98', language:'EN', rarity:'Rare Holo', price:5, type:'Fairy', era:'XY', artworkGroup:'ao-54', releaseYear:2015, imageUrl:I('xy7','54') },
  { id:'banditring-054-jp', name:'Gardevoir', set:'Bandit Ring', setCode:'BR', number:'054/081', language:'JP', rarity:'Rare', price:4, type:'Fairy', era:'XY', artworkGroup:'ao-54', releaseYear:2015 },

  // ─── SM ERA ──────────────────────────────────────────────────────────────
  { id:'lt-141-en', name:'Gardevoir', set:'Lost Thunder', setCode:'LT', number:'141/214', language:'EN', rarity:'Rare Holo', price:4, type:'Fairy', era:'SM', artworkGroup:'lt-141', releaseYear:2018, imageUrl:I('sm8','141') },
  { id:'fairyrise-030-jp', name:'Gardevoir', set:'Fairy Rise', setCode:'FR', number:'030/050', language:'JP', rarity:'Rare', price:3, type:'Fairy', era:'SM', artworkGroup:'lt-141', releaseYear:2018 },
  { id:'smp-408-jp', name:'Gardevoir', set:'SM-P Promo', setCode:'SMP', number:'408/SM-P', language:'JP', rarity:'Promo', price:8, type:'Fairy', era:'PROMO', artworkGroup:'smp-408', releaseYear:2019 },

  // ─── SWSH ERA ────────────────────────────────────────────────────────────
  { id:'cr-61-en', name:'Gardevoir', set:'Chilling Reign', setCode:'CR', number:'061/198', language:'EN', rarity:'Rare Holo', price:2.50, type:'Psychic', era:'SWSH', artworkGroup:'cr-61', releaseYear:2021, imageUrl:I('swsh6','61') },
  { id:'silverlance-035-jp', name:'Gardevoir', set:'Silver Lance', setCode:'SL', number:'035/070', language:'JP', rarity:'Rare', price:2, type:'Psychic', era:'SWSH', artworkGroup:'cr-61', releaseYear:2021 },
  { id:'ar-tg05-en', name:'Gardevoir', set:'Astral Radiance', setCode:'AR', number:'TG05/TG30', language:'EN', rarity:'Trainer Gallery', price:4, type:'Psychic', era:'SWSH', artworkGroup:'ar-tg05', releaseYear:2022, notes:'Trainer Gallery', imageUrl:I('swsh10','TG05') },
  { id:'vmaxclimax-196-jp', name:'Gardevoir', set:'VMAX Climax', setCode:'VMC', number:'196/184', language:'JP', rarity:'Secret Rare', price:12, type:'Psychic', era:'SWSH', artworkGroup:'ar-tg05', isSecret:true, releaseYear:2021, notes:'CHR' },
  { id:'st-69-en', name:'Gardevoir', set:'Silver Tempest', setCode:'ST', number:'069/195', language:'EN', rarity:'Rare Holo', price:2, type:'Psychic', era:'SWSH', artworkGroup:'st-69', releaseYear:2022, imageUrl:I('swsh12','69') },
  { id:'incandescent-038-jp', name:'Gardevoir', set:'Incandescent Arcana', setCode:'IA', number:'038/068', language:'JP', rarity:'Uncommon', price:1.50, type:'Psychic', era:'SWSH', artworkGroup:'st-69', releaseYear:2022 },
  { id:'st-tg05-en', name:'Gardevoir', set:'Silver Tempest', setCode:'ST', number:'TG05/TG30', language:'EN', rarity:'Trainer Gallery', price:5, type:'Psychic', era:'SWSH', artworkGroup:'st-tg05', releaseYear:2022, notes:'Trainer Gallery', imageUrl:I('swsh12','TG05') },
  { id:'incandescent-072-jp', name:'Gardevoir', set:'Incandescent Arcana', setCode:'IA', number:'072/068', language:'JP', rarity:'Secret Rare', price:8, type:'Psychic', era:'SWSH', artworkGroup:'st-tg05', isSecret:true, releaseYear:2022, notes:'CHR' },

  // ─── CELEBRATIONS ────────────────────────────────────────────────────────
  { id:'cel-93-en', name:'Gardevoir ex δ', set:'Celebrations: Classic Collection', setCode:'CEL', number:'93/101', language:'EN', rarity:'Classic Collection', price:165, type:'Fire', era:'SWSH', artworkGroup:'cel-93', releaseYear:2021, notes:'Classic reprint of EX Dragon Frontiers', imageUrl:I('cel25c','93') },
  { id:'cel25-015-jp', name:'Gardevoir ex δ', set:'25th Anniversary Promo', setCode:'CEL25', number:'015/025', language:'JP', rarity:'Promo', price:180, type:'Fire', era:'PROMO', artworkGroup:'cel-93', releaseYear:2021, notes:'25th Anniversary' },

  // ─── SV BASE ─────────────────────────────────────────────────────────────
  { id:'sv1-86-en', name:'Gardevoir ex', set:'Scarlet & Violet', setCode:'SV1', number:'086/198', language:'EN', rarity:'Double Rare', price:4, artist:'Ryota Murayama', type:'Psychic', era:'SV', artworkGroup:'sv1-86', releaseYear:2023, imageUrl:I('sv1','86') },
  { id:'sv1-86-de', name:'Gardevoir ex', set:'Karmesin & Purpur', setCode:'SV1', number:'086/198', language:'DE', rarity:'Double Rare', price:5, type:'Psychic', era:'SV', artworkGroup:'sv1-86', releaseYear:2023, imageUrl:I('sv1','86') },
  { id:'sv1-86-fr', name:'Gardevoir ex', set:'Écarlate et Violet', setCode:'SV1', number:'086/198', language:'FR', rarity:'Double Rare', price:5, type:'Psychic', era:'SV', artworkGroup:'sv1-86', releaseYear:2023, imageUrl:I('sv1','86') },
  { id:'sv1-86-it', name:'Gardevoir ex', set:'Scarlatto e Violetto', setCode:'SV1', number:'086/198', language:'IT', rarity:'Double Rare', price:5, type:'Psychic', era:'SV', artworkGroup:'sv1-86', releaseYear:2023, imageUrl:I('sv1','86') },
  { id:'sv1-86-es', name:'Gardevoir ex', set:'Escarlata y Violeta', setCode:'SV1', number:'086/198', language:'ES', rarity:'Double Rare', price:5, type:'Psychic', era:'SV', artworkGroup:'sv1-86', releaseYear:2023, imageUrl:I('sv1','86') },
  { id:'sv1-86-pt', name:'Gardevoir ex', set:'Escarlate e Violeta', setCode:'SV1', number:'086/198', language:'PT', rarity:'Double Rare', price:5, type:'Psychic', era:'SV', artworkGroup:'sv1-86', releaseYear:2023, imageUrl:I('sv1','86') },
  { id:'sv1jp-086-jp', name:'Gardevoir ex', set:'Scarlet ex (JP)', setCode:'SV1JP', number:'086/078', language:'JP', rarity:'Double Rare', price:3, type:'Psychic', era:'SV', artworkGroup:'sv1-86', releaseYear:2022 },
  { id:'sv1-228-en', name:'Gardevoir ex', set:'Scarlet & Violet', setCode:'SV1', number:'228/198', language:'EN', rarity:'Ultra Rare', price:22, artist:'Sanosuke Sakuma', type:'Psychic', era:'SV', artworkGroup:'sv1-228', releaseYear:2023, notes:'Full Art', imageUrl:I('sv1','228') },
  { id:'sv1jp-091-jp', name:'Gardevoir ex', set:'Scarlet ex (JP)', setCode:'SV1JP', number:'091/078', language:'JP', rarity:'Ultra Rare', price:18, type:'Psychic', era:'SV', artworkGroup:'sv1-228', releaseYear:2022 },
  { id:'sv1-245-en', name:'Gardevoir ex', set:'Scarlet & Violet', setCode:'SV1', number:'245/198', language:'EN', rarity:'Special Illustration Rare', price:85, artist:'Jiro Sasumo', type:'Psychic', era:'SV', artworkGroup:'sv1-245', releaseYear:2023, notes:'SIR — most iconic Gardevoir SV art', imageUrl:I('sv1','245') },
  { id:'sv1-245-de', name:'Gardevoir ex', set:'Karmesin & Purpur', setCode:'SV1', number:'245/198', language:'DE', rarity:'Special Illustration Rare', price:95, type:'Psychic', era:'SV', artworkGroup:'sv1-245', releaseYear:2023, imageUrl:I('sv1','245') },
  { id:'sv1jp-108-jp', name:'Gardevoir ex', set:'Scarlet ex (JP)', setCode:'SV1JP', number:'108/078', language:'JP', rarity:'Special Illustration Rare', price:70, type:'Psychic', era:'SV', artworkGroup:'sv1-245', releaseYear:2022 },

  // ─── PALDEA EVOLVED ──────────────────────────────────────────────────────
  { id:'sv2-140-en', name:'Gardevoir ex', set:'Paldea Evolved', setCode:'SV2', number:'140/193', language:'EN', rarity:'Double Rare', price:8, type:'Psychic', era:'SV', artworkGroup:'sv2-140', releaseYear:2023, imageUrl:I('sv2','140') },
  { id:'sv2jp-086-jp', name:'Gardevoir ex', set:'Clay Burst (JP)', setCode:'SV2JP', number:'086/071', language:'JP', rarity:'Double Rare', price:5, type:'Psychic', era:'SV', artworkGroup:'sv2-140', releaseYear:2023 },

  // ─── OBSIDIAN FLAMES ─────────────────────────────────────────────────────
  { id:'sv3-140-en', name:'Gardevoir ex', set:'Obsidian Flames', setCode:'SV3', number:'140/197', language:'EN', rarity:'Double Rare', price:5, type:'Psychic', era:'SV', artworkGroup:'sv3-140', releaseYear:2023, imageUrl:I('sv3','140') },
  { id:'sv3jp-075-jp', name:'Gardevoir ex', set:'Ruler of the Black Flame (JP)', setCode:'SV3JP', number:'075/108', language:'JP', rarity:'Double Rare', price:4, type:'Psychic', era:'SV', artworkGroup:'sv3-140', releaseYear:2023 },
  { id:'sv3-200-en', name:'Gardevoir ex', set:'Obsidian Flames', setCode:'SV3', number:'200/197', language:'EN', rarity:'Special Illustration Rare', price:45, type:'Psychic', era:'SV', artworkGroup:'sv3-200', releaseYear:2023, notes:'SIR — Toshinao Aoki art', imageUrl:I('sv3','200') },
  { id:'sv3jp-104-jp', name:'Gardevoir ex', set:'Ruler of the Black Flame (JP)', setCode:'SV3JP', number:'104/108', language:'JP', rarity:'Special Illustration Rare', price:35, type:'Psychic', era:'SV', artworkGroup:'sv3-200', releaseYear:2023 },

  // ─── PALDEAN FATES ───────────────────────────────────────────────────────
  { id:'pf-29-en', name:'Gardevoir ex', set:'Paldean Fates', setCode:'SV4PT5', number:'029/091', language:'EN', rarity:'Double Rare', price:4, type:'Psychic', era:'SV', artworkGroup:'pf-29', releaseYear:2024, notes:'Shiny variant', imageUrl:I('sv3pt5','29') },
  { id:'pf-217-en', name:'Gardevoir ex', set:'Paldean Fates', setCode:'SV4PT5', number:'217/091', language:'EN', rarity:'Shiny Ultra Rare', price:7.50, type:'Psychic', era:'SV', artworkGroup:'pf-217', releaseYear:2024, imageUrl:I('sv3pt5','217') },
  { id:'shinytreasure-348-jp', name:'Gardevoir ex', set:'Shiny Treasure ex (JP)', setCode:'SVST', number:'348/190', language:'JP', rarity:'Special Illustration Rare', price:20, type:'Psychic', era:'SV', artworkGroup:'pf-217', releaseYear:2023, notes:'SAR Shiny' },
  { id:'pf-233-en', name:'Gardevoir ex', set:'Paldean Fates', setCode:'SV4PT5', number:'233/091', language:'EN', rarity:'Special Illustration Rare', price:125, type:'Psychic', era:'SV', artworkGroup:'pf-233', releaseYear:2024, notes:'Shiny SIR — Jiro Sasumo', imageUrl:I('sv3pt5','233') },
  { id:'shinytreasure-393-jp', name:'Gardevoir ex', set:'Shiny Treasure ex (JP)', setCode:'SVST', number:'393/190', language:'JP', rarity:'Special Illustration Rare', price:90, type:'Psychic', era:'SV', artworkGroup:'pf-233', releaseYear:2023, notes:'SAR Shiny SIR' },

  // ─── TWILIGHT MASQUERADE ─────────────────────────────────────────────────
  { id:'sv6-masq-en', name:'Gardevoir ex', set:'Twilight Masquerade', setCode:'SV6', number:'086/167', language:'EN', rarity:'Double Rare', price:6, type:'Psychic', era:'SV', artworkGroup:'sv6-gard', releaseYear:2024, imageUrl:I('sv6','86') },
  { id:'sv6jp-jp', name:'Gardevoir ex', set:'Mask of Change (JP)', setCode:'SV6JP', number:'086/101', language:'JP', rarity:'Double Rare', price:4, type:'Psychic', era:'SV', artworkGroup:'sv6-gard', releaseYear:2024 },

  // ─── MEGA EVOLUTION 2025 ─────────────────────────────────────────────────
  { id:'megaevo-mgardex-en', name:'Mega Gardevoir ex', set:'Mega Evolution', setCode:'MEV', number:'See set (RR)', language:'EN', rarity:'Double Rare', price:5.91, type:'Psychic', era:'SV', artworkGroup:'megaevo-mgardex', releaseYear:2025, notes:'2025 Mega Evolution set' },
  { id:'megaevo-mgardex-ur-en', name:'Mega Gardevoir ex', set:'Mega Evolution', setCode:'MEV', number:'See set (UR)', language:'EN', rarity:'Ultra Rare', price:193.11, type:'Psychic', era:'SV', artworkGroup:'megaevo-mgardex-ur', releaseYear:2025, notes:'Ultra Rare Full Art' },
  { id:'megaevo-mgardex-sir-en', name:'Mega Gardevoir ex', set:'Mega Evolution', setCode:'MEV', number:'See set (SIR)', language:'EN', rarity:'Special Illustration Rare', price:228.08, type:'Psychic', era:'SV', artworkGroup:'megaevo-mgardex-sir', releaseYear:2025, notes:'SIR — highest value current card' },
  { id:'megaevo-mgardex-hr-en', name:'Mega Gardevoir ex', set:'Mega Evolution', setCode:'MEV', number:'See set (HR)', language:'EN', rarity:'Hyper Rare', price:0.64, type:'Psychic', era:'SV', artworkGroup:'megaevo-mgardex-hr', releaseYear:2025, notes:'Hyper Rare Gold' },
  { id:'megabrave-mgardex-jp', name:'Mega Gardevoir ex', set:'Mega Brave & Mega Symphonia (JP)', setCode:'SVMEG', number:'See set', language:'JP', rarity:'Double Rare', price:7.94, type:'Psychic', era:'SV', artworkGroup:'megaevo-mgardex', releaseYear:2025 },
];

export function getArtworkGroups(): string[] {
  const groups = new Set<string>();
  CARD_DATABASE.forEach(card => { if (card.artworkGroup) groups.add(card.artworkGroup); });
  return Array.from(groups);
}

export function getCardsByArtworkGroup(group: string): Card[] {
  return CARD_DATABASE.filter(c => c.artworkGroup === group);
}

export function getTotalValue(ownedCardIds: string[]): number {
  return CARD_DATABASE.filter(c => ownedCardIds.includes(c.id)).reduce((sum, c) => sum + (c.price || 0), 0);
}

export const ERAS: Record<Card['era'], string> = {
  EX: 'EX Era (2003–2007)',
  DP: 'Diamond & Pearl (2007–2010)',
  BW: 'Black & White (2011–2014)',
  XY: 'X & Y (2014–2017)',
  SM: 'Sun & Moon (2017–2019)',
  SWSH: 'Sword & Shield (2019–2022)',
  SV: 'Scarlet & Violet (2022–)',
  PROMO: 'Promotional Cards',
};

export const LANGUAGE_LABELS: Record<Language, string> = {
  EN: 'English', JP: 'Japanese', DE: 'Deutsch', FR: 'Français',
  IT: 'Italiano', ES: 'Español', PT: 'Português', KO: '한국어', ZHTW: '繁體中文',
};

export const LANGUAGE_FLAGS: Record<Language, string> = {
  EN: '🇺🇸', JP: '🇯🇵', DE: '🇩🇪', FR: '🇫🇷',
  IT: '🇮🇹', ES: '🇪🇸', PT: '🇧🇷', KO: '🇰🇷', ZHTW: '🇹🇼',
};
