import { HeroBanner } from '@/components/home/HeroBanner';
import { FeaturedTournaments } from '@/components/home/FeaturedTournaments';
import { BouncyBirdBanner } from '@/components/home/BouncyBirdBanner';
import { PlayTournamentByGames } from '@/components/home/PlayTournamentByGames';
import { CompeteInBattles } from '@/components/home/CompeteInBattles';
import { GameHighlights } from '@/components/home/GameHighlights';
import { Navbar } from '@/components/layout/Navbar';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#001208] flex flex-col pt-[62px] md:pt-[74px] lg:pt-[76px] pb-24 md:pb-8 lg:pr-[400px]">
      {/* Navbar */}
      <Navbar />

      <div className="w-full px-4 md:px-6">

        {/* Hero Banner */}
        <HeroBanner />

        {/* Featured Tournaments */}
        <FeaturedTournaments />

        {/* Bouncy Bird Banner */}
        <BouncyBirdBanner />

        {/* Play Tournament by Games */}
        <PlayTournamentByGames />

        {/* Compete in Battles */}
        <CompeteInBattles />

        {/* Game Highlights - Mobile & Tablet */}
        <div className="lg:hidden">
          <GameHighlights />
        </div>

      </div>
    </div>
  );
}