'use client';

import { useApp } from '@/lib/store';
import { Navbar } from './Navbar';
import { DatabaseView } from './DatabaseView';
import { StatsView } from './StatsView';
import { TradeView } from './TradeView';
import { ConventionOverlay } from './ConventionOverlay';
import { AnimatePresence, motion } from 'framer-motion';

export function MainApp() {
  const { state } = useApp();

  return (
    <div className="min-h-[100dvh] flex flex-col" style={{ background: 'var(--bg-primary)' }}>
      <Navbar />
      
      <AnimatePresence mode="wait">
        {state.view === 'database' && (
          <motion.div
            key="database"
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -4, filter: 'blur(2px)' }}
            transition={{ type: 'spring', duration: 0.45, bounce: 0 }}
            className="flex-1"
          >
            <DatabaseView mode="all" />
          </motion.div>
        )}
        {state.view === 'collection' && (
          <motion.div
            key="collection"
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -4, filter: 'blur(2px)' }}
            transition={{ type: 'spring', duration: 0.45, bounce: 0 }}
            className="flex-1"
          >
            <DatabaseView mode="collection" />
          </motion.div>
        )}
        {state.view === 'stats' && (
          <motion.div
            key="stats"
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -4, filter: 'blur(2px)' }}
            transition={{ type: 'spring', duration: 0.45, bounce: 0 }}
            className="flex-1"
          >
            <StatsView />
          </motion.div>
        )}
        {state.view === 'trade' && (
          <motion.div
            key="trade"
            initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -4, filter: 'blur(2px)' }}
            transition={{ type: 'spring', duration: 0.45, bounce: 0 }}
            className="flex-1"
          >
            <TradeView />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Convention Mode Overlay */}
      <AnimatePresence>
        {state.conventionMode && <ConventionOverlay />}
      </AnimatePresence>
    </div>
  );
}
