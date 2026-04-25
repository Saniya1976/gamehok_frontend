import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const highlights = [
    { id: 1, title: 'Call of Duty', thumbnail: '/CallofDuty.png' },
    { id: 2, title: 'BGMI Tournaments', thumbnail: '/battleground.png' },
    { id: 3, title: 'Call of Duty', thumbnail: '/CallofDuty.png' },
    { id: 4, title: 'BGMI Tournaments', thumbnail: '/battleground.png' },
    { id: 5, title: 'Call of Duty', thumbnail: '/CallofDuty.png' },
    { id: 6, title: 'BGMI Tournaments', thumbnail: '/battleground.png' },
];

export const RightSidebar = () => {
    return (
        <aside className="hidden lg:flex flex-col fixed right-0 top-[76px] h-[calc(100vh-76px)] overflow-y-auto no-scrollbar bg-[#001208] border-l-2 border-white/20 py-6 px-6 gap-6 z-30" style={{ width: '400px', minWidth: '400px' }}>
            <div className="flex items-center justify-between mb-2">
                <h2 className="text-white text-[18px] font-semibold">Game Highlights</h2>
                <Link href="#" className="text-[#22C55E] text-[15px] font-medium hover:underline tracking-tight">View All</Link>
            </div>

            <div className="space-y-6 pb-24">
                {highlights.map((h, idx) => (
                    <div key={idx} className="group cursor-pointer">
                        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-2 shadow-2xl">
                            <Image
                                src={h.thumbnail}
                                alt={h.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* Play Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors duration-300">
                                <div className="w-10 h-10 rounded-full border-[2px] border-white/90 flex items-center justify-center bg-[#3C4B43] backdrop-blur-[2px] transform transition-transform group-hover:scale-110">
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="white"
                                        className="ml-1"
                                    >
                                        <path d="M4 2L22 12L4 22V2Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <p className="text-white text-[13px] font-medium ml-1 tracking-wide">{h.title}</p>

                        {/* Divider lining - Edge to Edge */}
                        <div className="h-[1.5px] w-[calc(100%+3rem)] -mx-6 bg-[#1C1C1C] mt-6" />
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default RightSidebar;
