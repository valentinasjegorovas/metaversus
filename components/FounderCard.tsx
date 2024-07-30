interface FounderCardProps {
  title: string;
  subtitle: string;
  text: string;
}

const FounderCard: React.FC<FounderCardProps> = ({ title, subtitle, text }) => {
  return (
    <div className="flex flex-1 flex-col px-[30px] pt-[163px] pb-[30px] max-w-[370px] border-[1px] border-bordergrey rounded-[24px] mobile:p-[30px]">
      <p className="font-bold text-[32px] text-white">{title}</p>
      <p className="font-medium text-[18px] mobile:text-[16px] text-white mt-[8px] mobile:mt-0">
        {subtitle}
      </p>
      <p className="text-medium text-[24px] text-white mt-[24px] mobile:mt-[14px] tablet:text-[20px] mobile:text-[18px]">
        {text}
      </p>
    </div>
  );
};

export default FounderCard;
