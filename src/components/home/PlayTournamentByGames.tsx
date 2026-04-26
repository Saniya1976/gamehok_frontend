'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const games = [
    { name: 'BGMI', image: '/BGMI.png' },
    { name: 'FREE FIRE', image: '/freefire.png' },
    { name: 'COD MOBILE', image: '/COD.png' },
    { name: 'BGMI', image: '/BGMI.png' },
    { name: 'FREE FIRE', image: '/freefire.png' },
    { name: 'COD MOBILE', image: '/COD.png' },
];

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
                    {games.map((game, index) => (
                        <div key={index} className="flex flex-col items-center flex-shrink-0 md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]">
                            <div className="relative w-full aspect-[5/4] rounded-lg overflow-hidden mb-2">
                                <Image
                                    src={game.image}
                                    alt={game.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-white font-semibold font-inter text-[11px] md:text-[14px] tracking-wide text-center uppercase">
                                {game.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
