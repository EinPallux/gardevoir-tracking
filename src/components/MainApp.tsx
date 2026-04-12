'use client';

import { useApp } from '@/lib/store';
import { Navbar } from './Navbar';
import { DatabaseView } from './DatabaseView';
import { StatsView } from './StatsView';
import { TradeView } from './TradeView';
import { ConventionOverlay } from './ConventionOverlay';
import { AnimatePresence, motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 8, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit:    { opacity: 0, y: -4, filter: 'blur(2px)' },
};

const pageTransition = { type: 'spring', duration: 0.45, bounce: 0 };

export function MainApp() {
  const { state } = useApp();

  return (
    <div className="min-h-[100dvh] flex flex-col" style={{ background: 'var(--bg-primary)' }}>
      <Navbar />

      <AnimatePresence mode="wait">
        {state.view === 'database' && (
          <motion.div key="database" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition} className="flex-1 mobile-scroll-pad">
            <DatabaseView mode="all" />
          </motion.div>
        )}
        {state.view === 'collection' && (
          <motion.div key="collection" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition} className="flex-1 mobile-scroll-pad">
            <DatabaseView mode="collection" />
          </motion.div>
        )}
        {state.view === 'stats' && (
          <motion.div key="stats" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition} className="flex-1 mobile-scroll-pad">
            <StatsView />
          </motion.div>
        )}
        {state.view === 'trade' && (
          <motion.div key="trade" variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={pageTransition} className="flex-1 mobile-scroll-pad">
            <TradeView />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {state.conventionMode && <ConventionOverlay />}
      </AnimatePresence>
    </div>
  );
}
