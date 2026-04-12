'use client';

import { useMemo } from 'react';
import { useApp } from '@/lib/store';
import { CARD_DATABASE, LANGUAGE_FLAGS } from '@/lib/cardDatabase';
import { motion } from 'framer-motion';
import { ArrowsClockwise, Minus, Plus } from '@phosphor-icons/react';

export function TradeView() {
  const { state, dispatch, t } = useApp();

  const tradeCards = useMemo(() => {
    return CARD_DATABASE.filter(c => (state.collection[c.id]?.qty ?? 0) > 1)
      .map(c => ({ card: c, qty: state.collection[c.id].qty }))
      .sort((a, b) => (b.card.price ?? 0) - (a.card.price ?? 0));
  }, [state.collection]);

  const totalDupes = tradeCards.reduce((s, { qty }) => s + (qty - 1), 0);
  const tradeValue = tradeCards.reduce((s, { card, qty }) => s + (card.price ?? 0) * (qty - 1), 0);

  function setQty(cardId: string, qty: number) {
    dispatch({ type: 'SET_QUANTITY', cardId, qty: Math.max(0, qty) });
  }

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 pt-4 pb-24 md:pb-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl" style={{ background: 'var(--trade-bg)' }}>
          <ArrowsClockwise size={20} style={{ color: 'var(--trade-color)' }} weight="fill" />
        </div>
        <div>
          <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{t('tradeBinder')}</h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{t('tradeBinderDesc')}</p>
        </div>
        <div className="ml-auto text-right">
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Total dupes / Est. value</div>
          <div className="text-sm font-bold font-mono" style={{ color: 'var(--trade-color)' }}>
            {totalDupes} dupes · ${tradeValue.toFixed(2)}
          </div>
        </div>
      </div>

      {tradeCards.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="text-4xl mb-4">📦</div>
          <div className="text-lg font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{t('noTradeCards')}</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Cards with quantity 2+ will appear here
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {tradeCards.map(({ card, qty }, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', duration: 0.4, bounce: 0, delay: Math.min(i * 0.04, 0.3) }}
              className="rounded-xl border p-4"
              style={{ background: 'var(--bg-card)', borderColor: 'var(--trade-color)', boxShadow: `0 0 0 1px ${`var(--trade-color)`}20, var(--shadow)` }}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{card.name}</div>
                  <div className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-muted)' }}>{card.number}</div>
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold trade-badge">
                  {qty - 1} for trade
                </span>
              </div>

              <div className="text-xs mb-3 line-clamp-1" style={{ color: 'var(--text-secondary)' }}>{card.set}</div>

              <div className="flex items-center gap-1.5 mb-3 flex-wrap">
                <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}>
                  {LANGUAGE_FLAGS[card.language]} {card.language}
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}>
                  {card.rarity}
                </span>
              </div>

              <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: 'var(--border)' }}>
                <div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Per card</div>
                  <div className="text-sm font-bold font-mono" style={{ color: 'var(--trade-color)' }}>
                    {card.price ? `$${card.price.toFixed(2)}` : t('na')}
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setQty(card.id, qty - 1)}
                    className="w-7 h-7 rounded-lg flex items-center justify-center border transition-all active:scale-95"
                    style={{ background: 'var(--bg-elevated)', color: 'var(--text-primary)', borderColor: 'var(--border)' }}
                  >
                    <Minus size={12} weight="bold" />
                  </button>
                  <span className="w-6 text-center text-sm font-bold font-mono" style={{ color: 'var(--trade-color)' }}>{qty}</span>
                  <button
                    onClick={() => setQty(card.id, qty + 1)}
                    className="w-7 h-7 rounded-lg flex items-center justify-center transition-all active:scale-95"
                    style={{ background: 'var(--accent)', color: '#fff' }}
                  >
                    <Plus size={12} weight="bold" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
