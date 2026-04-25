'use client';
// components/layout/Navbar.tsx
import { Bell } from 'lucide-react';
import Image from 'next/image';

export const Navbar = () => {
    return (
        <nav className="h-[62px] md:h-[74px] lg:h-[76px] fixed top-0 left-0 right-0 bg-[#001208]/95 backdrop-blur-md z-40 flex items-center justify-between px-4 md:px-8 border-b-0 md:border-b-2 border-white/20 transition-all duration-300">

            {/* Mobile View Toggle/Logo */}
            <div className="md:hidden flex items-center pl-1 pr-4">
                {/* Mobile Profile Section */}
                <div className="relative flex items-center group">
                    <div className="w-9 h-9 rounded-full bg-[#E5E7EB] overflow-hidden flex-shrink-0 border border-white/10 relative">
                        <Image src="/image.png" alt="User Avatar" width={40} height={40} className="object-cover w-full h-full scale-110" />
                    </div>
                    {/* Menu Badge */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#00A75D] rounded-full border-2 border-black flex flex-col items-center justify-center gap-[2px] shadow-lg">
                        <div className="w-3 h-[1.5px] bg-white"></div>
                        <div className="w-3 h-[1.5px] bg-white"></div>
                        <div className="w-3 h-[1.5px] bg-white"></div>
                    </div>
                </div>
            </div>

            {/* Desktop View Right Items */}
            <div className="hidden md:flex flex-1 items-center justify-end gap-6 h-full pr-6">
                {/* Tickets & Coins Pill */}
                <div className="flex items-center overflow-hidden rounded-full h-10 border-2 border-white/20">
                    <div className="bg-[#1A8948] flex items-center gap-2 px-4 h-full">
                        <span className="text-[14px]">🎟️</span>
                        <span className="text-white font-bold text-[13px]">245</span>
                    </div>
                    <div className="w-[1.5px] h-full bg-white/20"></div>
                    <div className="bg-[#22C55E] flex items-center gap-2 px-4 h-full">
                        <span className="text-[14px]">🪙</span>
                        <span className="text-white font-bold text-[13px]">2456</span>
                    </div>
                </div>

                {/* Notification Bell */}
                <button className="text-white hover:text-green-500 transition-colors relative">
                    <Bell size={22} strokeWidth={2} />
                    <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-[#001208]"></div>
                </button>

                {/* Divider */}
                <div className="w-[2px] h-8 bg-white/20"></div>

                {/* User Profile */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#E5E7EB] overflow-hidden flex-shrink-0 border border-white/10 relative">
                        <Image src="/image.png" alt="User Avatar" width={40} height={40} className="object-cover w-full h-full scale-110" />
                    </div>
                    <span className="text-white font-semibold font-inter text-[14px]">Saniya</span>
                </div>
            </div>

            {/* Mobile View Right Items (Legacy) */}
            <div className="md:hidden flex items-center gap-3">
                <div className="flex items-center gap-1.5 bg-[#00A75D] rounded-full px-3 py-1">
                    <span className="text-sm">🪙</span>
                    <span className="text-white font-semibold text-sm">2456</span>
                </div>
                <button className="text-white/80 hover:text-white transition-colors">
                    <Bell size={20} strokeWidth={1.5} />
                </button>
            </div>
        </nav>
    );
};