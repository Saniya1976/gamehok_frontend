// components/layout/MobileNav.tsx
import { Home, Trophy, Users, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export const MobileNav = () => {
    return (
        <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[360px] h-16 bg-[#1A1D1B]/90 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-around px-2 z-50 shadow-2xl">
            <Link href="#" className="flex flex-col items-center gap-1 text-[#01A74B]">
                <Home size={20} />
                <span className="text-[10px] font-medium">Home</span>
            </Link>
            <Link href="#" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
                <Trophy size={20} />
                <span className="text-[10px] font-medium">Tournaments</span>
            </Link>
            <Link href="#" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors">
                <Users size={20} />
                <span className="text-[10px] font-medium">Social</span>
            </Link>
            <Link href="#" className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors relative">
                <MessageCircle size={20} />
                <span className="text-[10px] font-medium">Chat</span>
                <div className="absolute top-0 right-0 -mr-1 bg-[#01A74B] text-black text-[8px] font-bold w-3 h-3 rounded-full flex items-center justify-center">
                    1
                </div>
            </Link>
        </nav>
    );
};
