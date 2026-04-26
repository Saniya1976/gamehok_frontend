import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { Battle } from '@/types';

interface BattleCardProps {
    battle: Battle;
}

export const BattleCard = ({ battle }: BattleCardProps) => {
    const { title, organization, description, logo, logoBg } = battle;

    return (
        <div
            className="relative flex-shrink-0 w-[180px] md:w-[220px] h-[260px] rounded-lg flex flex-col items-center text-center shadow-lg border border-white/10 overflow-hidden"
            style={{
                background: 'linear-gradient(270deg, #4D5A53 0%, #182920 100%)',
            }}
        >
            {/* Logo Circle */}
            <div className={`w-14 h-14 rounded-full ${logoBg} flex items-center justify-center mt-6 mb-2 border-[2px] border-white/10 overflow-hidden relative`}>
                <Image
                    src={logo}
                    alt={title}
                    fill
                    className="object-cover p-1"
                />
            </div>

            {/* Text Content */}
            <h3 className="text-white font-bold font-inter text-[14px] leading-tight mb-0.5">{title}</h3>
            <p className="text-white font-semibold font-inter text-[12px] mb-2">{organization}</p>

            <div className="px-4 mb-auto flex items-center justify-center h-[48px]">
                <p
                    className="text-[#E5E7EB] font-inter text-[12px] leading-[16px] text-center align-middle"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                >
                    {description}
                </p>
            </div>

            {/* Action Link */}
            <button className="flex items-center gap-1 text-[#22C55E] font-semibold font-inter text-[16px] mb-4 hover:gap-2 transition-all">
                Explore scrims <ChevronRight size={14} />
            </button>
        </div>
    );
};
