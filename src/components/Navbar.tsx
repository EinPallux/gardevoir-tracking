'use client';

import { useState } from 'react';
import { useApp } from '@/lib/store';
import { motion } from 'framer-motion';
import { Database, Heart, ChartBar, ArrowsLeftRight, GearSix, Lightning } from '@phosphor-icons/react';
import { CARD_DATABASE } from '@/lib/cardDatabase';
import { SettingsModal } from './SettingsModal';

export function Navbar() {
  const { state, dispatch, t } = useApp();
  const [settingsOpen, setSettingsOpen] = useState(false);

  const ownedCount = Object.keys(state.collection).length;
  const totalCount = CARD_DATABASE.length;
  const pct = Math.round((ownedCount / totalCount) * 100);

  const navItems = [
    { id: 'database' as const, icon: Database, label: t('navDatabase') },
    { id: 'collection' as const, icon: Heart, label: t('navCollection') },
    { id: 'stats' as const, icon: ChartBar, label: t('navStats') },
    { id: 'trade' as const, icon: ArrowsLeftRight, label: t('navTrade') },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className="sticky top-0 z-40 hidden md:flex items-center gap-4 px-6 py-3 border-b"
        style={{
          background: state.theme === 'dark' ? 'rgba(15,14,13,0.92)' : 'rgba(248,247,245,0.92)',
          backdropFilter: 'blur(12px)',
          borderColor: 'var(--border)',
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 mr-4">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-black"
            style={{ background: 'var(--accent)' }}>G</div>
          <div>
            <div className="text-sm font-bold leading-none" style={{ color: 'var(--text-primary)' }}>{t('appTitle')}</div>
            <div className="text-xs leading-none mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {ownedCount}/{totalCount} · {pct}%
            </div>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex items-center gap-1 flex-1">
          {navItems.map(item => (
            <button key={item.id}
              onClick={() => dispatch({ type: 'SET_VIEW', view: item.id })}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: state.view === item.id ? 'var(--accent)' : 'var(--text-secondary)',
                background: state.view === item.id ? 'var(--accent-subtle)' : 'transparent',
              }}>
              <item.icon size={15} weight={state.view === item.id ? 'fill' : 'regular'} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Progress bar */}
        <div className="hidden lg:flex items-center gap-2 flex-1 max-w-44">
          <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
            <motion.div className="h-full rounded-full" style={{ background: 'var(--accent)' }}
              initial={{ width: 0 }} animate={{ width: `${pct}%` }}
              transition={{ type: 'spring', duration: 1, bounce: 0 }} />
          </div>
          <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{pct}%</span>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-1.5">
          {/* Convention Mode */}
          <button
            onClick={() => dispatch({ type: 'TOGGLE_CONVENTION' })}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium border transition-all"
            style={{
              background: state.conventionMode ? 'var(--accent)' : 'var(--bg-elevated)',
              color: state.conventionMode ? '#fff' : 'var(--text-secondary)',
              borderColor: state.conventionMode ? 'var(--accent)' : 'var(--border)',
            }}
            title={t('convention')}
          >
            <Lightning size={13} weight={state.conventionMode ? 'fill' : 'regular'} />
            <span className="hidden lg:inline">{t('convention')}</span>
          </button>

          {/* Settings */}
          <button
            onClick={() => setSettingsOpen(true)}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium border transition-all"
            style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', borderColor: 'var(--border)' }}
          >
            <GearSix size={16} weight="regular" />
          </button>
        </div>
      </header>

      {/* Mobile Top Bar */}
      <header
        className="sticky top-0 z-40 md:hidden flex items-center justify-between px-4 py-3 border-b"
        style={{
          background: state.theme === 'dark' ? 'rgba(15,14,13,0.94)' : 'rgba(248,247,245,0.94)',
          backdropFilter: 'blur(12px)',
          borderColor: 'var(--border)',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-black"
            style={{ background: 'var(--accent)' }}>G</div>
          <div>
            <div className="text-sm font-bold leading-none" style={{ color: 'var(--text-primary)' }}>{t('appTitle')}</div>
          </div>
        </div>

        {/* Mobile: progress + buttons */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-16 h-1 rounded-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
              <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, background: 'var(--accent)' }} />
            </div>
            <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{pct}%</span>
          </div>
          <button onClick={() => dispatch({ type: 'TOGGLE_CONVENTION' })}
            className="p-1.5 rounded-lg border"
            style={{
              background: state.conventionMode ? 'var(--accent)' : 'var(--bg-elevated)',
              color: state.conventionMode ? '#fff' : 'var(--text-secondary)',
              borderColor: 'var(--border)',
            }}>
            <Lightning size={15} weight={state.conventionMode ? 'fill' : 'regular'} />
          </button>
          <button onClick={() => setSettingsOpen(true)}
            className="p-1.5 rounded-lg border"
            style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', borderColor: 'var(--border)' }}>
            <GearSix size={16} />
          </button>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex border-t"
        style={{
          background: state.theme === 'dark' ? 'rgba(15,14,13,0.96)' : 'rgba(248,247,245,0.96)',
          backdropFilter: 'blur(12px)',
          borderColor: 'var(--border)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {navItems.map(item => (
          <button key={item.id}
            onClick={() => dispatch({ type: 'SET_VIEW', view: item.id })}
            className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-xs transition-colors"
            style={{ color: state.view === item.id ? 'var(--accent)' : 'var(--text-muted)' }}>
            <item.icon size={20} weight={state.view === item.id ? 'fill' : 'regular'} />
            <span className="text-[10px]">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Settings Modal */}
      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
}
