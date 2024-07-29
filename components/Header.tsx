import { header } from '../constants';

const Header = () => {
  return (
    <header className="w-full px-[64px] py-[35px] relative tablet:p-[30px]">
      <div className="absolute w-[50%] gradient-01 inset-0 z-5" />
      {header.map((headerItem, i) => (
        <div
          key={i}
          className="w-full flex justify-between items-center relative z-10"
        >
          <img
            src={headerItem.search}
            alt="search"
            className="w-[24px] h-[24px] object-contain"
          />
          <p className="font-extrabold text-[24px] text-white uppercase">
            {headerItem.text}
          </p>
          <img
            src={headerItem.menu}
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
          />
        </div>
      ))}
    </header>
  );
};

export default Header;
