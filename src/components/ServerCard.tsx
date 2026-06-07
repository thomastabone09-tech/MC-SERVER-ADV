import React, { useState } from 'react';
import { Server as ServerType } from '../types';
import { Copy, Check, Users, ChevronRight, Gem, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

interface ServerCardProps {
    server: ServerType;
    index: number;
    onViewDetail: (id: string) => void;
}

export function ServerCard({ server, index, onViewDetail }: ServerCardProps) {
    const [copied, setCopied] = useState(false);

    const handleCopyIP = (e: React.MouseEvent) => {
        e.stopPropagation();
        navigator.clipboard.writeText(server.ip);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            onClick={() => onViewDetail(server.id)}
            className={`group relative flex flex-col md:flex-row bg-zinc-900/50 rounded-xl overflow-hidden border cursor-pointer transition-all duration-300 hover:bg-zinc-800/50 ${
                server.isPremium 
                    ? 'border-purple-500/30 hover:border-purple-500/50' 
                    : 'border-white/5 hover:border-white/10'
            }`}
        >
            {/* Rank / Premium Badge */}
            {server.isPremium && (
                <div className="absolute top-0 right-0 z-10 overflow-hidden w-20 h-20">
                    <div className="absolute transform rotate-45 bg-purple-600 text-white text-[10px] font-bold py-1 right-[-35px] top-[15px] w-[120px] text-center shadow-lg uppercase tracking-wider">
                        Premium
                    </div>
                </div>
            )}
            
            <div className="hidden md:flex flex-col items-center justify-center p-4 min-w-[80px]">
                <span className="text-zinc-500 text-[10px] uppercase tracking-wider font-bold mb-1">Rank</span>
                <span className={`text-2xl font-black italic ${index < 3 ? 'text-zinc-100' : 'text-zinc-400'}`}>
                    #{index + 1}
                </span>
            </div>

            <div className="flex flex-col sm:flex-row flex-1 p-4 gap-6 items-center">
                {/* Icon */}
                <div className="relative shrink-0 flex items-start">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300 border border-white/10 relative z-10 bg-black">
                        <img src={server.icon} alt={`${server.name} icon`} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center min-w-0 py-2">
                    <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-white truncate group-hover:text-purple-400 transition-colors">
                            {server.name}
                        </h3>
                        <span className="px-2 py-0.5 bg-zinc-800 text-[10px] text-zinc-400 rounded shrink-0">
                            {server.version}
                        </span>
                        {server.featured && (
                            <span className="px-2 py-0.5 bg-purple-600 text-[10px] text-white rounded uppercase font-bold shrink-0">
                                Featured
                            </span>
                        )}
                    </div>
                    
                    <p className="text-zinc-400 text-xs mb-3 line-clamp-2 max-w-xl">
                        {server.shortDescription}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center gap-2">
                        {server.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-white/5 rounded text-zinc-500 border border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-row md:flex-row items-center justify-between md:justify-end gap-6 md:pl-6 md:border-l md:border-white/5 mt-4 md:mt-0 shrink-0">
                    <div className="text-right flex flex-col items-end">
                        <div className="text-lg font-bold text-emerald-400">{server.players.online.toLocaleString()}</div>
                        <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-bold">Online</div>
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={handleCopyIP}
                            className={`px-4 py-2 rounded-lg text-xs font-bold border transition-colors ${
                                copied 
                                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' 
                                    : 'bg-zinc-800 hover:bg-zinc-700 border-white/10 text-white'
                            }`}
                        >
                            {copied ? 'Copied!' : 'Copy IP'}
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 rounded-lg text-xs font-bold shadow-[0_4px_10px_rgba(16,185,129,0.2)] text-white">
                            Vote ({Math.floor(server.votes / 1000)}k)
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
