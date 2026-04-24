'use client';

import { ArrowLeft, Share2, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function TournamentDetailPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen bg-[#001208] text-white pb-20">
            {/* Top Navigation */}
            <div className="flex items-center justify-between p-4 md:px-8 max-w-[1200px] mx-auto">
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                    <ArrowLeft size={20} />
                    <span className="text-[14px]">Back</span>
                </button>
                <button className="w-8 h-8 rounded-full bg-[#1A2E20] flex items-center justify-center text-[#22C55E] hover:bg-[#2A3E30] transition-colors">
                    <Share2 size={16} />
                </button>
            </div>

            {/* Main Content Container */}
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                {/* Banner Section */}
                <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-[12px] overflow-hidden border border-white/10">
                    <Image
                        src="/featured-tournament.jpg"
                        alt="Tournament Banner"
                        fill
                        className="object-cover"
                        style={{ objectPosition: 'center calc(50% + 40px)' }}
                    />

                    {/* Dark Overlay for better legibility if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Bottom Badges */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        {/* Registration Dates */}
                        <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                            <span className="text-[11px] md:text-[12px] font-medium text-white/90">
                                Registration open- 2nd Mar-10th Apr
                            </span>
                        </div>

                        {/* Slot Badge */}
                        <div className="bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-2">
                            <Users size={12} className="text-white/70" />
                            <span className="text-[11px] md:text-[12px] font-bold">670/800</span>
                        </div>
                    </div>
                </div>

                {/* Tournament Info Header */}
                <div className="mt-8 flex justify-between items-start">
                    <div className="space-y-4">
                        <div>
                            <h1 className="text-[24px] md:text-[32px] font-black uppercase tracking-tight leading-tight">
                                GS MONTHLY SHOWDOWN
                            </h1>
                            <p className="text-gray-400 font-bold text-[13px] md:text-[14px] mt-1">
                                BY GS ESPORTS
                            </p>
                        </div>

                        {/* Category Tags */}
                        <div className="flex gap-3">
                            <span className="bg-[#051C0F] text-[#22C55E] text-[12px] font-bold px-3 py-1.5 rounded-md border border-[#22C55E]/20">
                                BGMI
                            </span>
                            <span className="bg-[#051C0F] text-[#22C55E] text-[12px] font-bold px-3 py-1.5 rounded-md border border-[#22C55E]/20">
                                Entry-Free
                            </span>
                        </div>
                    </div>

                    {/* Organization Logo */}
                    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/5 bg-[#2E2463] shadow-2xl">
                        <Image
                            src="/GS.png"
                            alt="Org Logo"
                            fill
                            className="object-cover scale-110"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
