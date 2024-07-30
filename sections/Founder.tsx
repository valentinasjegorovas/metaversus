import FounderCard from '@/components/FounderCard';
import { founder } from '@/constants';

const Founder = () => {
  return (
    <section className="w-full p-[64px] tablet:p-[30px] flex flex-row gap-[32px] justify-center mobile:flex-col mobile:items-center relative">
      <div className="feedback-gradient" />
      {founder.map((item, index) => (
        <FounderCard key={index} {...item} />
      ))}
      <div className="max-w-[768px] relative flex-[1.5]">
        <img
          src="/planet-09.png"
          alt="planet-09"
          className="w-full object-cover rounded-[24px] h-full"
        />
        <img
          src="/stamp.png"
          alt="stamp"
          className="w-[155px] h-[155px] absolute top-[50px] left-[-95px] mobile:hidden"
        />
      </div>
    </section>
  );
};

export default Founder;
