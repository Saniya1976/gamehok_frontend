// components/layout/RightSidebar.tsx
import { Trophy, Zap, Users, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const leaderboard = [
    { rank: 1, name: 'ProGamer99', coins: 12400, avatar: '/image.png' },
    { rank: 2, name: 'StarPlayer', coins: 9800, avatar: '/image.png' },
    { rank: 3, name: 'NightHawk', coins: 7650, avatar: '/image.png' },
    { rank: 4, name: 'ShadowWolf', coins: 6200, avatar: '/image.png' },
    { rank: 5, name: 'IronFist', coins: 5100, avatar: '/image.png' },
];

const upcoming = [
    { name: 'BGMI Pro League', time: 'Today, 8:00 PM', prize: '₹5,000', color: '#FFC300' },
    { name: 'Free Fire Cup', time: 'Tomorrow, 6 PM', prize: '₹2,500', color: '#00A75D' },
    { name: 'COD Warzone', time: 'Sun, 9:00 PM', prize: '₹10,000', color: '#B287FF' },
];

const rankMedal = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
};

export const RightSidebar = () => {
    return (
        <aside
            className="hidden lg:flex flex-col h-screen sticky top-0 overflow-y-auto no-scrollbar bg-[#001208] border-l-2 border-white/20 py-6 px-5 gap-8"
            style={{ width: '422px', minWidth: '422px' }}
        >

            {/* ── Leaderboard ── */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Trophy size={16} className="text-[#FFC300]" />
                        <h3 className="text-white font-semibold text-[15px]">Top Players</h3>
                    </div>
                    <button className="flex items-center gap-1 text-[#00A75D] text-[12px] font-medium hover:underline">
                        See all <ChevronRight size={13} />
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    {leaderboard.map((player) => (
                        <div
                            key={player.rank}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                        >
                            <span className="w-7 text-center text-[13px] font-bold text-white/60 shrink-0">
                                {rankMedal(player.rank)}
                            </span>
                            <div className="w-8 h-8 rounded-full overflow-hidden bg-white/10 shrink-0">
                                <Image src={player.avatar} alt={player.name} width={32} height={32} className="object-cover" />
                            </div>
                            <span className="flex-1 text-white text-[13px] font-medium truncate">{player.name}</span>
                            <div className="flex items-center gap-1 text-[12px] font-semibold text-[#00A75D]">
                                🪙 {player.coins.toLocaleString()}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Divider */}
            <div className="border-t-2 border-white/20" />

            {/* ── Upcoming Tournaments ── */}
            <section>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Zap size={16} className="text-[#B287FF]" />
                        <h3 className="text-white font-semibold text-[15px]">Upcoming Tournaments</h3>
                    </div>
                    <button className="flex items-center gap-1 text-[#00A75D] text-[12px] font-medium hover:underline">
                        See all <ChevronRight size={13} />
                    </button>
                </div>

                <div className="flex flex-col gap-2">
                    {upcoming.map((t) => (
                        <div
                            key={t.name}
                            className="flex items-center justify-between px-3 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                        >
                            <div className="flex flex-col gap-0.5">
                                <span className="text-white text-[13px] font-semibold">{t.name}</span>
                                <span className="text-white/50 text-[11px]">{t.time}</span>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className="text-[12px] font-bold" style={{ color: t.color }}>{t.prize}</span>
                                <button
                                    className="text-[10px] font-semibold px-3 py-0.5 rounded-full border"
                                    style={{ borderColor: t.color, color: t.color }}
                                >
                                    Join
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Divider */}
            <div className="border-t border-white/5" />

            {/* ── Social Activity ── */}
            <section>
                <div className="flex items-center gap-2 mb-4">
                    <Users size={16} className="text-[#2E9EEE]" />
                    <h3 className="text-white font-semibold text-[15px]">Friends Online</h3>
                    <span className="ml-auto bg-[#00A75D]/20 text-[#00A75D] text-[11px] font-bold px-2 py-0.5 rounded-full">
                        3 online
                    </span>
                </div>

                <div className="flex flex-col gap-2">
                    {['StarPlayer', 'ProGamer99', 'NightHawk'].map((name) => (
                        <div key={name} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.03]">
                            <div className="relative shrink-0">
                                <div className="w-8 h-8 rounded-full overflow-hidden bg-white/10">
                                    <Image src="/image.png" alt={name} width={32} height={32} className="object-cover" />
                                </div>
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#00A75D] rounded-full border-2 border-[#001208]" />
                            </div>
                            <span className="flex-1 text-white text-[13px] font-medium">{name}</span>
                            <button className="text-[11px] text-white/50 hover:text-white transition-colors">
                                Challenge
                            </button>
                        </div>
                    ))}
                </div>
            </section>

        </aside>
    );
};
