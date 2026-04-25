// components/home/HeroBanner.tsx
import Image from 'next/image';

export const HeroBanner = () => {
    return (
        <div
            className="relative overflow-hidden border border-white/10 w-full h-[205px] rounded-lg mt-[1px] md:mt-4 lg:mt-5"
            style={{
                background: 'radial-gradient(51.61% 51.5% at 42.5% 6.75%, #00A155 0%, #003B1F 100%)',
            }}
        >
            {/* Star Image */}
            <div
                className={`absolute pointer-events-none z-0 transition-all duration-500 left-[-2%] md:left-auto md:right-0`}
                style={{
                    width: '45%',
                    height: '85%',
                    top: '7.5%',
                }}
            >
                <div className="relative w-full h-full">
                    <Image
                        src="/greenstar.png"
                        alt="Social Star"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col justify-center h-full px-2 md:px-4 md:w-[65%]">
                <div className="md:pl-0 pl-[38%] transition-all duration-500">
                    <h2 className="text-white font-bold text-[18px] md:text-[28px] leading-tight md:leading-snug">
                        Be the Gamehok's <span className="text-[#FFC300] block md:inline md:ml-1">Social Star</span>
                    </h2>

                    <p className="text-white text-[11px] md:text-[16px] font-inter font-bold mt-1 md:mt-3 leading-tight md:leading-normal">
                        Earn rewards by levelling up your social game
                    </p>

                    {/* Stats Icons */}
                    <div className="flex gap-4 md:gap-10 mt-3 md:mt-6">
                        {[
                            { src: '/posts.png', label: 'Posts', border: '#2E9EEE' },
                            { src: '/followers.png', label: 'Followers', border: '#FFC39B' },
                            { src: '/likes.png', label: 'Likes', border: '#B287FF' },
                        ].map(({ src, label, border }) => (
                            <div key={label} className="flex flex-col items-center gap-1.5">
                                <div
                                    className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-black/25 transition-transform hover:scale-110"
                                    style={{ border: `1.5px solid ${border}` }}
                                >
                                    <div className="relative w-5 h-5 md:w-7 md:h-7">
                                        <Image src={src} alt={label} fill className="object-contain" />
                                    </div>
                                </div>
                                <span className="text-white/90 text-[10px] md:text-[13px] font-semibold tracking-wide">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};