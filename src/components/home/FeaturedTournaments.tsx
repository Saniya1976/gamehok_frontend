// components/home/FeaturedTournaments.tsx
import Image from 'next/image';
import { Trophy, Users } from 'lucide-react';

const tournaments = [
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

const TournamentCard = ({ t, active }: { t: typeof tournaments[0]; active: boolean }) => (
    <div
        className={`relative rounded-2xl overflow-hidden bg-[#0A1610] flex-shrink-0 w-[310px] md:w-[48%] lg:w-[47%] transition-all ${active ? 'border-2 border-[#22C55E]' : 'border border-white/10'
            }`}
    >
        {/* Banner Image */}
        <div className="relative w-full h-[140px]">
            <Image
                src={t.image}
                alt={t.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 260px, 50vw"
                style={{
                    objectPosition: 'center calc(50% + 25px)'
                }}
            />

            {/* Overlay gradient at bottom of image */}
            <div className="absolute inset-0" />

            {/* Top badges row */}
            <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between">
                {/* Registration Status */}
                <span className="bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg">
                    {t.status}
                </span>
                {/* Slots */}
                <span className="bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1">
                    <Users size={11} />
                    {t.slots}
                </span>
            </div>


        </div>

        {/* Prize Pool Row */}
        <div className="relative flex items-center justify-between px-3 h-8" style={{ background: '#121726' }}>
            <div className="flex items-center gap-1.5">
                <Trophy size={14} className="text-[#D4A017]" />
                <span className="text-white text-[12px] font-medium">
                    Prize Pool-{' '}
                    <span className="font-bold">{t.prizePool}</span>{' '}
                    <span className="text-[14px]">🪙</span>
                </span>
            </div>

            {/* GS Badge - Overlapping and Circular */}
            <div className="absolute -bottom-4 right-3 w-12 h-12 rounded-full border-2 border-[#121726] bg-[#2E2463] shadow-lg flex items-center justify-center z-20 overflow-hidden">
                <Image
                    src="/GS.png"
                    alt="GS Badge"
                    fill
                    className="object-cover scale-110"
                />
            </div>
        </div>

        {/* Card Body */}
        <div className="px-3 pt-2 pb-3">
            <h4 className="text-white font-bold text-[15px] mb-2">{t.name}</h4>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap">
                <span className="bg-[#1A2E20] text-[#FFFFFF] text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                    {t.game}
                </span>
                <span className="bg-[#1A2E20] text-[#FFFFFF] text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                    {t.mode}
                </span>
                <span className="bg-[#1A2E20] text-[#FFFFFF] text-[11px] font-semibold px-2.5 py-0.5 rounded-md flex items-center gap-1">
                    Entry-{t.entry} <span className="text-yellow-400">🪙</span>
                </span>
            </div>
        </div>
    </div>
);

export const FeaturedTournaments = () => {
    return (
        <section className="mt-8 w-full">
            {/* Section header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-bold text-[20px]">Featured Tournaments</h2>
                <button className="text-[#22C55E] font-bold text-[13px] tracking-wide hover:underline">
                    VIEW ALL
                </button>
            </div>

            {/* Cards row — horizontal scroll on mobile, flex wrap on desktop */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar md:flex-wrap md:overflow-visible">
                {tournaments.map((t) => (
                    <TournamentCard key={t.id} t={t} active={t.active} />
                ))}
            </div>
        </section>
    );
};
