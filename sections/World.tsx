import Subtitle from '@/components/Subtitle';
import Title from '@/components/Title';

const World = () => {
  return (
    <section className="w-full p-[64px] tablet:p-[30px]">
      <Subtitle text="| People on the World" style="text-center" />
      <Title
        text="Track friends around you and invite them to play together in the same world"
        style="text-center"
      />
      <img
        src="/map.png"
        alt="map"
        className="w-full object-cover mt-[68px] mobile:mt-[30px]"
      />
    </section>
  );
};

export default World;
