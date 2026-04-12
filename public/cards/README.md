# Card Images Folder

Place your Gardevoir card images here as .png or .jpg files.

## Naming Convention

Format: `g.{cardNumber}.{setTotal}.png`

The card number and set total come directly from the card itself.

### Examples

| Card | File Name |
|------|-----------|
| Gardevoir ex 245/198 (Scarlet & Violet) | `g.245.198.png` |
| Gardevoir ex 86/198 | `g.86.198.png` |
| Gardevoir ex 233/91 (Paldean Fates) | `g.233.91.png` |
| Gardevoir-GX 93/147 (Burning Shadows) | `g.93.147.png` |
| Gardevoir & Sylveon-GX 205/214 | `g.205.214.png` |
| Gardevoir 7/109 (EX Ruby & Sapphire) | `g.7.109.png` |
| Gardevoir LV.X 131/132 | `g.131.132.png` |
| Gardevoir ex δ 96/100 (EX Sandstorm) | `g.96.100.png` |
| Gardevoir RC10/RC25 (Legendary Treasures) | `g.RC10.RC25.png` |
| Gardevoir TG05/TG30 (Astral Radiance) | `g.TG05.TG30.png` |
| Gardevoir-GX SV75/SV94 (Hidden Fates) | `g.SV75.SV94.png` |
| Gardevoir V SWSH105 (Promo) | `g.SWSH105.307.png` |
| Gardevoir ex δ 93/25 (Celebrations) | `g.93.25.png` |

## Notes

- Both `.png` and `.jpg` are displayed — the app tries `.png` first
- If a file is missing, a placeholder is shown instead
- Images are served as static files — no server required
- After placing files here, redeploy to Vercel (or run `npm run dev` locally)
