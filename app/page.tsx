import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Explore from '@/sections/Explore';
import GetStarted from '@/sections/GetStarted';
import WhatIsNew from '@/sections/WhatIsNew';
import World from '@/sections/World';
import Insight from '@/sections/Insight';
import Founder from '@/sections/Founder';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatIsNew />
      </div>
      <World />
      <div className="relative">
        <Insight />
        <div className="gradient-04 z-0" />
        <Founder />
      </div>
      <Footer />
    </div>
  );
}
