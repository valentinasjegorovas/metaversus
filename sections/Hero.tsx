const Hero = () => {
  return (
    <section className="w-full py-[64px] tablet:py-[30px] overflow-hidden relative">
      <div className="w-full flex flex-col justify-center items-center relative z-10">
        <h1 className="text-[144px] uppercase text-white font-bold mobile:text-[44px] tablet:text-[90px] leading-[160px] tablet:leading-[110px] mobile:leading-[60px]">
          metaverse
        </h1>
        <div className="flex flex-row justify-center items-center">
          <h1 className="text-[144px] uppercase text-white font-bold mobile:text-[44px] tablet:text-[90px] leading-[160px] tablet:leading-[110px] mobile:leading-[60px]">
            ma
          </h1>
          <div className="w-[212px] h-[108px] border-[18px] border-white rounded-r-[50px] mx-2 tablet:w-[100px] tablet:h-[62px] tablet:border-[13px] tablet:mx-[6px] mobile:w-[60px] mobile:h-[32px] mobile:border-[8px]" />
          <h1 className="text-[144px] uppercase text-white font-bold mobile:text-[44px] tablet:text-[90px] leading-[160px] tablet:leading-[110px] mobile:leading-[60px]">
            ness
          </h1>
        </div>
      </div>
      <img
        src="/hero-bg.png"
        alt="hero-bg"
        className="w-full h-[500px] object-cover relative right-[-5%] top-[-50px] rounded-tl-[140px] rounded-bl-[40px] z-5 mobile:h-[350px] tablet:right-[-30px]"
      />
      <img
        src="stamp.png"
        alt="stamp"
        className="absolute w-[155px] h-[155px] object-contain bottom-[35px] right-[40px] tablet:bottom-[1px] mobile:w-[100px] mobile:h-[100px] mobile:bottom-[30px]"
      />
    </section>
  );
};

export default Hero;
