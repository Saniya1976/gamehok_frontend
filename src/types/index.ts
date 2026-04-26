export interface Tournament {
    id: number;
    name: string;
    image: string;
    status: string;
    slots: string;
    prizePool: number;
    game: string;
    mode: string;
    entry: number;
    active: boolean;
}

export interface Battle {
    id: number;
    title: string;
    organization: string;
    description: string;
    logo: string;
    logoBg: string;
}

export interface Game {
    name: string;
    image: string;
}

export interface NavItem {
    label: string;
    href: string;
    icon?: any;
    badge?: number;
}
