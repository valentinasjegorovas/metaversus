interface InsightCardProps {
  imgUrl: string;
  title: string;
  subtitle: string;
}

const InsightCard: React.FC<InsightCardProps> = ({
  imgUrl,
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-row justify-center items-center tablet:flex-col tablet:gap-[30px]">
      <img
        src={imgUrl}
        alt={title}
        className="max-w-[270px] h-[250px] object-cover rounded-[24px] mr-[62px] tablet:mr-0"
      />
      <div className="flex flex-col max-w-[646px] mr-[92px] tablet:mr-0 tablet:text-center">
        <p className="text-white font-medium text-[42px] mobile:text-[26px]">
          {title}
        </p>
        <p className="text-lightgrey font-medium text-[20px] mt-[16px] mobile:text-[16px]">
          {subtitle}
        </p>
      </div>
      <img
        src="/arrow-up.png"
        alt="arrow-up"
        className="max-w-[100px] max-h-[100px] object-contain mobile:max-w-[70px] mobile-h-[70px]"
      />
    </div>
  );
};

export default InsightCard;
