'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import { GAMES } from '@/constants/data';
import { GameCard } from './PlayTournamentByGames/GameCard';

export const PlayTournamentByGames = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = clientWidth;
            const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="mt-6 w-full relative">
            <h2 className="text-white font-inter font-semibold text-[18px] md:text-[25px] mb-4">Play Tournaments by Games</h2>

            <div className="relative group">
                {/* Navigation Buttons for Desktop */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-[-20px] top-[40%] -translate-y-1/2 z-20 w-10 h-10 bg-[#22C55E] rounded-full hidden md:flex items-center justify-center text-white shadow-lg hover:bg-[#16A34A] transition-colors"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-[-20px] top-[40%] -translate-y-1/2 z-20 w-10 h-10 bg-[#22C55E] rounded-full hidden md:flex items-center justify-center text-white shadow-lg hover:bg-[#16A34A] transition-colors"
                >
                    <ChevronRight size={24} />
                </button>

                {/* Mobile: Grid | Tablet/Desktop: Horizontal Carousel */}
                <div
                    ref={scrollRef}
                    className="grid grid-cols-3 gap-3 md:flex md:overflow-x-auto md:gap-6 no-scrollbar transition-all"
                >
                    {GAMES.map((game, index) => (
                        <GameCard key={`${game.name}-${index}`} game={game} />
                    ))}
                </div>
            </div>
        </section>
    );
};
