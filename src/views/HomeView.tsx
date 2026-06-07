import React, { useState } from 'react';
import { Search, Trophy, TrendingUp, Sparkles, Server as ServerIcon, Shield, Swords, Pickaxe, Map } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVERS } from '../data';
import { ServerCard } from '../components/ServerCard';

export function HomeView({ onViewDetail }: { onViewDetail: (id: string) => void }) {
    const [searchQuery, setSearchQuery] = useState('');

    const categories = [
        { name: 'Survival', icon: Map, color: 'text-green-400', bg: 'bg-green-400/10' },
        { name: 'Skyblock', icon: Pickaxe, color: 'text-blue-400', bg: 'bg-blue-400/10' },
        { name: 'Prison', icon: Shield, color: 'text-orange-400', bg: 'bg-orange-400/10' },
        { name: 'Minigames', icon: Trophy, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
        { name: 'Factions', icon: Swords, color: 'text-red-400', bg: 'bg-red-400/10' },
        { name: 'Lifesteal', icon: Sparkles, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    ];

    const topServers = SERVERS.sort((a, b) => b.votes - a.votes).slice(0, 5);
    const premiumServers = SERVERS.filter(s => s.isPremium);

    return (
        <div className="w-full flex-1 flex flex-col items-center">
            {/* Hero Section */}
            <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 w-full flex flex-col items-center justify-center min-h-[60vh] shrink-0 border-b border-white/5">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614741480742-ac74c431d671?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#09090b] z-10"></div>

                <div className="relative z-20 max-w-4xl mx-auto px-4 text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-center"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-purple-500/30 bg-purple-500/10 text-purple-400 text-[10px] font-bold uppercase tracking-wider mb-6">
                            <Sparkles className="w-3 h-3" />
                            <span>The Premium Minecraft Server List</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter text-white mb-6 leading-tight">
                            Find Your Next <br />
                            <span className="text-purple-500">
                                Adventure
                            </span>
                        </h1>
                        <p className="text-sm text-zinc-400 mb-10 max-w-2xl mx-auto">
                            Discover the best Minecraft servers. Vote for your favorites, find new communities, and start playing today.
                        </p>

                        <div className="relative max-w-2xl mx-auto w-full md:w-[600px]">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-zinc-500" />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-12 pr-24 py-4 text-sm bg-zinc-900/50 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 transition-all font-medium shadow-xl"
                                placeholder="Search by name, IP, or gamemode..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <div className="absolute inset-y-2 right-2 flex items-center">
                                <button className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-bold rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all">
                                    Search
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Main Layout Area */}
            <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-8 px-4 sm:px-6 lg:px-8 py-8">
                {/* Categories Sidebar */}
                <aside className="w-full md:w-64 border border-white/5 bg-zinc-950 p-6 rounded-xl shrink-0 h-fit hidden md:flex flex-col gap-8">
                    <div>
                        <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            {categories.map((cat, i) => {
                                const Icon = cat.icon;
                                const isActive = i === 0;
                                return (
                                    <li key={cat.name} className={`flex items-center gap-3 p-2 rounded-md transition-colors cursor-pointer ${isActive ? 'bg-purple-500/10 border border-purple-500/20 text-purple-400' : 'hover:bg-white/5 text-zinc-400'}`}>
                                        <Icon className="w-4 h-4" />
                                        <span className="text-xs font-medium">{cat.name}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="mt-auto p-4 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-white/5 rounded-xl">
                        <p className="text-xs font-bold text-white mb-1">Go Premium</p>
                        <p className="text-[10px] text-zinc-400 mb-3">Get featured and reach 50k+ daily players.</p>
                        <button className="w-full py-1.5 bg-white text-black text-[10px] font-black uppercase rounded">Upgrade Now</button>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 flex flex-col gap-8">
                    {/* Featured Servers area matches exact design */}
                    {premiumServers.length > 0 && (
                        <div className="flex flex-col gap-4">
                            <h3 className="text-lg font-bold text-white uppercase italic tracking-tight">Featured Server</h3>
                            <section className="relative h-48 w-full rounded-2xl overflow-hidden group shrink-0 border border-white/5 cursor-pointer" onClick={() => onViewDetail(premiumServers[0].id)}>
                                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>
                                <img src={premiumServers[0].banner} className="absolute inset-0 w-full h-full object-cover" alt="" />
                                <div className="relative z-20 p-8 h-full flex flex-col justify-center">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="px-2 py-0.5 bg-purple-600 text-[10px] font-bold rounded uppercase">Featured</span>
                                        <span className="text-xs text-white/70">Sponsored Server</span>
                                    </div>
                                    <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-2">{premiumServers[0].name}</h2>
                                    <p className="text-zinc-300 max-w-md text-sm mb-4 line-clamp-2">{premiumServers[0].shortDescription}</p>
                                </div>
                            </section>
                        </div>
                    )}

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-bold text-white uppercase italic tracking-tight">Trending Servers</h3>
                            <div className="flex gap-2">
                                <button className="px-3 py-1 bg-purple-600 rounded text-xs font-bold text-white shadow-[0_0_15px_rgba(168,85,247,0.3)]">Votes</button>
                                <button className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-xs font-bold text-zinc-400 transition-colors">Players</button>
                                <button className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-xs font-bold text-zinc-400 transition-colors">New</button>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            {topServers.map((server, index) => (
                                <ServerCard 
                                    key={server.id} 
                                    server={server} 
                                    index={index} 
                                    onViewDetail={onViewDetail} 
                                />
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
