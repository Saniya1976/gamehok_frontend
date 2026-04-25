import Image from 'next/image';

export const BouncyBirdBanner = () => {
    return (
        <section className="mt-6 w-full max-w-[1200px] md:hidden">
            <div className="relative w-full h-[140px] rounded-[10px] overflow-hidden shadow-lg">
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

                        <span className="text-[#000000] font-bold font-inter text-[15px] mt-3 block whitespace-nowrap">
                            Play daily, win weekly🪙
                        </span>
                    </div>

                    {/* Right Section: Bird & Play Button */}
                    <div className="flex flex-col items-center justify-center gap-1 pr-1">
                        <div className="relative w-28 h-20 mb-[-10px]">
                            <Image
                                src="/bouncy_bird.png"
                                alt="Bouncy Bird"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <button className="relative group overflow-visible">
                            <div
                                className="relative px-5 h-10 rounded-full border-[3px] border-[#8D5B3A] flex items-center justify-center overflow-hidden"
                                style={{
                                    background: 'linear-gradient(to bottom, #26F026 0%, #0D8D0D 100%)',
                                }}
                            >
                                <div className="absolute top-1 right-2.5 w-2 h-2 bg-[#FFFFFF] rounded-[60%] blur-[0.5px] rotate-[20deg]"></div>
                                <div className="absolute top-3 right-2 w-1 h-1 bg-[#FFFFFF] rounded-[60%] blur-[0.5px]"></div>
                                <span
                                    className="text-white font-[1000] font-black-han-sans text-[22px] leading-none tracking-tight relative z-10"
                                    style={{
                                        WebkitTextStroke: '0.5px black',
                                        filter: 'drop-shadow(0.5px 0.5px 0px black)',
                                        fontFamily: 'system-ui, sans-serif'
                                    }}
                                >
                                    Play
                                </span>
                            </div>
                            <div className="absolute inset-x-0 top-0 h-1/2 bg-white/10 rounded-t-full pointer-events-none"></div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
