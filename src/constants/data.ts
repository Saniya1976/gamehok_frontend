import { Tournament, Battle, Game } from '../types';

export const TOURNAMENTS: Tournament[] = [
    {
        id: 1,
        name: 'Crown Conquest',
        image: '/featured-tournament.jpg',
        status: 'Registration Open',
        slots: '670/800',
        prizePool: 1000,
        game: 'BGMI',
        mode: 'Solo',
        entry: 10,
        active: true,
    },
    {
        id: 2,
        name: 'Crown Conquest',
        image: '/featured-tournament.jpg',
        status: 'Registration Open',
        slots: '670/800',
        prizePool: 1000,
        game: 'BGMI',
        mode: 'Solo',
        entry: 10,
        active: false,
    },
];

export const BATTLES: Battle[] = [
    {
        id: 1,
        title: 'GS Daily Scrims',
        organization: 'By GS Esports',
        description: 'Play GS daily scrims and sharpen your skills for the bigger events',
        logo: '/GS.png',
        logoBg: 'bg-[#4B2E83]', // GS Purple
    },
    {
        id: 2,
        title: 'TMR Daily Scrims',
        organization: 'By TMR Esports',
        description: 'Play TMR daily scrims and sharpen your skills for the bigger events',
        logo: '/TMR.png',
        logoBg: 'bg-black', // TMR Black
    },
];

export const GAMES: Game[] = [
    { name: 'BGMI', image: '/BGMI.png' },
    { name: 'FREE FIRE', image: '/freefire.png' },
    { name: 'COD MOBILE', image: '/COD.png' },
    { name: 'BGMI', image: '/BGMI.png' },
    { name: 'FREE FIRE', image: '/freefire.png' },
    { name: 'COD MOBILE', image: '/COD.png' },
];
