// components/layout/MobileNav.tsx
import { Home, Trophy, Users, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export const MobileNav = () => {
    return (
        <nav className="md:hidden fixed bottom-0 left-0 w-full h-[75px] bg-[#050B08] border-t border-white/5 flex items-center justify-around px-2 z-50">
            {/* Home Item */}
            <Link href="#" className="flex flex-col items-center gap-1 group relative h-full justify-center">
                {/* Active Bar */}
                <div className="absolute top-0 w-12 h-[4px] bg-[#01A74B] rounded-b-full z-20 shadow-[0_2px_10px_#A6EFA8]"></div>

                {/* Spotlight Beam */}
                <div
                    className="absolute top-0 w-16 h-full opacity-20 z-10"
                    style={{
                        background: 'linear-gradient(to bottom, #01A74B 0%, transparent 80%)',
                        clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)'
                    }}
                ></div>

                {/* Icon with Glow */}
                <div className="relative z-20">
                    <div className="absolute inset-0 bg-[#01A74B] blur-xl opacity-30 rounded-full scale-150"></div>
                    <Home size={22} className="text-[#01A74B] relative z-10 fill-[#01A74B]/20" />
                </div>
                <span className="text-[11px] font-bold text-[#FFFFFF] relative z-20">Home</span>
            </Link>

            {/* My Tournament */}
            <Link href="#" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors h-full justify-center">
                <Trophy size={22} />
                <span className="text-[11px] font-medium">My Tournament</span>
            </Link>

            {/* Social */}
            <Link href="#" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors h-full justify-center">
                <Users size={22} />
                <span className="text-[11px] font-medium">Social</span>
            </Link>

            {/* Chat */}
            <Link href="#" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors relative h-full justify-center">
                <div className="relative">
                    <MessageCircle size={22} />
                    {/* Notification Badge */}
                    <div className="absolute -top-1 -right-1 bg-[#01A74B] text-black text-[9px] font-black w-[15px] h-[15px] rounded-full flex items-center justify-center border border-black">
                        1
                    </div>
                </div>
                <span className="text-[11px] font-medium">Chat</span>
            </Link>
        </nav>
    );
};
