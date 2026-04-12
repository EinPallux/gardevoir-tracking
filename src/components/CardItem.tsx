'use client';

import { motion } from 'framer-motion';
import { useApp } from '@/lib/store';
import type { Card } from '@/lib/cardDatabase';
import { LANGUAGE_FLAGS } from '@/lib/cardDatabase';
import {
  Plus,
  Minus,
  CheckCircle,
  Circle,
  ArrowsClockwise,
} from '@phosphor-icons/react';

interface CardItemProps {
  card: Card;
  index?: number;
}

function getRarityClass(rarity: string): string {
  const r = rarity.toLowerCase().replace(/ /g, '-');
  if (r.includes('special-illustration')) return 'rarity-special-illustration-rare';
  if (r.includes('hyper')) return 'rarity-hyper-rare';
  if (r.includes('secret')) return 'rarity-secret-rare';
  if (r.includes('illustration')) return 'rarity-illustration-rare';
  if (r.includes('ultra') || r.includes('double')) return 'rarity-ultra-rare';
  if (r.includes('holo-lvx') || r.includes('lv.x')) return 'rarity-rare-holo';
  if (r.includes('holo') || r.includes('trainer-gallery') || r.includes('classic')) return 'rarity-rare-holo';
  if (r.includes('rare')) return 'rarity-rare';
  if (r.includes('uncommon')) return 'rarity-uncommon';
  return 'rarity-common';
}

export function CardItem({ card, index = 0 }: CardItemProps) {
  const { state, dispatch, t } = useApp();
  const entry = state.collection[card.id];
  const qty = entry?.qty ?? 0;
  const isOwned = qty > 0;
  const isDupe = qty > 1;

  function setQty(newQty: number) {
    dispatch({ type: 'SET_QUANTITY', cardId: card.id, qty: Math.max(0, newQty) });
  }

  const statusColor = isOwned
    ? isDupe
      ? 'var(--trade-color)'
      : 'var(--owned-color)'
    : 'var(--needed-color)';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', duration: 0.4, bounce: 0, delay: Math.min(index * 0.025, 0.3) }}
      className="rounded-xl border overflow-hidden transition-all"
      style={{
        background: 'var(--bg-card)',
        borderColor: isOwned ? (isDupe ? 'var(--trade-color)' : 'var(--owned-color)') : 'var(--border)',
        boxShadow: isOwned ? `0 0 0 1px ${statusColor}20, var(--shadow)` : 'var(--shadow)',
      }}
    >
      {/* Card Header */}
      <div className="p-3 pb-2">
        {/* Top row: name + status badge */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex-1 min-w-0">
            <div className="text-sm font-semibold leading-tight truncate" style={{ color: 'var(--text-primary)' }}>
              {card.name}
            </div>
            <div className="text-xs mt-0.5 font-mono" style={{ color: 'var(--text-muted)' }}>
              {card.number}
            </div>
          </div>
          {/* Status icon */}
          <div className="shrink-0 mt-0.5">
            {isOwned ? (
              <CheckCircle size={18} weight="fill" style={{ color: 'var(--owned-color)' }} />
            ) : (
              <Circle size={18} style={{ color: 'var(--text-muted)' }} />
            )}
          </div>
        </div>

        {/* Set name */}
        <div className="text-xs leading-tight mb-2 line-clamp-1" style={{ color: 'var(--text-secondary)' }}>
          {card.set}
        </div>

        {/* Tags row */}
        <div className="flex flex-wrap gap-1 mb-2">
          {/* Language flag */}
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-xs font-medium"
            style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}>
            {LANGUAGE_FLAGS[card.language]} {card.language}
          </span>

          {/* Rarity */}
          <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium ${getRarityClass(card.rarity)}`}
            style={{ background: 'var(--bg-elevated)' }}>
            {card.rarity}
          </span>

          {/* Dupe badge */}
          {isDupe && (
            <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-xs font-bold trade-badge">
              <ArrowsClockwise size={10} weight="bold" />
              {t('duplicate_badge')} ×{qty - 1}
            </span>
          )}
        </div>

        {/* Notes */}
        {card.notes && (
          <div className="text-xs italic line-clamp-1 mb-1" style={{ color: 'var(--text-muted)' }}>
            {card.notes}
          </div>
        )}
      </div>

      {/* Card Footer */}
      <div
        className="flex items-center justify-between px-3 py-2 border-t"
        style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)' }}
      >
        {/* Price */}
        <div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{t('price')}</div>
          <div className="text-sm font-bold font-mono" style={{ color: card.price ? 'var(--text-primary)' : 'var(--text-muted)' }}>
            {card.price ? `$${card.price.toFixed(2)}` : t('na')}
          </div>
        </div>

        {/* Qty Controls */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setQty(qty - 1)}
            disabled={qty === 0}
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all active:scale-95"
            style={{
              background: qty > 0 ? 'var(--bg-card)' : 'var(--bg-elevated)',
              color: qty > 0 ? 'var(--text-primary)' : 'var(--text-muted)',
              border: '1px solid var(--border)',
              opacity: qty === 0 ? 0.4 : 1,
            }}
          >
            <Minus size={12} weight="bold" />
          </button>

          <div
            className="w-8 text-center text-sm font-bold font-mono"
            style={{ color: qty > 0 ? statusColor : 'var(--text-muted)' }}
          >
            {qty}
          </div>

          <button
            onClick={() => setQty(qty + 1)}
            className="w-7 h-7 rounded-lg flex items-center justify-center transition-all active:scale-95"
            style={{
              background: 'var(--accent)',
              color: '#fff',
            }}
          >
            <Plus size={12} weight="bold" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
