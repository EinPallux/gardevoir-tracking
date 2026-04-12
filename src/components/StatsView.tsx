'use client';

import { useMemo } from 'react';
import { useApp } from '@/lib/store';
import { CARD_DATABASE, ERAS, LANGUAGE_LABELS, getArtworkGroups, isArtworkCollected } from '@/lib/cardDatabase';
import type { Card } from '@/lib/cardDatabase';
import { motion } from 'framer-motion';
import {
  Trophy,
  CurrencyDollar,
  ArrowsClockwise,
  Star,
  Calendar,
  CheckCircle,
} from '@phosphor-icons/react';

function StatCard({ icon: Icon, label, value, sub, accent = false, delay = 0 }: {
  icon: any; label: string; value: string | number; sub?: string; accent?: boolean; delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', duration: 0.45, bounce: 0, delay }}
      className="rounded-2xl p-5 border"
      style={{
        background: accent ? 'var(--accent-subtle)' : 'var(--bg-card)',
        borderColor: accent ? 'var(--accent)' : 'var(--border)',
        boxShadow: 'var(--shadow)',
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="p-2 rounded-xl" style={{ background: accent ? 'var(--accent)' : 'var(--bg-elevated)' }}>
          <Icon size={18} style={{ color: accent ? '#fff' : 'var(--accent)' }} weight="fill" />
        </div>
      </div>
      <div className="text-2xl font-bold font-mono mb-0.5" style={{ color: 'var(--text-primary)' }}>{value}</div>
      <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{label}</div>
      {sub && <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{sub}</div>}
    </motion.div>
  );
}

export function StatsView() {
  const { state, t } = useApp();

  const stats = useMemo(() => {
    const total = CARD_DATABASE.length;
    const owned = CARD_DATABASE.filter(c => state.collection[c.id]?.qty > 0);
    const ownedCount = owned.length;
    const pct = ((ownedCount / total) * 100).toFixed(1);
    // Cross-language: unique artworks where at least one language is owned
    const allGroups = getArtworkGroups();
    const collectedArtworks = allGroups.filter(g => isArtworkCollected(g, state.collection));

    const ownedValue = owned.reduce((s, c) => s + (c.price ?? 0), 0);
    const missingValue = CARD_DATABASE
      .filter(c => !(state.collection[c.id]?.qty > 0))
      .reduce((s, c) => s + (c.price ?? 0), 0);

    const dupes = Object.entries(state.collection)
      .filter(([, e]) => e.qty > 1)
      .reduce((s, [, e]) => s + (e.qty - 1), 0);

    // Artwork completion
    const groups = getArtworkGroups();
    const ownedArtworks = collectedArtworks;
    const artPct = ((ownedArtworks.length / allGroups.length) * 100).toFixed(1);

    // By era breakdown
    const byEra = Object.entries(ERAS).map(([era, label]) => {
      const eraCards = CARD_DATABASE.filter(c => c.era === era);
      const eraOwned = eraCards.filter(c => state.collection[c.id]?.qty > 0).length;
      return { era, label, total: eraCards.length, owned: eraOwned, pct: eraCards.length ? ((eraOwned / eraCards.length) * 100).toFixed(0) : '0' };
    }).filter(e => e.total > 0);

    // By language
    const langs = [...new Set(CARD_DATABASE.map(c => c.language))];
    const byLang = langs.map(lang => {
      const langCards = CARD_DATABASE.filter(c => c.language === lang);
      const langOwned = langCards.filter(c => state.collection[c.id]?.qty > 0).length;
      return { lang, total: langCards.length, owned: langOwned, pct: langCards.length ? ((langOwned / langCards.length) * 100).toFixed(0) : '0' };
    });

    // Most valuable owned
    const mostValuable = [...owned].sort((a, b) => (b.price ?? 0) - (a.price ?? 0)).slice(0, 5);

    return { total, ownedCount, pct, ownedValue, missingValue, dupes, artPct, ownedArtworks: ownedArtworks.length, totalArtworks: allGroups.length, byEra, byLang, mostValuable };
  }, [state.collection]);

  return (
    <div className="max-w-[1400px] mx-auto px-4 md:px-6 pt-4 pb-24 md:pb-8">
      {/* Summary Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        <StatCard
          icon={Trophy}
          label={t('completion')}
          value={`${stats.pct}%`}
          sub={`${stats.ownedCount} / ${stats.total} cards`}
          accent
          delay={0}
        />
        <StatCard
          icon={CurrencyDollar}
          label={t('estimatedValue')}
          value={`$${stats.ownedValue.toFixed(0)}`}
          sub="Based on market prices"
          delay={0.05}
        />
        <StatCard
          icon={Star}
          label={t('artworkCompletion')}
          value={`${stats.artPct}%`}
          sub={`${stats.ownedArtworks} / ${stats.totalArtworks} artworks (any lang)`}
          delay={0.1}
        />
        <StatCard
          icon={ArrowsClockwise}
          label={t('duplicates')}
          value={stats.dupes}
          sub="Available for trading"
          delay={0.15}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Era Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 0.45, bounce: 0, delay: 0.2 }}
          className="lg:col-span-2 rounded-2xl border p-5"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
        >
          <div className="flex items-center gap-2 mb-5">
            <Calendar size={16} style={{ color: 'var(--accent)' }} />
            <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Completion by Era</h3>
          </div>
          <div className="space-y-3">
            {stats.byEra.map(({ era, label, total, owned, pct }) => (
              <div key={era}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{label}</span>
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{owned}/{total} · {pct}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ type: 'spring', duration: 1.2, bounce: 0, delay: 0.3 }}
                    className="h-full rounded-full"
                    style={{ background: parseInt(pct) === 100 ? 'var(--owned-color)' : 'var(--accent)' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Missing Value */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 0.45, bounce: 0, delay: 0.25 }}
          className="rounded-2xl border p-5"
          style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
        >
          <div className="flex items-center gap-2 mb-5">
            <CurrencyDollar size={16} style={{ color: 'var(--accent)' }} />
            <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Missing Cards Est.</h3>
          </div>
          <div className="text-3xl font-bold font-mono mb-1" style={{ color: 'var(--needed-color)' }}>
            ${stats.missingValue.toFixed(0)}
          </div>
          <div className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>
            {stats.total - stats.ownedCount} cards still needed
          </div>
          <div className="space-y-2">
            <div className="text-xs font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>By Language</div>
            {stats.byLang.map(({ lang, total, owned, pct }) => (
              <div key={lang} className="flex items-center gap-2">
                <span className="text-xs w-8" style={{ color: 'var(--text-muted)' }}>{lang}</span>
                <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
                  <div className="h-full rounded-full" style={{ width: `${pct}%`, background: 'var(--accent)' }} />
                </div>
                <span className="text-xs font-mono w-8 text-right" style={{ color: 'var(--text-muted)' }}>{pct}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Most Valuable Owned */}
        {stats.mostValuable.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', duration: 0.45, bounce: 0, delay: 0.3 }}
            className="lg:col-span-3 rounded-2xl border p-5"
            style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Star size={16} style={{ color: 'var(--accent)' }} weight="fill" />
              <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Most Valuable in Collection</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {stats.mostValuable.map((card, i) => (
                <div
                  key={card.id}
                  className="flex flex-col gap-1 p-3 rounded-xl border"
                  style={{ background: 'var(--bg-elevated)', borderColor: 'var(--border)' }}
                >
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-mono font-bold" style={{ color: 'var(--accent)' }}>#{i + 1}</span>
                    <CheckCircle size={12} style={{ color: 'var(--owned-color)' }} weight="fill" />
                  </div>
                  <div className="text-sm font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>{card.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{card.set}</div>
                  <div className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{card.number} · {card.language}</div>
                  <div className="text-lg font-bold font-mono mt-auto" style={{ color: 'var(--owned-color)' }}>
                    ${card.price?.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
