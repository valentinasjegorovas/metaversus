import Subtitle from '@/components/Subtitle';
import Title from '@/components/Title';
import { whatIsNew } from '@/constants';
import NewFeatures from '@/components/NewFeatures';

const WhatIsNew = () => {
  return (
    <section className="w-full p-[64px] tablet:p-[30px] flex flex-row justify-center gap-8 tablet:flex-col tablet:items-center tablet:gap-[30px]">
      <div className="flex-[0.75] flex flex-col">
        <Subtitle text="| What's new?" style="text-left" />
        <Title text={<>What's new about Metaversus?</>} style="text-left" />
        <div className="flex flex-row gap-[46px] mt-[48px] mobile:flex-col mobile:mt-[24px] mobile:gap-[24px]">
          {whatIsNew.map((item, index) => (
            <NewFeatures {...item} key={index} />
          ))}
        </div>
      </div>
      <img
        src="/whats-new.png"
        alt="whats-new"
        className="object-contain flex-1 w-[50%] tablet:w-[70%]"
      />
    </section>
  );
};

export default WhatIsNew;
