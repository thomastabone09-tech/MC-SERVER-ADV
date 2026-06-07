import React, { useState } from 'react';
import { Zap, UploadCloud, Info } from 'lucide-react';
import { motion } from 'motion/react';

export function AddServerView() {
    const [step, setStep] = useState(1);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full mb-20"
        >
            <div className="text-center mb-10">
                <h1 className="text-4xl font-black italic uppercase tracking-tighter text-white mb-2">Add Your Server</h1>
                <p className="text-sm text-zinc-400">Join thousands of servers on MineList and start growing your community today.</p>
            </div>

            {/* Stepper */}
            <div className="flex items-center justify-center mb-12">
                <div className={`flex items-center justify-center w-8 h-8 rounded font-bold transition-all ${step >= 1 ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] border-none' : 'bg-zinc-900/50 text-zinc-500 border border-white/10'}`}>1</div>
                <div className={`w-16 h-0.5 mx-2 rounded transition-colors ${step >= 2 ? 'bg-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.3)]' : 'bg-white/10'}`}></div>
                <div className={`flex items-center justify-center w-8 h-8 rounded font-bold transition-all ${step >= 2 ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] border-none' : 'bg-zinc-900/50 text-zinc-500 border border-white/10'}`}>2</div>
                <div className={`w-16 h-0.5 mx-2 rounded transition-colors ${step >= 3 ? 'bg-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.3)]' : 'bg-white/10'}`}></div>
                <div className={`flex items-center justify-center w-8 h-8 rounded font-bold transition-all ${step >= 3 ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] border-none' : 'bg-zinc-900/50 text-zinc-500 border border-white/10'}`}>3</div>
            </div>

            <div className="bg-zinc-950 border border-white/5 rounded-xl p-6 md:p-8">
                {step === 1 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 text-purple-400 mb-2 border-b border-white/5 pb-4">
                            <Info className="w-4 h-4" />
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-300">Basic Information</span>
                        </div>
                        
                        <div>
                            <label className="block text-[10px] uppercase tracking-wider font-bold text-zinc-400 mb-2">Server Name *</label>
                            <input type="text" className="w-full bg-zinc-900/50 border border-white/10 rounded-lg py-3 px-4 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 transition-colors shadow-inner" placeholder="e.g. Hypixel Network" />
                        </div>
                        
                        <div>
                            <label className="block text-[10px] uppercase tracking-wider font-bold text-zinc-400 mb-2">Server IP / Address *</label>
                            <input type="text" className="w-full bg-zinc-900/50 border border-white/10 rounded-lg py-3 px-4 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 transition-colors shadow-inner" placeholder="e.g. mc.hypixel.net" />
                        </div>

                        <div>
                            <label className="block text-[10px] uppercase tracking-wider font-bold text-zinc-400 mb-2">Short Description *</label>
                            <input type="text" className="w-full bg-zinc-900/50 border border-white/10 rounded-lg py-3 px-4 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 transition-colors shadow-inner" placeholder="A catchy tagline for your server (max 80 chars)" />
                        </div>

                        <div>
                            <label className="block text-[10px] uppercase tracking-wider font-bold text-zinc-400 mb-2">Server Description *</label>
                            <textarea rows={5} className="w-full bg-zinc-900/50 border border-white/10 rounded-lg py-3 px-4 text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-purple-500/50 transition-colors resize-none shadow-inner" placeholder="Detailed description of your server's features, rules, and community..."></textarea>
                        </div>

                        <div className="flex justify-end mt-4">
                            <button onClick={() => setStep(2)} className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                                Next Step <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 text-purple-400 mb-2 border-b border-white/5 pb-4">
                            <UploadCloud className="w-4 h-4" />
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-zinc-300">Media & Assets</span>
                        </div>

                        <div>
                            <label className="block text-[10px] uppercase tracking-wider font-bold text-zinc-400 mb-2">Server Icon (64x64) *</label>
                            <div className="w-full border-2 border-dashed border-white/10 rounded-lg p-8 hover:border-purple-500/50 transition-colors bg-zinc-900/50 flex flex-col items-center justify-center cursor-pointer">
                                <UploadCloud className="w-8 h-8 text-zinc-600 mb-3" />
                                <span className="text-zinc-400 text-xs font-bold mb-1">Click or drag image to upload</span>
                                <span className="text-zinc-600 text-[10px] uppercase tracking-wider">PNG, JPG up to 2MB</span>
                            </div>
                        </div>

                        <div>
                            <label className="block text-[10px] uppercase tracking-wider font-bold text-zinc-400 mb-2">Server Banner (optional)</label>
                            <div className="w-full border-2 border-dashed border-white/10 rounded-lg p-10 hover:border-purple-500/50 transition-colors bg-zinc-900/50 flex flex-col items-center justify-center cursor-pointer">
                                <UploadCloud className="w-8 h-8 text-zinc-600 mb-3" />
                                <span className="text-zinc-400 text-xs font-bold mb-1">Click or drag banner to upload</span>
                                <span className="text-zinc-600 text-[10px] uppercase tracking-wider">468x60 recommended size</span>
                            </div>
                        </div>

                        <div className="flex justify-between mt-4">
                            <button onClick={() => setStep(1)} className="px-6 py-3 border border-white/10 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs font-bold text-white transition-colors">
                                Back
                            </button>
                            <button onClick={() => setStep(3)} className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                                Next Step <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6 text-center py-8">
                        <div className="w-16 h-16 bg-emerald-500/10 rounded flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                            <Zap className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h2 className="text-2xl font-black italic uppercase tracking-tighter text-white">Ready to Publish!</h2>
                        <p className="text-xs text-zinc-400 max-w-md mx-auto">By listing your server, you agree to our terms of service and confirm that your server complies with the Minecraft EULA.</p>
                        
                        <div className="flex justify-center gap-4 mt-8">
                            <button onClick={() => setStep(2)} className="px-6 py-3 border border-white/10 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs font-bold text-white transition-colors">
                                Go Back
                            </button>
                            <button className="px-8 py-3 bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white text-xs font-bold rounded-lg shadow-[0_4px_10px_rgba(16,185,129,0.2)] transition-all uppercase tracking-wider">
                                Publish Server
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
}
