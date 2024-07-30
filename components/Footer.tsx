import Title from './Title';
import { socials } from '@/constants';

const Footer = () => {
  return (
    <footer className="w-full p-[64px] tablet:p-[30px] flex flex-col relative">
      <div className="footer-gradient" />
      <div className="w-full flex flex-row justify-between items-center tablet:flex-col tablet:gap-[30px] tablet:justify-center">
        <Title text="Enter the Metaverse" style="text-center" />
        <button
          type="button"
          className="px-[32px] py-[20px] border-none rounded-[24px] bg-[#25618B] flex flex-row justify-center items-center"
        >
          <img
            src="/vr.png"
            alt="vr"
            className="w-[24px] h-[24px] object-cover mr-[12px]"
          />
          <p className="font-medium text-white text-[16px] uppercase">
            enter metaverse
          </p>
        </button>
      </div>
      <div className="w-full h-[1px] bg-grey mt-[80px] tablet:mt-[30px]" />
      <div className="w-full flex flex-row justify-between items-center pt-[64px] tablet:flex-col tablet:pt-[30px] tablet:justify-center tablet:gap-[30px]">
        <p className="text-[24px] font-extrabold text-white uppercase">
          metaverse
        </p>
        <p className="font-medium text-[14px] text-grey text-center">
          Copyright © 2023 - 2024 Metaversus. All rights reserved.
        </p>
        <div className="flex flex-row gap-[30px] justify-center items-center">
          {socials.map((item, index) => (
            <img
              key={index}
              src={item.icon}
              alt={item.icon}
              className="w-[24px] h-[24px] object-contain cursor-pointer"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
