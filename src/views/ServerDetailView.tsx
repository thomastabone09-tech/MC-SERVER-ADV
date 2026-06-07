import React, { useState } from 'react';
import { Server as ServerType } from '../types';
import { SERVERS } from '../data';
import { ArrowLeft, Copy, Check, ExternalLink, Globe, Calendar, Activity, Users, ThumbsUp, Map, Shield } from 'lucide-react';
import { motion } from 'motion/react';

export function ServerDetailView({ serverId, onBack }: { serverId: string, onBack: () => void }) {
    const server = SERVERS.find(s => s.id === serverId) || SERVERS[0];
    const [copied, setCopied] = useState(false);

    const handleCopyIP = () => {
        navigator.clipboard.writeText(server.ip);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full pb-20"
        >
            {/* Banner Header */}
            <div className="relative h-[300px] md:h-[400px] w-full border-b border-white/5">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] to-transparent z-20"></div>
                <img src={server.banner} alt="Banner" className="w-full h-full object-cover" />
                
                <button 
                    onClick={onBack}
                    className="absolute top-6 left-6 z-30 flex items-center gap-2 px-4 py-2 bg-zinc-900/50 hover:bg-zinc-800 rounded text-xs font-bold uppercase tracking-wider backdrop-blur-md text-white transition-colors border border-white/10"
                >
                    <ArrowLeft className="w-4 h-4" /> Back
                </button>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 -mt-24">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Left Column: Icon & Quick Actions */}
                    <div className="flex flex-col gap-4 w-full md:w-64 shrink-0">
                        <div className="w-32 h-32 md:w-full md:h-auto md:aspect-square rounded-xl overflow-hidden border-4 border-[#09090b] shadow-2xl bg-zinc-950">
                            <img src={server.icon} alt={server.name} className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                            <button className="w-full py-4 bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 rounded-lg text-sm font-black italic uppercase shadow-[0_4px_10px_rgba(16,185,129,0.2)] text-white transition-all">
                                Vote for Server
                            </button>
                            <button 
                                onClick={handleCopyIP}
                                className={`w-full py-3 flex items-center justify-center gap-2 rounded-lg text-xs font-bold transition-all border ${
                                    copied 
                                        ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' 
                                        : 'bg-zinc-800 text-white border-white/10 hover:bg-zinc-700'
                                }`}
                            >
                                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                {copied ? 'Copied' : server.ip}
                            </button>
                        </div>

                        {/* Quick Stats Sidebar */}
                        <div className="bg-zinc-950 border border-white/5 rounded-xl p-6 mt-4">
                            <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-4">Server Info</h3>
                            <div className="flex flex-col gap-4 text-xs font-medium">
                                <div className="flex items-center justify-between">
                                    <span className="text-zinc-400 flex items-center gap-2"><Activity className="w-4 h-4" /> Status</span>
                                    <span className="text-emerald-400 flex items-center gap-1 font-bold"><span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Online</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-zinc-400 flex items-center gap-2"><Globe className="w-4 h-4" /> Region</span>
                                    <span className="text-white font-bold">{server.region}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-zinc-400 flex items-center gap-2"><Calendar className="w-4 h-4" /> Added</span>
                                    <span className="text-white font-bold">{new Date(server.createdAt).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-zinc-400 flex items-center gap-2"><Shield className="w-4 h-4" /> Uptime</span>
                                    <span className="text-white font-bold">{server.uptime}%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex-1 w-full md:mt-24">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                            <div>
                                <h1 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white mb-2">{server.name}</h1>
                                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                                    <span className="px-2 py-1 bg-zinc-800 rounded text-zinc-400">
                                        Server Version: {server.version}
                                    </span>
                                    {server.isPremium && (
                                        <span className="px-2 py-1 bg-purple-600 rounded text-white shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                                            Premium Server
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="text-right flex flex-col items-end">
                                    <span className="block text-2xl font-bold text-emerald-400 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-emerald-500" />
                                        {server.players.online.toLocaleString()}
                                    </span>
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">Players</span>
                                </div>
                                <div className="text-right flex flex-col items-end">
                                    <span className="block text-2xl font-bold text-purple-400 flex items-center gap-2">
                                        <ThumbsUp className="w-5 h-5 text-purple-500" />
                                        {server.votes.toLocaleString()}
                                    </span>
                                    <span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-bold">Votes</span>
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {server.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-zinc-900/50 border border-white/5 rounded text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Description */}
                        <div className="bg-zinc-950 border border-white/5 rounded-xl p-6 md:p-8">
                            <h2 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-6">About {server.name}</h2>
                            <div className="prose prose-invert max-w-none text-zinc-300 text-sm leading-relaxed space-y-4">
                                <p>{server.description}</p>
                                <p>Join our thriving community today! We pride ourselves on providing a lag-free environment, active staff members to help you with any issues, and a balanced economy. Whether you prefer building peacefully or engaging in intense PvP combat, we have exactly what you're looking for.</p>
                                
                                <h3 className="text-sm font-bold text-white mt-8 mb-4 uppercase tracking-wider">Key Features</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Custom plugins and tailored gameplay experience</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Active community and dedicated moderation team</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Regular events, tournaments, and giveaways</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> 99.9% guaranteed uptime with DDOS protection</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Cross-play support (Java & Bedrock depending on mode)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
