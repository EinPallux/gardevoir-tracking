'use client';

import { useApp } from '@/lib/store';
import { motion } from 'framer-motion';
import {
  Database,
  Heart,
  ChartBar,
  ArrowsLeftRight,
  Sun,
  Moon,
  DownloadSimple,
  UploadSimple,
  Globe,
  Lightning,
} from '@phosphor-icons/react';
import { CARD_DATABASE } from '@/lib/cardDatabase';
import { useRef } from 'react';

export function Navbar() {
  const { state, dispatch, t } = useApp();
  const importRef = useRef<HTMLInputElement>(null);

  const ownedCount = Object.keys(state.collection).length;
  const totalCount = CARD_DATABASE.length;
  const pct = Math.round((ownedCount / totalCount) * 100);

  const navItems = [
    { id: 'database' as const, icon: Database, label: t('navDatabase') },
    { id: 'collection' as const, icon: Heart, label: t('navCollection') },
    { id: 'stats' as const, icon: ChartBar, label: t('navStats') },
    { id: 'trade' as const, icon: ArrowsLeftRight, label: t('navTrade') },
  ];

  function handleExport() {
    const data = {
      version: 1,
      exportedAt: new Date().toISOString(),
      collection: state.collection,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `gardevoir-collection-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const parsed = JSON.parse(ev.target?.result as string);
        if (parsed.collection && typeof parsed.collection === 'object') {
          dispatch({ type: 'IMPORT_STATE', state: { collection: parsed.collection } });
        }
      } catch {
        alert(t('importError'));
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  return (
    <>
      {/* Desktop Navbar */}
      <header
        className="sticky top-0 z-40 hidden md:flex items-center gap-4 px-6 py-3 border-b"
        style={{
          background: `${state.theme === 'dark' ? 'rgba(15,14,13,0.9)' : 'rgba(248,247,245,0.9)'}`,
          backdropFilter: 'blur(12px)',
          borderColor: 'var(--border)',
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 mr-4">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold"
            style={{ background: 'var(--accent)' }}
          >
            G
          </div>
          <div>
            <div className="text-sm font-bold leading-none" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-satoshi)' }}>
              {t('appTitle')}
            </div>
            <div className="text-xs leading-none mt-0.5" style={{ color: 'var(--text-muted)' }}>
              {ownedCount}/{totalCount} · {pct}%
            </div>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex items-center gap-1 flex-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => dispatch({ type: 'SET_VIEW', view: item.id })}
              className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors"
              style={{
                color: state.view === item.id ? 'var(--accent)' : 'var(--text-secondary)',
                background: state.view === item.id ? 'var(--accent-subtle)' : 'transparent',
              }}
            >
              <item.icon size={15} weight={state.view === item.id ? 'fill' : 'regular'} />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Progress bar */}
        <div className="hidden lg:flex items-center gap-2 flex-1 max-w-48">
          <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-elevated)' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'var(--accent)' }}
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ type: 'spring', duration: 1, bounce: 0 }}
            />
          </div>
          <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>{pct}%</span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          {/* Convention Mode */}
          <button
            onClick={() => dispatch({ type: 'TOGGLE_CONVENTION' })}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all"
            style={{
              background: state.conventionMode ? 'var(--accent)' : 'var(--bg-elevated)',
              color: state.conventionMode ? '#fff' : 'var(--text-secondary)',
              border: '1px solid var(--border)',
            }}
            title={t('convention')}
          >
            <Lightning size={13} weight={state.conventionMode ? 'fill' : 'regular'} />
            <span className="hidden lg:inline">{t('convention')}</span>
          </button>

          {/* Export */}
          <button
            onClick={handleExport}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors"
            style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
            title={t('exportData')}
          >
            <DownloadSimple size={14} />
            <span className="hidden lg:inline">{t('exportData')}</span>
          </button>

          {/* Import */}
          <button
            onClick={() => importRef.current?.click()}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors"
            style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
            title={t('importData')}
          >
            <UploadSimple size={14} />
            <span className="hidden lg:inline">{t('importData')}</span>
          </button>
          <input ref={importRef} type="file" accept=".json" className="hidden" onChange={handleImport} />

          {/* Language */}
          <button
            onClick={() => dispatch({ type: 'SET_LOCALE', locale: state.locale === 'en' ? 'de' : 'en' })}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors"
            style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
          >
            <Globe size={14} />
            {state.locale === 'en' ? 'DE' : 'EN'}
          </button>

          {/* Theme */}
          <button
            onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
            className="p-1.5 rounded-lg transition-colors"
            style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
          >
            {state.theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </header>

      {/* Mobile Header */}
      <header
        className="sticky top-0 z-40 md:hidden flex items-center justify-between px-4 py-3 border-b"
        style={{
          background: `${state.theme === 'dark' ? 'rgba(15,14,13,0.92)' : 'rgba(248,247,245,0.92)'}`,
          backdropFilter: 'blur(12px)',
          borderColor: 'var(--border)',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: 'var(--accent)' }}>G</div>
          <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{t('appTitle')}</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => dispatch({ type: 'TOGGLE_CONVENTION' })} className="p-1.5 rounded-lg" style={{ background: state.conventionMode ? 'var(--accent)' : 'var(--bg-elevated)', color: state.conventionMode ? '#fff' : 'var(--text-secondary)' }}>
            <Lightning size={15} weight={state.conventionMode ? 'fill' : 'regular'} />
          </button>
          <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })} className="p-1.5 rounded-lg" style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}>
            {state.theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
        </div>
      </header>

      {/* Mobile Bottom Nav */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-40 md:hidden flex border-t"
        style={{
          background: `${state.theme === 'dark' ? 'rgba(15,14,13,0.95)' : 'rgba(248,247,245,0.95)'}`,
          backdropFilter: 'blur(12px)',
          borderColor: 'var(--border)',
        }}
      >
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => dispatch({ type: 'SET_VIEW', view: item.id })}
            className="flex-1 flex flex-col items-center gap-0.5 py-2.5 text-xs"
            style={{ color: state.view === item.id ? 'var(--accent)' : 'var(--text-muted)' }}
          >
            <item.icon size={20} weight={state.view === item.id ? 'fill' : 'regular'} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}
