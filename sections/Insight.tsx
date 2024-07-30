import Subtitle from '@/components/Subtitle';
import Title from '@/components/Title';
import { insight } from '@/constants';
import InsightCard from '@/components/InsightCard';

const Insight = () => {
  return (
    <section className="w-full p-[64px] tablet:p-[30px]">
      <Subtitle text="| Insight" style="text-center" />
      <Title text="Insight about metaverse" style="text-center" />
      <div className="flex flex-col gap-[30px] mt-[50px] tablet:mt-[30px]">
        {insight.map((item, index) => (
          <InsightCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Insight;
