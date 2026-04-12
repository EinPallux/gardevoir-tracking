'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/lib/store';
import { CARD_DATABASE, LANGUAGE_FLAGS } from '@/lib/cardDatabase';
import { Lightning, X, Plus, Minus, MagnifyingGlass } from '@phosphor-icons/react';

export function ConventionOverlay() {
  const { state, dispatch, t } = useApp();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return CARD_DATABASE.filter(c =>
      c.number.toLowerCase().includes(q) ||
      c.name.toLowerCase().includes(q) ||
      c.set.toLowerCase().includes(q)
    ).slice(0, 12);
  }, [query]);

  function setQty(cardId: string, qty: number) {
    dispatch({ type: 'SET_QUANTITY', cardId, qty: Math.max(0, qty) });
  }

  function close() {
    dispatch({ type: 'TOGGLE_CONVENTION' });
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex flex-col convention-safe"
      style={{
        background: state.theme === 'dark'
          ? 'rgba(0,0,0,0.97)'
          : 'rgba(248,247,245,0.98)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--accent)' }}>
          <Lightning size={18} weight="fill" />
          {t('convention')}
        </div>
        <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {t('conventionDesc')}
        </div>
        <button
          onClick={close}
          className="ml-auto p-2 rounded-xl transition-colors"
          style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}
        >
          <X size={18} />
        </button>
      </div>

      {/* Big Search */}
      <div className="px-4 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="relative">
          <MagnifyingGlass
            size={22}
            className="absolute left-4 top-1/2 -translate-y-1/2"
            style={{ color: 'var(--accent)' }}
          />
          <input
            ref={inputRef}
            type="search"
            placeholder="245/198, SWSH062, Obsidian..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl text-xl font-mono outline-none border-2 transition-all"
            style={{
              background: 'var(--bg-card)',
              borderColor: query ? 'var(--accent)' : 'var(--border)',
              color: 'var(--text-primary)',
            }}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck={false}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg"
              style={{ color: 'var(--text-muted)' }}
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {query.trim() === '' ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Lightning size={40} style={{ color: 'var(--accent)' }} weight="fill" className="mb-3 opacity-30" />
            <div className="text-lg font-semibold" style={{ color: 'var(--text-secondary)' }}>
              Type a card number or name
            </div>
            <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
              e.g. &ldquo;245/198&rdquo; or &ldquo;Paldean Fates&rdquo;
            </div>
          </div>
        ) : results.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-3xl mb-3">🔍</div>
            <div className="text-lg font-semibold" style={{ color: 'var(--text-secondary)' }}>{t('noResults')}</div>
          </div>
        ) : (
          <AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {results.map((card, i) => {
                const qty = state.collection[card.id]?.qty ?? 0;
                const isOwned = qty > 0;
                const isDupe = qty > 1;

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: 'spring', duration: 0.35, bounce: 0, delay: i * 0.04 }}
                    className="rounded-2xl border-2 p-4 transition-all"
                    style={{
                      background: 'var(--bg-card)',
                      borderColor: isDupe
                        ? 'var(--trade-color)'
                        : isOwned
                        ? 'var(--owned-color)'
                        : 'var(--needed-color)',
                      boxShadow: isDupe
                        ? '0 0 20px rgba(245,127,23,0.2)'
                        : isOwned
                        ? '0 0 20px rgba(46,125,50,0.2)'
                        : '0 0 20px rgba(211,47,47,0.15)',
                    }}
                  >
                    {/* Big Status Badge */}
                    <div className="mb-3">
                      <span
                        className="inline-block px-3 py-1 rounded-full text-xs font-black tracking-wider"
                        style={{
                          background: isDupe ? 'var(--trade-bg)' : isOwned ? 'var(--owned-bg)' : 'var(--needed-bg)',
                          color: isDupe ? 'var(--trade-color)' : isOwned ? 'var(--owned-color)' : 'var(--needed-color)',
                        }}
                      >
                        {isDupe ? `${t('duplicate_badge')} ×${qty - 1}` : isOwned ? `✓ ${t('owned_badge')}` : `— ${t('needed_badge')}`}
                      </span>
                    </div>

                    <div className="text-base font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>{card.name}</div>
                    <div className="text-sm font-mono font-bold mb-1" style={{ color: 'var(--accent)' }}>{card.number}</div>
                    <div className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>{card.set}</div>
                    <div className="flex items-center gap-2 text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
                      <span>{LANGUAGE_FLAGS[card.language]} {card.language}</span>
                      <span>·</span>
                      <span>{card.rarity}</span>
                      {card.price && (
                        <>
                          <span>·</span>
                          <span className="font-mono font-bold" style={{ color: 'var(--text-primary)' }}>${card.price.toFixed(2)}</span>
                        </>
                      )}
                    </div>

                    {/* Qty Controls */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setQty(card.id, qty - 1)}
                        disabled={qty === 0}
                        className="w-10 h-10 rounded-xl flex items-center justify-center border text-lg font-bold transition-all active:scale-95"
                        style={{
                          background: 'var(--bg-elevated)',
                          color: 'var(--text-primary)',
                          borderColor: 'var(--border)',
                          opacity: qty === 0 ? 0.3 : 1,
                        }}
                      >
                        <Minus size={16} weight="bold" />
                      </button>
                      <div
                        className="flex-1 text-center text-2xl font-black font-mono"
                        style={{
                          color: isDupe ? 'var(--trade-color)' : isOwned ? 'var(--owned-color)' : 'var(--text-muted)',
                        }}
                      >
                        {qty}
                      </div>
                      <button
                        onClick={() => setQty(card.id, qty + 1)}
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold transition-all active:scale-95"
                        style={{ background: 'var(--accent)', color: '#fff' }}
                      >
                        <Plus size={16} weight="bold" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </AnimatePresence>
        )}
      </div>
    </motion.div>
  );
}
