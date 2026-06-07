import React from 'react';
import { Server, Heart, Twitter, Github, MessageCircle } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full bg-[#09090b] border-t border-white/5 py-12 mt-auto shrink-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-white/5">
                    <div className="md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
                                <div className="w-3 h-3 border-2 border-white"></div>
                            </div>
                            <span className="font-black italic uppercase tracking-tighter text-xl text-white">
                                MineList
                            </span>
                        </div>
                        <p className="text-zinc-500 text-xs mb-6 max-w-sm leading-relaxed">
                            The premium advertising and voting platform for the best Minecraft servers across the globe. Find your next adventure today.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-white hover:border-purple-500/50 transition-colors"><Twitter className="w-4 h-4" /></a>
                            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900/80 border border-white/10 text-zinc-400 hover:text-white hover:border-purple-500/50 transition-colors"><MessageCircle className="w-4 h-4" /></a>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-4">Navigation</h4>
                        <ul className="space-y-3 text-xs text-zinc-500 font-bold">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Server List</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Premium Listings</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Add Server</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-4">Categories</h4>
                        <ul className="space-y-3 text-xs text-zinc-500 font-bold">
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Survival Servers</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Skyblock Servers</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Prison Servers</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Minigames Servers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-400 mb-4">Legal</h4>
                        <ul className="space-y-3 text-xs text-zinc-500 font-bold">
                            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-medium text-zinc-600 uppercase tracking-wider">
                    <p>© {new Date().getFullYear()} MineList. Not affiliated with Mojang AB or Microsoft.</p>
                    <p className="flex items-center gap-1">
                        Crafted for the community.
                    </p>
                </div>
            </div>
        </footer>
    );
}
