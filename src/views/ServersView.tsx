import React, { useState } from 'react';
import { SERVERS } from '../data';
import { ServerCard } from '../components/ServerCard';
import { Filter, SlidersHorizontal } from 'lucide-react';
import { motion } from 'motion/react';

export function ServersView({ onViewDetail }: { onViewDetail: (id: string) => void }) {
    const [sortMethod, setSortMethod] = useState<'votes' | 'players' | 'newest'>('votes');
    const [filterVersion, setFilterVersion] = useState('all');
    
    // Sort logic
    const sortedServers = [...SERVERS].sort((a, b) => {
        if (sortMethod === 'votes') return b.votes - a.votes;
        if (sortMethod === 'players') return b.players.online - a.players.online;
        if (sortMethod === 'newest') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        return 0;
    });

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full mb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-8">
                <div>
                    <h1 className="text-4xl font-black uppercase italic tracking-tighter text-white mb-2">Server List</h1>
                    <p className="text-sm text-zinc-400">Discover and vote for the best Minecraft Servers.</p>
                </div>

                <div className="flex flex-wrap gap-4 w-full md:w-auto">
                    {/* Filters & Sorting */}
                    <div className="flex gap-2">
                        <button 
                            onClick={() => setSortMethod('votes')}
                            className={`px-4 py-2 rounded text-xs font-bold transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)] ${sortMethod === 'votes' ? 'bg-purple-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 shadow-none'}`}
                        >
                            Most Votes
                        </button>
                        <button 
                            onClick={() => setSortMethod('players')}
                            className={`px-4 py-2 rounded text-xs font-bold transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)] ${sortMethod === 'players' ? 'bg-purple-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 shadow-none'}`}
                        >
                            Most Players
                        </button>
                        <button 
                            onClick={() => setSortMethod('newest')}
                            className={`px-4 py-2 rounded text-xs font-bold transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)] ${sortMethod === 'newest' ? 'bg-purple-600 text-white' : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 shadow-none'}`}
                        >
                            Newest
                        </button>
                    </div>

                    <button className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-white/10 rounded text-xs text-white font-bold hover:bg-zinc-700 transition-colors">
                        <Filter className="w-3 h-3" /> Filters
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Advanced Filters Sidebar */}
                <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-6 bg-zinc-950 border border-white/5 p-6 rounded-xl h-fit">
                    <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4 flex items-center gap-2">
                        <SlidersHorizontal className="w-3 h-3" /> Filter Options
                    </h3>
                    
                    <div className="flex flex-col gap-6">
                        <div>
                            <label className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">Version</label>
                            <select 
                                className="w-full bg-zinc-900/50 border border-white/10 rounded-lg py-2 px-3 text-white text-sm focus:outline-none focus:border-purple-500/50 transition-colors"
                                value={filterVersion}
                                onChange={(e) => setFilterVersion(e.target.value)}
                            >
                                <option value="all">All Versions</option>
                                <option value="1.20">1.20+</option>
                                <option value="1.19">1.19+</option>
                                <option value="1.12">1.12.2</option>
                                <option value="1.8">1.8.x</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">Category / Gamemode</label>
                            <div className="space-y-2">
                                {['Survival', 'Skyblock', 'Prison', 'Factions', 'Minigames', 'Anarchy'].map(cat => (
                                    <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                                        <div className="w-4 h-4 rounded border border-white/20 bg-zinc-900/50 group-hover:border-purple-500/50 flex items-center justify-center">
                                            {/* Custom checkbox indication omitted for simplicity */}
                                        </div>
                                        <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-xs font-bold text-zinc-400 mb-2 uppercase tracking-wider">Region</label>
                            <div className="flex flex-wrap gap-2">
                                {['NA', 'EU', 'AS', 'OCE'].map(reg => (
                                    <button key={reg} className="px-3 py-1 bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded text-xs shrink-0 font-bold text-zinc-300">
                                        {reg}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <button className="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white rounded text-xs font-bold transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)] mt-2">
                            Apply Filters
                        </button>
                    </div>
                </aside>

                {/* Server List */}
                <div className="flex-1 flex flex-col gap-4">
                    {sortedServers.map((server, index) => (
                        <ServerCard 
                            key={server.id} 
                            server={server} 
                            index={index} 
                            onViewDetail={onViewDetail} 
                        />
                    ))}
                    
                    {/* Pagination */}
                    <div className="flex justify-center mt-8 gap-2">
                        <button className="px-4 py-2 bg-zinc-800 border border-white/10 rounded text-zinc-500 text-xs font-bold disabled:opacity-50" disabled>Previous</button>
                        <button className="px-4 py-2 bg-purple-600 text-white font-bold rounded text-xs shadow-[0_0_15px_rgba(168,85,247,0.3)]">1</button>
                        <button className="px-4 py-2 bg-zinc-800 border border-white/10 rounded text-zinc-400 hover:text-white hover:bg-zinc-700 text-xs font-bold">2</button>
                        <button className="px-4 py-2 bg-zinc-800 border border-white/10 rounded text-zinc-400 hover:text-white hover:bg-zinc-700 text-xs font-bold">3</button>
                        <button className="px-4 py-2 bg-zinc-800 border border-white/10 rounded text-zinc-400 hover:text-white hover:bg-zinc-700 text-xs font-bold">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
