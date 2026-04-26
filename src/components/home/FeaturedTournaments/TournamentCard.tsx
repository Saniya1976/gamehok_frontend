import Image from 'next/image';
import { Trophy, Users } from 'lucide-react';
import { Tournament } from '@/types';

interface TournamentCardProps {
    tournament: Tournament;
}

export const TournamentCard = ({ tournament }: TournamentCardProps) => {
    const { name, image, status, slots, prizePool, game, mode, entry } = tournament;

    return (
        <div className="relative rounded-lg overflow-hidden bg-[#0A1610] flex-shrink-0 w-[250px] md:w-[48%] lg:w-[47%] h-[262px] transition-all border-[1px] border-white/20">
            {/* Banner Image */}
            <div className="relative w-full h-[152px]">
                <Image
                    src={image}
                    alt={name}
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
                <div className="absolute top-2 left-2.5 right-2.5 flex items-center justify-between">
                    {/* Registration Status */}
                    <span className="bg-black/70 backdrop-blur-sm text-white/90 text-[10px] font-bold px-2 py-1 rounded-xl">
                        {status}
                    </span>
                    {/* Slots */}
                    <span className="bg-black/70 backdrop-blur-sm text-white/90 text-[10px] font-bold px-2 py-1 rounded-xl flex items-center gap-1">
                        <Users size={11} className="text-white/70" />
                        {slots}
                    </span>
                </div>
            </div>

            {/* Prize Pool Row */}
            <div className="relative flex items-center justify-between px-3 h-8" style={{ background: '#121726' }}>
                <div className="flex items-center gap-1.5">
                    <Trophy size={14} className="text-[#D4A017]" />
                    <span className="text-white/70 text-[12px] font-medium">
                        Prize Pool-{' '}
                        <span className="font-bold text-white">{prizePool}</span>{' '}
                        <span className="text-[14px]">🪙</span>
                    </span>
                </div>

                {/* GS Badge - Overlapping and Circular */}
                <div className="absolute -bottom-4 right-3 w-12 h-12 rounded-full border-[1px] border-[#121726] bg-[#2E2463] shadow-lg flex items-center justify-center z-20 overflow-hidden">
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
                <h4 className="text-white font-extrabold text-[15px] mb-2">{name}</h4>

                {/* Tags */}
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-[#1A2E20] text-white/90 text-[12px] font-bold px-2.5 py-0.5 rounded-md">
                        {game}
                    </span>
                    <span className="bg-[#1A2E20] text-white/90 text-[12px] font-bold px-2.5 py-0.5 rounded-md">
                        {mode}
                    </span>
                    <span className="bg-[#1A2E20] text-white/90 text-[12px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1">
                        Entry-{entry} <span className="text-yellow-400">🪙</span>
                    </span>
                </div>
            </div>
        </div>
    );
};
