'use client';

import React from 'react';
import { Home, Trophy, Users, MessageSquare, Power } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
    const pathname = usePathname();

    const navItems = [
        { id: 'home', label: 'Home', icon: Home, href: '/' },
        { id: 'tournament', label: 'My Tournament', icon: Trophy, href: '/tournament/1' },
        { id: 'social', label: 'Social', icon: Users, href: '#' },
        { id: 'chat', label: 'Chat', icon: MessageSquare, badge: 1, href: '#' },
    ];

    return (
        <aside className="hidden md:flex flex-col fixed left-0 top-0 w-64 h-screen bg-[#001208] text-gray-400 p-6 border-r-2 border-white/20 shrink-0 z-50">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-1 mb-10">
                {/* The SVG Logo from public/Group-1214.svg */}
                <img
                    src="/Group-1214.svg"
                    alt="Gamehok Logo"
                    width={31}
                    height={35}
                    className="shrink-0"
                    style={{ width: '31px', height: '35px' }}
                />

                {/* The remaining text */}
                <span className="text-2xl font-bold tracking-tight text-white uppercase leading-none">
                    AMEHOK
                </span>
            </Link>

            {/* Navigation Links */}
            <nav className="flex-1 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
                                ? 'bg-[#2D3633] text-white'
                                : 'hover:bg-white/5 hover:text-gray-200'
                                }`}
                        >
                            <div className="flex items-center gap-4">
                                <item.icon
                                    size={22}
                                    className={isActive ? 'text-[#22C55E]' : 'text-gray-400 group-hover:text-gray-200'}
                                />
                                <span className="font-medium">{item.label}</span>
                            </div>

                            {item.badge && (
                                <span className="flex items-center justify-center w-5 h-5 text-[10px] font-bold text-black bg-[#22C55E] rounded-full">
                                    {item.badge}
                                </span>
                            )}
                        </Link>
                    )
                })}
            </nav>

            <div className="mt-auto">
                <button className="flex items-center gap-4 px-4 py-3 w-full text-gray-400 hover:text-red-400 transition-colors group">
                    <Power size={22} className="text-red-500 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;