'use client';

import React, { useState } from 'react';
import { ArrowLeft, Share2, Users, Trophy, Clock, Calendar, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { Navbar } from '@/components/layout/Navbar';

const tabs = ['Overview', 'Participants', 'Lobbies', 'Leaderboard', 'Rules'];

export default function TournamentDetailPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('Overview');

    return (
        <div className="min-h-screen bg-[#001208] text-white pt-0 md:pt-[74px] lg:pt-[76px] pb-0">
            {/* Main Navbar - Desktop Only */}
            <div className="hidden md:block">
                <Navbar />
            </div>

            {/* Back & Share Navigation - Desktop Only */}
            <div className="hidden md:flex items-center justify-between p-4 md:px-8 max-w-[1200px] mx-auto">
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
            <div className="max-w-[1200px] mx-auto px-0 md:px-8">
                {/* Banner Section */}
                <div className="relative w-full aspect-[17/9] md:aspect-[4/1] rounded-none md:rounded-[10px] overflow-hidden border-0 md:border-[1px] border-white shadow-2xl bg-[#050C0A]">
                    <Image
                        src="/featured-tournament.jpg"
                        alt="Tournament Banner"
                        fill
                        className="object-cover"
                        style={{ objectPosition: 'center 30%' }}
                    />

                    {/* Top Top edge cut - Mobile Only Removed for full-bleed look */}
                    {/* <div className="absolute top-0 left-0 right-0 h-[20px] bg-[#001208] md:hidden z-10" /> */}

                    {/* Bottom Greyish Blur Overlay - Mobile Only */}
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-400/20 via-gray-400/5 to-transparent backdrop-blur-[2px] z-10 md:hidden" />

                    {/* Mobile Navigation Overlays */}
                    <div className="absolute top-6 left-4 right-4 flex justify-between items-center md:hidden z-20">
                        <button
                            onClick={() => router.back()}
                            className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10"
                        >
                            <ArrowLeft size={16} />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                            <Share2 size={16} />
                        </button>
                    </div>

                    {/* Dark Overlay for better legibility if needed */}
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" /> */}

                    {/* Bottom Badges */}
                    <div className="absolute bottom-4 left-2 right-2 flex items-center justify-between z-20">
                        {/* Registration Dates */}
                        <div className="bg-[#001208CC] backdrop-blur-md px-1 py-1 rounded-xl flex items-center gap-2">
                            <span className="text-[11px] md:text-[12px] font-medium text-white/90">
                                Registration Closes in <span className="font-bold">2d 15h 10m</span>
                            </span>
                        </div>

                        {/* Slot Badge */}
                        <div className="bg-[#001208CC] backdrop-blur-md px-1 py-1 rounded-xl flex items-center gap-2">
                            <Users size={12} className="text-white/70" />
                            <span className="text-[11px] md:text-[12px] font-bold">670/800</span>
                        </div>
                    </div>
                </div>

                <div className="px-4 md:px-0 pb-12">
                    {/* Tournament Info Header */}
                    <div className="mt-8 flex justify-between items-start">
                        <div className="space-y-4">
                            <div>
                                <h1 className="text-[22px] md:text-[30px] font-black uppercase tracking-tight leading-tight">
                                    GS MONTHLY SHOWDOWN
                                </h1>
                                <p className="text-white font-bold text-[13px] md:text-[14px] mt-1">
                                    BY GS ESPORTS
                                </p>
                            </div>

                            {/* Category Tags */}
                            <div className="flex gap-2">
                                <span className="bg-[#051C0F] text-[#ffffff] text-[10px] md:text-[11px] font-bold px-2 py-1 rounded-md">
                                    BGMI
                                </span>
                                <span className="bg-[#051C0F] text-[#ffffff] text-[10px] md:text-[11px] font-bold px-2 py-1 rounded-md">
                                    Entry-Free
                                </span>
                            </div>
                        </div>

                        {/* Organization Logo */}
                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[1px] border-white/20 bg-[#2E2463] shadow-2xl">
                            <Image
                                src="/GS.png"
                                alt="Org Logo"
                                fill
                                className="object-cover scale-110"
                            />
                        </div>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="mt-6 md:mt-8">
                        <div className="flex border-b-2 border-white/20">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative px-4 md:px-8 py-3 md:py-4 text-[13px] md:text-[16px] font-bold transition-all duration-200 ${activeTab === tab
                                        ? 'bg-[#052210] text-[#22C55E] rounded-t-xl'
                                        : 'text-gray-500 hover:text-white'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#22C55E]" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="mt-8">
                            {activeTab === 'Overview' && (
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
                                    {/* Left Column: Details, Schedule, How to Join */}
                                    <div className="lg:col-span-2 space-y-8 lg:pr-16 pb-12 lg:pb-24">
                                        {/* Details Section */}
                                        <div>
                                            <h3 className="text-white text-[18px] font-bold mb-4">Details</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                                <div className="flex items-start gap-4">
                                                    <div className="relative w-8 h-8">
                                                        <Image src="/teamsize.png" alt="Team Size" fill className="object-contain" />
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-400 text-[11px] uppercase font-bold tracking-wider mb-0.5">Team Size</p>
                                                        <p className="text-white font-bold text-[15px]">Solo</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-4">
                                                    <div className="relative w-8 h-8">
                                                        <Image src="/tournamentsstart.png" alt="Starts" fill className="object-contain" />
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-400 text-[11px] uppercase font-bold tracking-wider mb-0.5">Tournament Starts</p>
                                                        <p className="text-white font-bold text-[15px]">Tue 24th Jan 2024, 01:00 PM</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-4">
                                                    <div className="relative w-8 h-8">
                                                        <Image src="/format.png" alt="Format" fill className="object-contain" />
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-400 text-[11px] uppercase font-bold tracking-wider mb-0.5">Format</p>
                                                        <p className="text-white font-bold text-[15px]">Single Elimination</p>
                                                    </div>
                                                </div>
                                                <div className="flex items-start gap-4">
                                                    <div className="relative w-8 h-8">
                                                        <Image src="/check-in.png" alt="Check In" fill className="object-contain" />
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-400 text-[11px] uppercase font-bold tracking-wider mb-0.5">Check-In</p>
                                                        <p className="text-white font-bold text-[15px]">10 mins before the match starts</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mobile Only: Prize Pool (No Heading) */}
                                        <div className="lg:hidden">
                                            <div className="bg-[#05140C] rounded-xl border border-white/10 overflow-hidden">
                                                <div className="p-2 bg-white/[0.03] flex justify-between items-center border-b border-white/10">
                                                    <span className="text-white text-[16px] font-inter font-semibold">Total Tournament Prize</span>
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="text-white text-[16px] font-black">2000</span>
                                                        <span className="text-[16px]">🪙</span>
                                                    </div>
                                                </div>
                                                <div className="p-2 divide-y divide-white/5">
                                                    <div className="p-3 flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="relative w-6 h-6">
                                                                <Image src="/prize.png" alt="prize" fill className="object-contain" />
                                                            </div>
                                                            <span className="text-white/80 text-[13px] font-bold">1st Prize</span>
                                                        </div>
                                                        <div className="flex items-center gap-1.5">
                                                            <span className="text-white font-bold text-[14px]">1000</span>
                                                            <span className="text-[14px]">🪙</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="relative w-6 h-6">
                                                                <Image src="/prize.png" alt="prize" fill className="object-contain" />
                                                            </div>
                                                            <span className="text-white/80 text-[13px] font-bold">2nd Prize</span>
                                                        </div>
                                                        <div className="flex items-center gap-1.5">
                                                            <span className="text-white font-bold text-[14px]">500</span>
                                                            <span className="text-[14px]">🪙</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="relative w-6 h-6">
                                                                <Image src="/prize.png" alt="prize" fill className="object-contain" />
                                                            </div>
                                                            <span className="text-white/80 text-[13px] font-bold">3rd Prize</span>
                                                        </div>
                                                        <div className="flex items-center gap-1.5">
                                                            <span className="text-white font-bold text-[14px]">200</span>
                                                            <span className="text-[14px]">🪙</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Rounds and Schedule Section */}
                                        <div>
                                            <h3 className="text-white text-[18px] font-bold mb-4">Rounds and Schedule</h3>
                                            <div className="space-y-4">
                                                {[1, 2, 3].map((round) => (
                                                    <div key={round} className="group">
                                                        <div className="flex justify-between items-start">
                                                            <div>
                                                                <h4 className="text-white font-semibold font-inter text-[14px]">Qualifiers <span className="text-gray-400 font-medium">(Round {round})</span></h4>
                                                                <p className="text-white text-[12px] mt-1">Top 4 to next round</p>
                                                            </div>
                                                            <div className="flex flex-col items-end gap-1">
                                                                <span className="bg-[#1A1033] text-[#ffffff] text-[10px] font-semibold px-2 py-0.5 rounded-md">Single Elimination</span>
                                                                <span className="text-white text-[11px] font-medium tracking-tight">3rd Aug, 10:00 pm</span>
                                                            </div>
                                                        </div>
                                                        {round < 3 && <div className="border-b-[3px] border-white/20 mt-4" />}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* How to Join Section */}
                                        <div>
                                            <h3 className="text-white text-[20px] font-bold mb-2">How to Join a Match</h3>
                                            <ul className="space-y-1 font-inter">
                                                <li className="flex gap-3 items-start">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#BCBCBC] mt-2 shrink-0" />
                                                    <p className="text-[17px] leading-[20px] font-normal text-[#BCBCBC]">Have your game open already and on the latest version</p>
                                                </li>
                                                <li className="flex gap-3 items-start">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#BCBCBC] mt-2 shrink-0" />
                                                    <p className="text-[17px] leading-[20px] font-normal text-[#BCBCBC]">Once the match is configured you will receive an invite in-game to join the lobby.</p>
                                                </li>
                                                <li className="flex gap-3 items-start">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#BCBCBC] mt-2 shrink-0" />
                                                    <p className="text-[17px] leading-[20px] font-normal text-[#BCBCBC]">Join the match and wait for the game to start.</p>
                                                </li>
                                                <li className="flex gap-3 items-start">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#BCBCBC] mt-2 shrink-0" />
                                                    <p className="text-[17px] leading-[20px] font-normal text-[#BCBCBC]">When eliminated return to the match room page to be ready to join the next map in the round.</p>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* Mobile Only: Organiser (No Heading) */}
                                        <div className="lg:hidden">
                                            <div className="bg-[#05140C] rounded-xl border border-white/10 overflow-hidden">
                                                <div className="p-4 bg-white/[0.03] border-b border-white/10">
                                                    <p className="text-white/60 text-[12px] font-medium italic">Organiser&apos;s Details and contact</p>
                                                </div>
                                                <div className="p-5 space-y-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-[#2E2463]">
                                                            <Image src="/GS.png" alt="GS" fill className="object-cover" />
                                                        </div>
                                                        <span className="text-white font-inter font-bold text-[15px] uppercase">GS ESPORTS</span>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-gray-400 group">
                                                        <Mail size={16} className="group-hover:text-white transition-colors" />
                                                        <span className="text-[13px] group-hover:text-white transition-colors">Support@gsesports.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mobile Only: More Tournaments for you */}
                                        <div className="lg:hidden mt-12 mb-0">
                                            <h3 className="text-white text-[20px] font-bold mb-6">More tournaments for you</h3>
                                            <div className="flex gap-4 overflow-x-auto no-scrollbar -mx-4 px-4 pb-4">
                                                {[1, 2].map((i) => (
                                                    <div key={i} className="min-w-[280px] bg-[#05140C] rounded-2xl border border-white/10 overflow-hidden shrink-0">
                                                        {/* Card Image */}
                                                        <div className="relative h-40">
                                                            <Image src="/more_tournaments.png" alt="Tournament" fill className="object-cover" />
                                                            {/* Badges */}
                                                            <div className="absolute top-2 left-2 flex items-center gap-2">
                                                                <div className="bg-[#1F2937]/90 backdrop-blur-sm px-2  rounded-xl border border-white/10 flex items-center gap-1.5">
                                                                    <span className="text-[10px] font-Inter text-white uppercase tracking-wider">Registration Open</span>
                                                                </div>
                                                            </div>
                                                            <div className="absolute top-2 right-2 flex items-center gap-2">
                                                                <div className="bg-[#1F2937]/90 backdrop-blur-sm px-2  rounded-xl border border-white/10 flex items-center gap-1.5">
                                                                    <Users size={10} className="text-white" />
                                                                    <span className="text-[11px] font-Inter text-white">670/800</span>
                                                                </div>
                                                            </div>
                                                            {/* Overlay Logo */}
                                                            <div className="absolute -bottom-5 right-4 w-12 h-12 rounded-full border-[1px] border-[#05140C] overflow-hidden bg-[#2E2463] z-10">
                                                                <Image src="/GS.png" alt="GS" fill className="object-cover" />
                                                            </div>
                                                        </div>

                                                        {/* Card Content */}
                                                        <div className="p-4 pt-3 space-y-2">
                                                            <div>
                                                                <h4 className="text-white font-bold text-[16px] mb-1">PUBG tournament</h4>
                                                                <p className="text-gray-400 text-[11px] font-bold uppercase tracking-wider">BY {i === 1 ? 'GS ESPORTS' : 'RED BULL'}</p>
                                                            </div>

                                                            {/* Tags */}
                                                            <div className="flex gap-1.5 overflow-x-auto no-scrollbar">
                                                                <span className="bg-[#052210] text-[#ffffff] text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#22C55E]/20">BGMI</span>
                                                                <span className="bg-[#052210] text-[#ffffff] text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#22C55E]/20">Solo</span>
                                                                <span className="bg-[#052210] text-[#ffffff] text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#22C55E]/20">Entry-Free</span>
                                                            </div>

                                                            {/* Details */}
                                                            <div className="space-y-2.5">
                                                                <div className="flex items-center gap-2.5 text-white/80">
                                                                    <div className="relative w-3.5 h-3.5">
                                                                        <Image src="/clock.png" alt="clock" fill className="object-contain" />
                                                                    </div>
                                                                    <span className="text-[13px] font-medium">Starts 3rd Aug at 10:00 pm</span>
                                                                </div>
                                                                <div className="flex items-center justify-between">
                                                                    <div className="flex items-center gap-2.5 text-white/80">
                                                                        <Trophy size={14} className="text-[#D4A017]" />
                                                                        <span className="text-[13px] font-medium">Prize Pool- 1000 🪙</span>
                                                                    </div>
                                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-[#22C55E]">
                                                                        <path d="m9 18 6-6-6-6" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Prize Pool & Organiser (with vertical divider) - Desktop ONLY */}
                                    <div className="hidden lg:flex lg:col-span-1 flex-col space-y-8 lg:pl-12 lg:border-l-[3px] lg:border-white/20 pb-32">
                                        {/* Prize Pool Section */}
                                        <div>
                                            <h3 className="text-white text-[18px] font-bold mb-4">Prize pool</h3>
                                            <div className="bg-[#05140C] rounded-xl border border-white/10 overflow-hidden">
                                                <div className="p-4 bg-white/[0.03] flex justify-between items-center border-b border-white/10">
                                                    <span className="text-white/80 text-[13px] font-medium">Total Tournament Prize</span>
                                                    <div className="flex items-center gap-1.5">
                                                        <span className="text-white text-[16px] font-black">2000</span>
                                                        <span className="text-[16px]">🪙</span>
                                                    </div>
                                                </div>
                                                <div className="p-2 divide-y divide-white/5">
                                                    <div className="p-3 flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="relative w-6 h-6">
                                                                <Image src="/prize.png" alt="prize" fill className="object-contain" />
                                                            </div>
                                                            <span className="text-white/80 text-[13px] font-bold">1st Prize</span>
                                                        </div>
                                                        <div className="flex items-center gap-1.5">
                                                            <span className="text-white font-bold text-[14px]">1000</span>
                                                            <span className="text-[14px]">🪙</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="relative w-6 h-6">
                                                                <Image src="/prize.png" alt="prize" fill className="object-contain" />
                                                            </div>
                                                            <span className="text-white/80 text-[13px] font-bold">2nd Prize</span>
                                                        </div>
                                                        <div className="flex items-center gap-1.5">
                                                            <span className="text-white font-bold text-[14px]">500</span>
                                                            <span className="text-[14px]">🪙</span>
                                                        </div>
                                                    </div>
                                                    <div className="p-3 flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className="relative w-6 h-6">
                                                                <Image src="/prize.png" alt="prize" fill className="object-contain" />
                                                            </div>
                                                            <span className="text-white/80 text-[13px] font-bold">3rd Prize</span>
                                                        </div>
                                                        <div className="flex items-center gap-1.5">
                                                            <span className="text-white font-bold text-[14px]">200</span>
                                                            <span className="text-[14px]">🪙</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Organiser Section */}
                                        <div>
                                            <h3 className="text-white text-[18px] font-bold mb-4">Organiser</h3>
                                            <div className="bg-[#05140C] rounded-xl border border-white/10 overflow-hidden">
                                                <div className="p-4 bg-white/[0.03] border-b border-white/10">
                                                    <p className="text-white/60 text-[12px] font-medium italic">Organiser&apos;s Details and contact</p>
                                                </div>
                                                <div className="p-5 space-y-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="relative w-8 h-8 rounded-full overflow-hidden bg-[#2E2463]">
                                                            <Image src="/GS.png" alt="GS" fill className="object-cover" />
                                                        </div>
                                                        <span className="text-white font-black text-[15px] uppercase">GS ESPORTS</span>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-gray-400 group">
                                                        <Mail size={16} className="group-hover:text-white transition-colors" />
                                                        <span className="text-[13px] group-hover:text-white transition-colors">Support@gsesports.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'Participants' && (
                                <div className="text-gray-300">
                                    <p>Participants content goes here...</p>
                                </div>
                            )}
                            {activeTab === 'Lobbies' && (
                                <div>
                                    {/* Round Selection */}
                                    <div className="flex gap-2 mb-6">
                                        {['Round 3', 'Round 2', 'Round 1'].map((round, idx) => (
                                            <button
                                                key={round}
                                                className={`px-5 py-1.5 rounded-full text-[12px] font-bold transition-colors ${idx === 0
                                                    ? 'bg-[#052210] text-[#22C55E]'
                                                    : 'bg-[#1F2937]/50 text-gray-500 hover:text-gray-300'
                                                    }`}
                                            >
                                                {round}
                                            </button>
                                        ))}
                                    </div>

                                    {/* Lobbies Grid */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10 overflow-hidden">
                                        {[...Array(12)].map((_, idx) => (
                                            <div key={idx} className="bg-[#05140C] border border-white/10 rounded-xl p-4 flex flex-col group hover:border-[#22C55E]/30 transition-all duration-300">
                                                <div className="flex justify-between items-center">
                                                    <h4 className="text-white font-bold text-[16px]">Lobby {idx + 1}</h4>
                                                    <button className="text-[#22C55E] text-[11px] font-Inter font-semibold tracking-tight uppercase flex items-center gap-1 hover:brightness-125">
                                                        VIEW PARTICIPANTS
                                                    </button>
                                                </div>
                                                <div className="flex items-center gap-2 mt-2 text-gray-400/80">
                                                    <div className="relative w-5 h-5">
                                                        <Image src="/clock.png" alt="clock" fill className="object-contain" />
                                                    </div>
                                                    <span className="text-[13px] font-medium">Yet to be scheduled</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {activeTab === 'Leaderboard' && (
                                <div className="text-gray-300">
                                    <p>Leaderboard content goes here...</p>
                                </div>
                            )}
                            {activeTab === 'Rules' && (
                                <div className="text-gray-300">
                                    <p>Tournament Rules & Regulations content goes here...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Action Bar - Fixed at bottom */}
            <div className="fixed bottom-0 left-0 md:left-64 right-0 border-t-[3px] border-white/20 py-2 md:py-2 px-4 md:px-8 bg-[#001208]/95 backdrop-blur-md z-40">
                <div className="max-w-[1200px] mx-auto flex justify-end">
                    <button className="bg-[#01B752] text-white font-Inter font-semibold text-[14px] md:text-[16px] px-10 md:px-14 py-2 md:py-2.5 rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 uppercase tracking-wider shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                        JOIN TOURNAMENT
                    </button>
                </div>
            </div>
        </div>
    );
}
