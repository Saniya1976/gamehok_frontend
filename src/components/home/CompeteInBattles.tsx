'use client';

import { BATTLES } from '@/constants/data';
import { BattleCard } from './CompeteInBattles/BattleCard';

export const CompeteInBattles = () => {
    return (
        <section className="mt-5 w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-semibold font-inter text-[18px] md:text-[25px]">Compete in Battles</h2>
                <button className="text-[#22C55E] font-semibold font-inter text-[13px] md:text-[15px] hover:underline">
                    VIEW ALL
                </button>
            </div>

            {/* Cards Row */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                {BATTLES.map((battle) => (
                    <BattleCard key={battle.id} battle={battle} />
                ))}
            </div>
        </section>
    );
};
