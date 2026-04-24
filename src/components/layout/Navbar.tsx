// components/layout/Navbar.tsx
import { Bell } from 'lucide-react';
import Image from 'next/image';

export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between w-full h-14 mt-6">
            {/* Profile Section */}
            <div className="relative flex items-center">
                {/* Avatar */}
                <div className="w-9 h-9 rounded-full bg-white overflow-hidden flex-shrink-0">
                    <Image
                        src="/image.png"
                        alt="User Avatar"
                        width={36}
                        height={36}
                        className="object-cover w-full h-full"
                    />
                </div>
                {/* Menu Icon Badge */}
                <div
                    className="absolute bottom-0 right-0 w-3 h-3 bg-[#00A75D] rounded-full border-2 border-[#001208] flex items-center justify-center"
                >
                    <div className="flex flex-col gap-[1.5px]">
                        <div className="w-[4px] h-[0.5px] bg-white"></div>
                        <div className="w-[4px] h-[0.5px] bg-white"></div>
                        <div className="w-[4px] h-[0.5px] bg-white"></div>
                    </div>
                </div>
            </div>

            {/* Right side: Coins and Notifications */}
            <div className="flex items-center gap-3">
                {/* Coin Pill */}
                <div className="flex items-center gap-1.5 bg-[#00A75D] rounded-full px-3 py-1">
                    <span className="text-sm">🪙</span>
                    <span className="text-white font-semibold text-sm">2456</span>
                </div>

                {/* Notification Bell */}
                <button className="text-white/80 hover:text-white transition-colors">
                    <Bell size={20} strokeWidth={1.5} />
                </button>
            </div>
        </nav>
    );
};