import Subtitle from '@/components/Subtitle';
import Title from '@/components/Title';
import { steps } from '@/constants';
import Step from '@/components/Step';

const GetStarted = () => {
  return (
    <section className="w-full p-[64px] tablet:p-[30px] flex flex-row justify-center gap-8 tablet:flex-col tablet:items-center tablet:gap-0">
      <img
        src="/get-started.png"
        alt="get-started"
        className="object-contain flex-1 w-[50%] tablet:w-[70%]"
      />
      <div className="flex-[0.75] flex flex-col">
        <Subtitle text="| How Metaversus Works" style="text-left" />
        <Title
          text={
            <>
              Get started <br className="tablet:hidden" /> with just a few
              clicks
            </>
          }
          style="text-left"
        />
        <div className="flex flex-col gap-[24px] mt-[24px] max-w-[370px]">
          {steps.map((step, index) => (
            <Step
              key={index}
              {...step}
              index={index < 10 ? `0${index + 1}` : `${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
