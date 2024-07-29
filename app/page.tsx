import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Explore from '@/sections/Explore';
import GetStarted from '@/sections/GetStarted';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <GetStarted />
    </div>
  );
}
