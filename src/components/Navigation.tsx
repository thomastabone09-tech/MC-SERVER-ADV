import React, { useState } from 'react';
import { Menu, X, Search, Shield, Server, ArrowRight, Zap, Gem } from 'lucide-react';
import { ViewState } from '../types';

interface NavigationProps {
    currentView: ViewState;
    setView: (view: ViewState) => void;
}

export function Navigation({ currentView, setView }: NavigationProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems: { id: ViewState; label: string; icon?: React.ElementType }[] = [
        { id: 'home', label: 'Home' },
        { id: 'servers', label: 'Servers' },
        { id: 'premium', label: 'Premium', icon: Gem },
        { id: 'tools', label: 'Tools' },
    ];

    return (
        <nav className="sticky top-0 z-50 h-16 border-b border-white/10 bg-black/40 backdrop-blur-md flex items-center shrink-0">
            <div className="w-full px-8 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
                        <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                            <div className="w-4 h-4 border-2 border-white"></div>
                        </div>
                        <span className="text-xl font-black tracking-tighter uppercase italic text-white hidden sm:block">
                            MineList
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = currentView === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setView(item.id)}
                                    className={`text-sm font-medium transition-colors flex items-center gap-2 ${
                                        isActive
                                            ? 'text-purple-400'
                                            : 'text-zinc-400 hover:text-purple-400'
                                    }`}
                                >
                                    {Icon && <Icon className="w-4 h-4" />}
                                    {item.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Desktop Right Actions */}
                <div className="hidden md:flex items-center gap-6">
                    <button 
                        onClick={() => setView('dashboard')}
                        className="text-zinc-400 hover:text-purple-400 transition-colors"
                        title="Admin Dashboard"
                    >
                        <Shield className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setView('add-server')}
                        className="px-5 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-bold shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all flex items-center gap-2 text-white"
                    >
                        <Zap className="w-4 h-4" />
                        Add Your Server
                    </button>
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-white focus:outline-none transition-colors"
                    >
                        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-zinc-950 border-b border-white/5 absolute w-full top-16 left-0 origin-top animate-in fade-in slide-in-from-top-2 duration-200 shadow-xl">
                    <div className="px-4 py-4 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => { setView(item.id); setIsMobileMenuOpen(false); }}
                                className={`w-full flex items-center justify-start text-sm font-medium transition-colors ${
                                    currentView === item.id
                                        ? 'text-purple-400'
                                        : 'text-zinc-400 hover:text-purple-400'
                                }`}
                            >
                                {item.icon && <item.icon className="mr-2 w-4 h-4" />}
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => { setView('add-server'); setIsMobileMenuOpen(false); }}
                            className="w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-bold shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-colors mt-2"
                        >
                            <Zap className="mr-2 w-4 h-4" /> Add Server
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
