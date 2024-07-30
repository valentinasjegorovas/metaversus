interface NewFeaturesProps {
  imgUrl: string;
  title: string;
  text: string;
}

const NewFeatures: React.FC<NewFeaturesProps> = ({ imgUrl, title, text }) => {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="w-[70px] h-[70px] rounded-[24px] bg-[rgba(255,255,255,0.1)] flex justify-center items-center">
        <img src={imgUrl} alt={title} />
      </div>
      <p className="text-white font-bold text-[24px]">{title}</p>
      <p className="text-lightgrey font-medium text-[16px]">{text}</p>
    </div>
  );
};

export default NewFeatures;
