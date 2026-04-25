"use client";
// components/layout/MobileNav.tsx
import { Home, Trophy, Users, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MobileNav = () => {
    const pathname = usePathname();
    if (pathname !== '/') return null;

    const navItems = [
        { label: 'Home', icon: Home, href: '/' },
        { label: 'My Tournament', icon: Trophy, href: '/tournament/1' },
        { label: 'Social', icon: Users, href: '#' },
        { label: 'Chat', icon: MessageCircle, href: '#', badge: 1 },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 w-full h-[75px] bg-[#050B08] border-t-2 border-white/20 flex items-center justify-around px-2 z-50">
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.label}
                        href={item.href}
                        className={`flex flex-col items-center gap-1 group relative h-full justify-center ${isActive ? 'text-white' : 'text-gray-400'
                            }`}
                    >
                        {isActive && (
                            <>
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
                            </>
                        )}

                        <div className="relative z-20">
                            {isActive && <div className="absolute inset-0 bg-[#01A74B] blur-xl opacity-30 rounded-full scale-150"></div>}
                            <item.icon
                                size={22}
                                className={`relative z-10 ${isActive ? 'text-[#01A74B] fill-[#01A74B]/20' : ''}`}
                            />
                            {item.badge && (
                                <div className="absolute -top-1 -right-1 bg-[#01A74B] text-black text-[9px] font-black w-[15px] h-[15px] rounded-full flex items-center justify-center border border-black z-30">
                                    {item.badge}
                                </div>
                            )}
                        </div>
                        <span className={`text-[11px] relative z-20 ${isActive ? 'font-bold' : 'font-medium'}`}>
                            {item.label}
                        </span>
                    </Link>
                )
            })}
        </nav>
    );
};
