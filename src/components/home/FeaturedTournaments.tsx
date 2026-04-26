'use client';

import { TOURNAMENTS } from '@/constants/data';
import { TournamentCard } from './FeaturedTournaments/TournamentCard';

export const FeaturedTournaments = () => {
    return (
        <section className="mt-4 w-full">
            {/* Section header */}
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-white font-semibold font-inter text-[18px] md:text-[25px]">Featured Tournaments</h2>
                <button className="text-[#22C55E] font-semibold font-inter text-[13px] md:text-[15px] tracking-wide hover:underline">
                    VIEW ALL
                </button>
            </div>

            {/* Cards row — horizontal scroll on mobile, flex wrap on desktop */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar md:flex-wrap md:overflow-visible">
                {TOURNAMENTS.map((tournament) => (
                    <TournamentCard
                        key={tournament.id}
                        tournament={tournament}
                    />
                ))}
            </div>
        </section>
    );
};
