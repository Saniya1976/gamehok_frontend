import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const battles = [
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
        logo: '/TMR.png', // Placeholder
        logoBg: 'bg-black', // TMR Black
    },
];

export const CompeteInBattles = () => {
    return (
        <section className="mt-8 w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-bold text-[18px]">Compete in Battles</h2>
                <button className="text-[#22C55E] font-bold text-[14px] hover:underline">
                    View All
                </button>
            </div>

            {/* Cards Row */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                {battles.map((battle) => (
                    <div
                        key={battle.id}
                        className="relative flex-shrink-0 w-[182px] h-[248px] rounded-[8px] flex flex-col items-center text-center shadow-lg border border-white/10 overflow-hidden"
                        style={{
                            background: 'linear-gradient(270deg, #4D5A53 0%, #182920 100%)',
                        }}
                    >
                        {/* Logo Circle */}
                        <div className={`w-14 h-14 rounded-full ${battle.logoBg} flex items-center justify-center mt-6 mb-2 border-[2px] border-white/10 overflow-hidden relative`}>
                            <Image
                                src={battle.logo}
                                alt={battle.title}
                                fill
                                className="object-cover p-1"
                            />
                        </div>

                        {/* Text Content */}
                        <h3 className="text-white font-bold text-[14px] leading-tight mb-0.5">{battle.title}</h3>
                        <p className="text-gray-300 font-bold text-[10px] mb-2">{battle.organization}</p>

                        <div className="px-4 mb-auto flex items-center justify-center h-[48px]">
                            <p
                                className="text-[#E5E7EB] text-[12px] leading-[16px] text-center align-middle"
                                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
                            >
                                {battle.description}
                            </p>
                        </div>

                        {/* Action Link */}
                        <button className="flex items-center gap-1 text-[#22C55E] font-bold text-[12px] mb-4 hover:gap-2 transition-all">
                            Explore scrims <ChevronRight size={14} />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};
