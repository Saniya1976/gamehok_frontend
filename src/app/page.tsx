import { HeroBanner } from '@/components/home/HeroBanner';
import { FeaturedTournaments } from '@/components/home/FeaturedTournaments';
import { Navbar } from '@/components/layout/Navbar';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#001208] flex flex-col pb-24 md:pb-8">
      <div className="w-full px-4 md:px-6">

        {/* Navbar */}
        <Navbar />

        {/* Hero Banner */}
        <HeroBanner />

        {/* Featured Tournaments */}
        <FeaturedTournaments />

        {/* Content Area */}
        <div className="mt-8">
          <h2 className="text-white text-lg font-semibold">Featured Content</h2>
        </div>

      </div>
    </div>
  );
}