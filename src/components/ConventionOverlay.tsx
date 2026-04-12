'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/lib/store';
import { CARD_DATABASE, LANGUAGE_FLAGS, localImagePath, isArtworkCollected } from '@/lib/cardDatabase';
import { Lightning, X, Plus, Minus, MagnifyingGlass, Cards } from '@phosphor-icons/react';

export function ConventionOverlay() {
  const { state, dispatch, t } = useApp();
  const [query, setQuery] = useState('');
  const [imgErrors, setImgErrors] = useState<Set<string>>(new Set());
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();
    return CARD_DATABASE.filter(c =>
      c.number.toLowerCase().includes(q) ||
      c.cardNum.toLowerCase().includes(q) ||
      c.name.toLowerCase().includes(q) ||
      c.set.toLowerCase().includes(q) ||
      c.setCode.toLowerCase().includes(q)
    ).slice(0, 12);
  }, [query]);

  function setQty(cardId: string, qty: number) {
    dispatch({ type: 'SET_QUANTITY', cardId, qty: Math.max(0, qty) });
  }

  function close() { dispatch({ type: 'TOGGLE_CONVENTION' }); }

  function handleImgError(cardId: string) {
    setImgErrors(prev => new Set(prev).add(cardId));
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex flex-col convention-safe"
      style={{
        background: state.theme === 'dark' ? 'rgba(0,0,0,0.97)' : 'rgba(248,247,245,0.98)',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="flex items-center gap-2 text-sm font-bold" style={{ color: 'var(--accent)' }}>
          <Lightning size={18} weight="fill" />
          {t('convention')}
        </div>
        <div className="text-xs hidden sm:block" style={{ color: 'var(--text-muted)' }}>
          {t('conventionDesc')}
        </div>
        <button onClick={close} className="ml-auto p-2 rounded-xl"
          style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}>
          <X size={18} />
        </button>
      </div>

      {/* Search */}
      <div className="px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
        <div className="relative">
          <MagnifyingGlass size={22} className="absolute left-4 top-1/2 -translate-y-1/2"
            style={{ color: 'var(--accent)' }} />
          <input
            ref={inputRef}
            type="search"
            placeholder='245/198 · 93/147 · "Sylveon" · "Radiant"'
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl text-lg font-mono outline-none border-2 transition-all"
            style={{
              background: 'var(--bg-card)',
              borderColor: query ? 'var(--accent)' : 'var(--border)',
              color: 'var(--text-primary)',
            }}
            autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck={false}
          />
          {query && (
            <button onClick={() => setQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2"
              style={{ color: 'var(--text-muted)' }}>
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {query.trim() === '' ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Lightning size={40} style={{ color: 'var(--accent)', opacity: 0.25 }} weight="fill" className="mb-3" />
            <div className="text-base font-semibold" style={{ color: 'var(--text-secondary)' }}>
              Type a card number or name
            </div>
            <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
              e.g. &ldquo;245/198&rdquo; · &ldquo;Sylveon&rdquo; · &ldquo;Radiant&rdquo;
            </div>
          </div>
        ) : results.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-3xl mb-3">🔍</div>
            <div className="text-base font-semibold" style={{ color: 'var(--text-secondary)' }}>{t('noResults')}</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {results.map((card, i) => {
              const qty = state.collection[card.id]?.qty ?? 0;
              const isOwned = qty > 0;
              const isDupe = qty > 1;
              const artCollected = isArtworkCollected(card.artworkGroup, state.collection);
              const hasImgError = imgErrors.has(card.id);

              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', duration: 0.35, bounce: 0, delay: i * 0.04 }}
                  className="rounded-2xl border-2 overflow-hidden"
                  style={{
                    background: 'var(--bg-card)',
                    borderColor: isDupe ? 'var(--trade-color)' : isOwned ? 'var(--owned-color)' : 'var(--needed-color)',
                    boxShadow: isDupe
                      ? '0 0 20px rgba(245,127,23,0.15)'
                      : isOwned
                      ? '0 0 20px rgba(46,125,50,0.15)'
                      : '0 0 12px rgba(211,47,47,0.1)',
                  }}
                >
                  {/* Image strip */}
                  <div className="relative w-full overflow-hidden" style={{ background: 'var(--bg-elevated)', aspectRatio: '2.5' }}>
                    {!hasImgError ? (
                      <img
                        src={localImagePath(card)}
                        alt={card.name}
                        loading="lazy"
                        onError={() => handleImgError(card.id)}
                        className="absolute inset-0 w-full h-full object-contain scale-125"
                        style={{ objectPosition: 'center 20%' }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Cards size={24} style={{ color: 'var(--text-muted)', opacity: 0.3 }} />
                      </div>
                    )}
                    {/* Cross-language notice */}
                    {!isOwned && artCollected && (
                      <div className="absolute bottom-1 left-1 right-1 text-center">
                        <span className="text-xs px-2 py-0.5 rounded font-semibold"
                          style={{ background: 'var(--owned-bg)', color: 'var(--owned-color)' }}>
                          ✓ Other language owned
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-3">
                    {/* Status badge */}
                    <div className="mb-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-black tracking-wider"
                        style={{
                          background: isDupe ? 'var(--trade-bg)' : isOwned ? 'var(--owned-bg)' : 'var(--needed-bg)',
                          color: isDupe ? 'var(--trade-color)' : isOwned ? 'var(--owned-color)' : 'var(--needed-color)',
                        }}>
                        {isDupe ? `${t('duplicate_badge')} ×${qty - 1}` : isOwned ? `✓ ${t('owned_badge')}` : `— ${t('needed_badge')}`}
                      </span>
                    </div>

                    <div className="text-sm font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>{card.name}</div>
                    <div className="text-sm font-mono font-bold mb-0.5" style={{ color: 'var(--accent)' }}>{card.number}</div>
                    <div className="text-xs mb-1" style={{ color: 'var(--text-secondary)' }}>{card.set}</div>
                    <div className="flex items-center gap-2 text-xs mb-3" style={{ color: 'var(--text-muted)' }}>
                      <span>{LANGUAGE_FLAGS[card.language]} {card.language}</span>
                      {card.price && <><span>·</span><span className="font-mono font-bold" style={{ color: 'var(--text-primary)' }}>${card.price.toFixed(2)}</span></>}
                    </div>

                    {/* Qty Controls */}
                    <div className="flex items-center gap-2">
                      <button onClick={() => setQty(card.id, qty - 1)} disabled={qty === 0}
                        className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all active:scale-95"
                        style={{ background: 'var(--bg-elevated)', color: 'var(--text-primary)', borderColor: 'var(--border)', opacity: qty === 0 ? 0.3 : 1 }}>
                        <Minus size={16} weight="bold" />
                      </button>
                      <div className="flex-1 text-center text-2xl font-black font-mono"
                        style={{ color: isDupe ? 'var(--trade-color)' : isOwned ? 'var(--owned-color)' : 'var(--text-muted)' }}>
                        {qty}
                      </div>
                      <button onClick={() => setQty(card.id, qty + 1)}
                        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all active:scale-95"
                        style={{ background: 'var(--accent)', color: '#fff' }}>
                        <Plus size={16} weight="bold" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}
