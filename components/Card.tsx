interface CardProps {
  id: string;
  imgUrl: string;
  title: string;
  active: string;
  handleClick: (id: string) => void;
}

const Card: React.FC<CardProps> = ({
  id,
  imgUrl,
  title,
  active,
  handleClick,
}) => {
  return (
    <div
      className={`${
        active === id ? 'flex-[3]' : 'flex-[1]'
      } flex cursor-pointer transition-[flex] duration-[0.7s] ease-out-flex min-w-[150px] h-[600px] bg-center bg-cover rounded-[24px] relative`}
      style={{ backgroundImage: `url(${imgUrl})` }}
      onClick={() => handleClick(id)}
    >
      {active !== id ? (
        <h3 className="text-white font-semibold text-[30px] rotate-[-90deg] absolute bottom-28 tablet:transform-none mobile:text-[18px] tablet:bottom-[15px] tablet:left-[15px]">
          {title}
        </h3>
      ) : (
        <div className="flex flex-col absolute bottom-0 pb-[48px] pl-[15px] tablet:pb-[15px]">
          <div className="w-[60px] h-[60px] rounded-[24px] bg-[rgba(255,255,255,0.25)] flex justify-center items-center mb-[16px]">
            <img src="/vr.png" className="w-1/2 h-1/2 object-contain" />
          </div>
          <p className="text-[16px] font-medium uppercase text-white mb-[24px] tablet:mb-[16px] mobile:mb-[10px]">
            enter metaverse
          </p>
          <h3 className="text-white font-semibold text-[30px] mobile:text-[24px]">
            {title}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Card;
