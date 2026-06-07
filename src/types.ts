export interface Server {
    id: string;
    name: string;
    ip: string;
    description: string;
    shortDescription: string;
    icon: string;
    banner: string;
    tags: string[];
    version: string;
    players: {
        online: number;
        max: number;
    };
    votes: number;
    uptime: number;
    featured: boolean;
    region: 'NA' | 'EU' | 'AS' | 'OCE';
    gamemodes: string[];
    isPremium: boolean;
    createdAt: string;
}

export type ViewState = 'home' | 'servers' | 'server-detail' | 'add-server' | 'tools' | 'premium' | 'dashboard';

export interface Category {
    id: string;
    name: string;
    icon: any; // Lucide icon component
    serverCount: number;
}
