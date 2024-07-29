'use client';

import { useState } from 'react';

import Subtitle from '@/components/Subtitle';
import Title from '@/components/Title';
import Card from '@/components/Card';
import { explore } from '@/constants';

const Explore = () => {
  const [active, setActive] = useState('world-2');
  return (
    <section className="w-full p-[64px] tablet:p-[30px] flex flex-col">
      <Subtitle text="| The world" style="text-center" />
      <Title
        text={
          <>
            Choose the world you want <br className="tablet:hidden" /> to
            explore
          </>
        }
        style="text-center"
      />
      <div className="flex w-full flex-row gap-5 mt-[50px] h-[100vh] tablet:flex-col">
        {explore.map((item) => (
          <Card
            key={item.id}
            {...item}
            active={active}
            handleClick={setActive}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;
