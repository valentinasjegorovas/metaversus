import Subtitle from '@/components/Subtitle';

const About = () => {
  return (
    <section className="w-full p-[64px] tablet:p-[30px] relative">
      <div className="gradient-02 z-0" />
      <Subtitle text="| About Metaversus" style="text-center" />
      <div className="w-full flex flex-col justify-center items-center relative z-10">
        <p className="text-center text-grey text-[32px] mt-[8px] mobile:text-[20px]">
          <span className="text-white font-extrabold">Metaverse</span> is a new
          thing in the future, where you can enjoy the virtual world by feeling
          like it's really real, you can feel what you feel in this metaverse
          world, because this is really the{' '}
          <span className="text-white font-extrabold">
            madness of the metaverse
          </span>{' '}
          of today, using only{' '}
          <span className="text-white font-extrabold">VR</span> devices you can
          easily explore the metaverse world you want, turn your dreams into
          reality. Let's{' '}
          <span className="text-white font-extrabold">explore</span> the madness
          of the metaverse by scrolling down
        </p>
        <img
          src="/arrow-down.svg"
          alt="arrow-down"
          className="object-contain mt-[28px]"
        />
      </div>
    </section>
  );
};

export default About;
