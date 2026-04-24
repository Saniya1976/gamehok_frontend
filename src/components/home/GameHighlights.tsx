import Image from 'next/image';

const highlights = [
    {
        id: 1,
        title: 'Call of Duty',
        image: '/COD.png',
    },
    {
        id: 2,
        title: 'BGMI Tournament',
        image: '/BGMI.png',
    },
    {
        id: 3,
        title: 'Free Fire Highlights',
        image: '/freefire.png',
    },
];

export const GameHighlights = () => {
    return (
        <section className="mt-8 w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-white font-bold text-[20px]">Game Highlights</h2>
                <button className="text-[#22C55E] font-bold text-[14px] hover:underline">
                    View All
                </button>
            </div>

            {/* Scrollable Row */}
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                {highlights.map((h) => (
                    <div key={h.id} className="flex-shrink-0 w-[280px] md:w-[320px]">
                        <div className="relative w-full aspect-video rounded-[16px] overflow-hidden mb-2">
                            <Image
                                src={h.image}
                                alt={h.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h4 className="text-white font-bold text-[14px]">{h.title}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};
