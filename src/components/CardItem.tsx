'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '@/lib/store';
import { type Card, localImagePath, LANGUAGE_FLAGS, isArtworkCollected } from '@/lib/cardDatabase';
import { Plus, Minus, CheckCircle, Circle, ArrowsClockwise, Cards } from '@phosphor-icons/react';

interface CardItemProps {
  card: Card;
  index?: number;
}

function rarityClass(rarity: string): string {
  const r = rarity.toLowerCase();
  if (r.includes('special illustration')) return 'rarity-special-illustration-rare';
  if (r.includes('hyper')) return 'rarity-hyper-rare';
  if (r.includes('rare secret') || (r.includes('secret') && r.includes('rare'))) return 'rarity-secret-rare';
  if (r.includes('rainbow')) return 'rarity-secret-rare';
  if (r.includes('illustration rare')) return 'rarity-illustration-rare';
  if (r.includes('ultra rare') || r.includes('double rare') || r.includes('rare ultra')) return 'rarity-ultra-rare';
  if (r.includes('holo') || r.includes('trainer gallery') || r.includes('classic') || r.includes('radiant')) return 'rarity-rare-holo';
  if (r.includes('shiny')) return 'rarity-special-illustration-rare';
  if (r.includes('rare')) return 'rarity-rare';
  if (r.includes('uncommon')) return 'rarity-uncommon';
  return 'rarity-common';
}

export function CardItem({ card, index = 0 }: CardItemProps) {
  const { state, dispatch, t } = useApp();
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const entry = state.collection[card.id];
  const qty = entry?.qty ?? 0;
  const isOwned = qty > 0;
  const isDupe = qty > 1;

  // New check: Is the Artwork collected in ANY language?
  const isArtworkOwned = isArtworkCollected(card.artworkGroup, state.collection);

  const statusColor = isDupe ? 'var(--trade-color)' : isOwned ? 'var(--owned-color)' : 'var(--border)';

  function setQty(n: number) {
    dispatch({ type: 'SET_QUANTITY', cardId: card.id, qty: Math.max(0, n) });
  }

  const imgSrc = localImagePath(card);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', duration: 0.4, bounce: 0, delay: Math.min(index * 0.025, 0.3) }}
      className="rounded-xl border overflow-hidden flex flex-col"
      style={{
        background: 'var(--bg-card)',
        borderColor: isOwned ? statusColor : 'var(--border)',
        boxShadow: isOwned ? `0 0 0 1px ${statusColor}30, var(--shadow)` : 'var(--shadow)',
      }}
    >
      {/* ── Card Image ────────────────────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ background: 'var(--bg-elevated)', aspectRatio: '0.716' }}>

        {/* Shimmer while loading */}
        {!imgLoaded && !imgError && (
          <div className="absolute inset-0 shimmer" />
        )}

        {/* Card image — local file from /public/cards/ */}
        {!imgError && (
          <img
            src={imgSrc}
            alt={`${card.name} ${card.number}`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => { setImgError(true); setImgLoaded(true); }}
            className="absolute inset-0 w-full h-full p-1 transition-opacity duration-300"
            style={{ objectFit: 'contain', opacity: imgLoaded ? 1 : 0 }}
          />
        )}

        {/* Placeholder when no image found */}
        {imgError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-3">
            <Cards size={32} style={{ color: 'var(--text-muted)', opacity: 0.3 }} />
            <div className="text-center">
              <div className="text-xs font-mono font-bold" style={{ color: 'var(--text-muted)' }}>{card.number}</div>
              <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
                No image yet
              </div>
            </div>
          </div>
        )}

        {/* Owned badge — top left */}
        {isOwned && (
          <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-md text-xs font-black"
            style={{
              background: isDupe ? 'var(--trade-bg)' : 'var(--owned-bg)',
              color: isDupe ? 'var(--trade-color)' : 'var(--owned-color)',
              backdropFilter: 'blur(4px)',
            }}>
            {isDupe ? `×${qty}` : '✓'}
          </div>
        )}

        {/* Language badge — top right */}
        <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-md text-xs font-semibold"
          style={{ background: 'rgba(0,0,0,0.5)', color: '#fff', backdropFilter: 'blur(4px)' }}>
          {LANGUAGE_FLAGS[card.language]} {card.language}
        </div>

        {/* Inset glow border when owned */}
        {isOwned && (
          <div className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: `inset 0 0 0 2px ${statusColor}` }} />
        )}
      </div>

      {/* ── Card Info ─────────────────────────────────── */}
      <div className="p-3 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-1.5 mb-1">
          <div className="flex-1 min-w-0">
            <div className="text-sm font-bold leading-tight truncate" style={{ color: 'var(--text-primary)' }}>
              {card.name}
            </div>
            <div className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {card.number}
            </div>
          </div>
          {isOwned
            ? <CheckCircle size={16} weight="fill" style={{ color: 'var(--owned-color)', flexShrink: 0, marginTop: 2 }} />
            : <Circle size={16} style={{ color: 'var(--text-muted)', flexShrink: 0, marginTop: 2 }} />
          }
        </div>

        <div className="text-xs line-clamp-1 mb-2" style={{ color: 'var(--text-secondary)' }}>
          {card.set}
        </div>

        <div className="flex flex-wrap gap-1 mb-auto">
          {/* THE FIX: Isolate the layout background from the text color class */}
          <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: 'var(--bg-elevated)' }}>
            <span className={rarityClass(card.rarity)}>
              {card.rarity}
            </span>
          </span>
          {isDupe && (
            <span className="inline-flex items-center gap-0.5 text-xs px-1.5 py-0.5 rounded font-bold trade-badge">
              <ArrowsClockwise size={9} weight="bold" />
              {t('duplicate_badge')} ×{qty - 1}
            </span>
          )}
          {/* VISUAL BADGE for your specific collection tracker style */}
          {!isOwned && isArtworkOwned && (
            <span className="inline-flex items-center gap-0.5 text-xs px-1.5 py-0.5 rounded font-bold"
              style={{ border: '1px solid var(--owned-color)', color: 'var(--owned-color)', background: 'var(--bg-elevated)' }}>
              Artwork Owned
            </span>
          )}
        </div>

        {card.notes && (
          <div className="text-xs italic line-clamp-1 mt-1.5" style={{ color: 'var(--text-muted)' }}>
            {card.notes}
          </div>
        )}

        {/* ── Footer ──────────────────────────────────── */}
        <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t"
          style={{ borderColor: 'var(--border)' }}>
          <div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t('price')}</div>
            <div className="text-sm font-bold font-mono"
              style={{ color: card.price ? 'var(--text-primary)' : 'var(--text-muted)' }}>
              {card.price ? `$${card.price.toFixed(2)}` : t('na')}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button onClick={() => setQty(qty - 1)} disabled={qty === 0}
              className="w-7 h-7 rounded-lg flex items-center justify-center border transition-all active:scale-95"
              style={{
                background: 'var(--bg-elevated)', color: 'var(--text-primary)',
                borderColor: 'var(--border)', opacity: qty === 0 ? 0.35 : 1,
              }}>
              <Minus size={12} weight="bold" />
            </button>
            <div className="w-7 text-center text-sm font-black font-mono"
              style={{ color: qty > 0 ? statusColor : 'var(--text-muted)' }}>
              {qty}
            </div>
            <button onClick={() => setQty(qty + 1)}
              className="w-7 h-7 rounded-lg flex items-center justify-center transition-all active:scale-95"
              style={{ background: 'var(--accent)', color: '#fff' }}>
              <Plus size={12} weight="bold" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}