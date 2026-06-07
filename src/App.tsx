import { useState, useEffect } from 'react';
import { ViewState } from './types';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { ServersView } from './views/ServersView';
import { ServerDetailView } from './views/ServerDetailView';
import { AddServerView } from './views/AddServerView';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedServerId, setSelectedServerId] = useState<string | null>(null);

  // Handle navigating to detail view specifically
  const handleViewDetail = (id: string) => {
    setSelectedServerId(id);
    setCurrentView('server-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Ensure scroll top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navigation currentView={currentView} setView={setCurrentView} />

      <main className="flex-1 flex flex-col relative w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {currentView === 'home' && (
            <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="w-full flex-1">
              <HomeView onViewDetail={handleViewDetail} />
            </motion.div>
          )}

          {currentView === 'servers' && (
            <motion.div key="servers" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="w-full flex-1">
              <ServersView onViewDetail={handleViewDetail} />
            </motion.div>
          )}

          {currentView === 'server-detail' && selectedServerId && (
            <motion.div key="detail" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="w-full flex-1">
              <ServerDetailView serverId={selectedServerId} onBack={() => setCurrentView('servers')} />
            </motion.div>
          )}

          {currentView === 'add-server' && (
            <motion.div key="add-server" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="w-full flex-1">
              <AddServerView />
            </motion.div>
          )}

          {/* Placeholders for other views */}
          {['premium', 'tools', 'dashboard'].includes(currentView) && (
            <motion.div key="placeholder" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[50vh]">
              <div className="w-16 h-16 bg-purple-500/10 rounded border border-purple-500/30 flex items-center justify-center mb-6">
                <span className="text-3xl opacity-50">🚧</span>
              </div>
              <h2 className="text-3xl font-black italic uppercase tracking-tighter text-white mb-4 capitalize">{currentView.replace('-', ' ')}</h2>
              <p className="text-sm text-zinc-400 max-w-md">This section is currently under construction. Please check back later for updates!</p>
              <button onClick={() => setCurrentView('home')} className="mt-8 px-6 py-2 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs rounded transition-colors uppercase tracking-wider">Return Home</button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
