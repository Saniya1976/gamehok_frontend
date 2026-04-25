import Image from 'next/image';

export const BouncyBirdBanner = () => {
    return (
        <section className="mt-8 w-full max-w-[1200px] md:hidden">
            <div className="relative w-full h-[140px] rounded-[24px] overflow-hidden shadow-lg border-2 border-white/20">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/bouncybird_background.jpg"
                        alt="Bouncy Bird Bg"
                        fill
                        className="object-cover "
                        priority
                        style={{
                            objectPosition: 'center calc(50% + 110px)'
                        }}
                    />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 flex h-full items-center justify-between px-3">
                    {/* Left Section: Text */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-[#2D1D64] font-bold text-[18px] tracking-tight">
                            Introducing
                        </h3>
                        <h2
                            className="uppercase"
                            style={{
                                fontFamily: 'var(--font-irish-grover), cursive',
                                fontWeight: 400,
                                fontSize: '20px',
                                lineHeight: '100%',
                                color: '#8F4216',
                                verticalAlign: 'middle',
                                letterSpacing: '0%'
                            }}
                        >
                            BOUNCY BIRD
                        </h2>
                        <p className="text-[#6B21A8] font-bold text-[14px]">
                            A game for everyone
                        </p>

                        <div className="flex items-center gap-2 mt-4">
                            <span className="text-[#000000] font-bold text-[16px]">
                                Play daily, win weekly🪙
                            </span>

                        </div>
                    </div>

                    {/* Right Section: Bird & Play Button */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="relative w-28 h-20 mb-[-5px]">
                            <Image
                                src="/bouncy_bird.png"
                                alt="Bouncy Bird"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <button className="relative group overflow-visible">
                            <div
                                className="relative px-6 py-0.5 rounded-full border-[3px] border-[#8D5B3A] flex items-center justify-center overflow-hidden"
                                style={{
                                    background: 'linear-gradient(to bottom, #26F026 0%, #0D8D0D 100%)',
                                }}
                            >
                                {/* Glossy Highlights on the right */}
                                <div className="absolute top-1 right-2.5 w-2 h-2 bg-[#FFFFFF] rounded-[60%] blur-[0.5px] rotate-[20deg]"></div>
                                <div className="absolute top-3 right-2 w-1 h-1 bg-[#FFFFFF] rounded-[60%] blur-[0.5px]"></div>

                                {/* Text with thick outline */}
                                <span
                                    className="text-white font-[1000] font-black-han-sans text-[22px] tracking-tight relative z-10"
                                    style={{
                                        WebkitTextStroke: '1.5px black',
                                        filter: 'drop-shadow(1.5px 1.5px 0px black)',
                                        fontFamily: 'system-ui, sans-serif'
                                    }}
                                >
                                    Play
                                </span>
                            </div>
                            {/* Reflection/Inner Shadow for more depth */}
                            <div className="absolute inset-x-0 top-0 h-1/2 bg-white/10 rounded-t-full pointer-events-none"></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
