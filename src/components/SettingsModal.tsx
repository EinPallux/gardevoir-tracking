'use client';

import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/lib/store';
import { CARD_DATABASE } from '@/lib/cardDatabase';
import {
  X, Sun, Moon, Desktop, Globe, DownloadSimple, UploadSimple, Trash, Warning,
} from '@phosphor-icons/react';

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
}

export function SettingsModal({ open, onClose }: SettingsModalProps) {
  const { state, dispatch, t } = useApp();
  const importRef = useRef<HTMLInputElement>(null);

  const ownedCount = Object.keys(state.collection).length;
  const neededCount = CARD_DATABASE.length - ownedCount;
  const dupeCount = Object.values(state.collection).filter(e => e.qty > 1).reduce((s, e) => s + e.qty - 1, 0);
  const pct = Math.round((ownedCount / CARD_DATABASE.length) * 100);

  function handleExport() {
    const data = { version: 1, exportedAt: new Date().toISOString(), collection: state.collection };
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
          onClose();
        }
      } catch { alert(t('importError')); }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  function handleClearAll() {
    if (confirm('Delete ALL collection data? This cannot be undone.')) {
      dispatch({ type: 'IMPORT_STATE', state: { collection: {} } });
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          {/* Panel — slides up from bottom on mobile, appears right-aligned on desktop */}
          <motion.div
            className="fixed z-50 bottom-0 left-0 right-0 md:bottom-auto md:top-16 md:right-4 md:left-auto md:w-80 rounded-t-3xl md:rounded-2xl overflow-hidden"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-lg)',
              maxHeight: '92dvh',
            }}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
          >
            {/* Drag handle (mobile) */}
            <div className="flex justify-center pt-3 md:hidden">
              <div className="w-10 h-1 rounded-full" style={{ background: 'var(--border-strong)' }} />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4">
              <h2 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Settings</h2>
              <button onClick={onClose} className="p-1.5 rounded-xl transition-colors" style={{ background: 'var(--bg-elevated)', color: 'var(--text-secondary)' }}>
                <X size={18} />
              </button>
            </div>

            <div className="overflow-y-auto px-5 pb-8 space-y-6" style={{ maxHeight: 'calc(92dvh - 80px)' }}>

              {/* THEME */}
              <section>
                <SectionLabel icon="☀️" label="THEME" />
                <div className="grid grid-cols-3 gap-2">
                  {(['light', 'dark', 'system'] as const).map(th => (
                    <button
                      key={th}
                      onClick={() => {
                        if (th === 'system') {
                          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                          dispatch({ type: 'IMPORT_STATE', state: { theme: prefersDark ? 'dark' : 'light' } });
                        } else {
                          dispatch({ type: 'IMPORT_STATE', state: { theme: th } });
                        }
                      }}
                      className="flex flex-col items-center gap-1.5 py-3 rounded-xl border-2 transition-all"
                      style={{
                        borderColor: state.theme === th ? 'var(--accent)' : 'var(--border)',
                        background: state.theme === th ? 'var(--accent-subtle)' : 'var(--bg-elevated)',
                        color: state.theme === th ? 'var(--accent)' : 'var(--text-secondary)',
                      }}
                    >
                      {th === 'light' && <Sun size={20} weight={state.theme === 'light' ? 'fill' : 'regular'} />}
                      {th === 'dark' && <Moon size={20} weight={state.theme === 'dark' ? 'fill' : 'regular'} />}
                      {th === 'system' && <Desktop size={20} weight="regular" />}
                      <span className="text-xs font-semibold capitalize">{th === 'light' ? 'Light' : th === 'dark' ? 'Dark' : 'System'}</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* LANGUAGE */}
              <section>
                <SectionLabel icon="🌐" label="LANGUAGE" />
                <div className="grid grid-cols-2 gap-2">
                  {(['en', 'de'] as const).map(loc => (
                    <button
                      key={loc}
                      onClick={() => dispatch({ type: 'SET_LOCALE', locale: loc })}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl border-2 transition-all"
                      style={{
                        borderColor: state.locale === loc ? 'var(--accent)' : 'var(--border)',
                        background: state.locale === loc ? 'var(--accent-subtle)' : 'var(--bg-elevated)',
                        color: state.locale === loc ? 'var(--accent)' : 'var(--text-secondary)',
                      }}
                    >
                      <Globe size={16} weight={state.locale === loc ? 'fill' : 'regular'} />
                      <span className="text-sm font-bold">{loc === 'en' ? '🇬🇧 English' : '🇩🇪 Deutsch'}</span>
                    </button>
                  ))}
                </div>
              </section>

              {/* COLLECTION STATS */}
              <section>
                <SectionLabel icon="📊" label="COLLECTION STATS" />
                <div className="grid grid-cols-2 gap-2">
                  <StatTile label="Owned" value={ownedCount} color="var(--owned-color)" />
                  <StatTile label="Missing" value={neededCount} color="var(--needed-color)" />
                  <StatTile label="Duplicates" value={dupeCount} color="var(--trade-color)" />
                  <StatTile label="Progress" value={`${pct}%`} color="var(--accent)" />
                </div>
              </section>

              {/* DATA MANAGEMENT */}
              <section>
                <SectionLabel icon="💾" label="DATA MANAGEMENT" />
                <div className="space-y-2">
                  <ActionButton
                    icon={<DownloadSimple size={18} weight="fill" />}
                    label="Export Collection"
                    sub="Save as JSON backup"
                    iconBg="var(--owned-bg)"
                    iconColor="var(--owned-color)"
                    onClick={handleExport}
                  />
                  <ActionButton
                    icon={<UploadSimple size={18} weight="fill" />}
                    label="Import Collection"
                    sub="Load a JSON backup file"
                    iconBg="var(--accent-subtle)"
                    iconColor="var(--accent)"
                    onClick={() => importRef.current?.click()}
                  />
                  <input ref={importRef} type="file" accept=".json" className="hidden" onChange={handleImport} />
                  <ActionButton
                    icon={<Trash size={18} weight="fill" />}
                    label="Clear All Data"
                    sub="Permanently removes all data"
                    iconBg="var(--needed-bg)"
                    iconColor="var(--needed-color)"
                    onClick={handleClearAll}
                    danger
                  />
                </div>
              </section>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function SectionLabel({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5 mb-2.5">
      <span className="text-sm">{icon}</span>
      <span className="text-xs font-bold tracking-widest" style={{ color: 'var(--text-muted)' }}>{label}</span>
    </div>
  );
}

function StatTile({ label, value, color }: { label: string; value: string | number; color: string }) {
  return (
    <div className="p-3 rounded-xl" style={{ background: 'var(--bg-elevated)' }}>
      <div className="text-xl font-black font-mono" style={{ color }}>{value}</div>
      <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{label}</div>
    </div>
  );
}

function ActionButton({ icon, label, sub, iconBg, iconColor, onClick, danger }: {
  icon: React.ReactNode; label: string; sub: string;
  iconBg: string; iconColor: string; onClick: () => void; danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 p-3.5 rounded-xl border transition-all text-left active:scale-[0.98]"
      style={{
        background: 'var(--bg-elevated)',
        borderColor: danger ? 'var(--needed-color)30' : 'var(--border)',
      }}
    >
      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: iconBg, color: iconColor }}>
        {icon}
      </div>
      <div>
        <div className="text-sm font-bold" style={{ color: danger ? 'var(--needed-color)' : 'var(--text-primary)' }}>{label}</div>
        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{sub}</div>
      </div>
    </button>
  );
}
