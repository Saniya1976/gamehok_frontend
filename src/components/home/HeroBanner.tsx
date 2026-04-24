// components/home/HeroBanner.tsx
import Image from 'next/image';

export const HeroBanner = () => {
    return (
        <div
            className="relative overflow-hidden border border-white/10 w-full h-[220px] rounded-xl mt-4"
            style={{
                background: 'radial-gradient(51.61% 51.5% at 42.5% 6.75%, #00A155 0%, #003B1F 100%)',
            }}
        >
            {/* Star Image - left section, contained within card */}
            <div
                className="absolute pointer-events-none z-0"
                style={{
                    width: '52%',
                    height: '80%',
                    top: '10%',
                    left: '-2%',
                }}
            >
                <Image
                    src="/greenstar.png"
                    alt="Social Star"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Content: pushed right of the star */}
            <div className="relative z-10 flex flex-col justify-center h-full pl-[47%] pr-4">
                <h2 className="text-white font-bold text-[17px] leading-[22px]">
                    Be the Gamehok's <br />
                    <span className="text-[#FFC300]">Social Star</span>
                </h2>

                <p className="text-white/80 text-[12px] font-bold leading-[15px] mt-1.5">
                    Earn rewards by levelling<br />up your social game
                </p>

                {/* Stats */}
                <div className="flex gap-5 mt-3">
                    {[
                        { src: '/posts.png', label: 'Posts', border: '#2E9EEE' },
                        { src: '/followers.png', label: 'Followers', border: '#FFC39B' },
                        { src: '/likes.png', label: 'Likes', border: '#B287FF' },
                    ].map(({ src, label, border }) => (
                        <div key={label} className="flex flex-col items-center gap-1">
                            <div
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-black/25"
                                style={{ border: `1.5px solid ${border}` }}
                            >
                                <div className="relative w-5 h-5">
                                    <Image src={src} alt={label} fill className="object-contain" />
                                </div>
                            </div>
                            <span className="text-white/80 text-[10px] font-medium">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};