import Image from 'next/image';
import { Game } from '@/types';

interface GameCardProps {
    game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
    return (
        <div className="flex flex-col items-center flex-shrink-0 md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)]">
            <div className="relative w-full aspect-[5/4] rounded-lg overflow-hidden mb-2">
                <Image
                    src={game.image}
                    alt={game.name}
                    fill
                    className="object-cover"
                />
            </div>
            <span className="text-white font-semibold font-inter text-[11px] md:text-[14px] tracking-wide text-center uppercase">
                {game.name}
            </span>
        </div>
    );
};
