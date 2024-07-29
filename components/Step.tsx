interface StepProps {
  index: string;
  text: string;
}

const Step: React.FC<StepProps> = ({ index, text }) => {
  return (
    <div className="flex flex-row gap-[30px]">
      <div className="w-[70px] h-[70px] rounded-[24px] bg-[rgba(255,255,255,0.1)] flex justify-center items-center">
        <p className="font-bold text-white text-[20px]">{index}</p>
      </div>
      <p className="font-medium text-lightgrey text-[18px] flex-1 leading-[32px]">
        {text}
      </p>
    </div>
  );
};

export default Step;
