import HeroImg from "./HeroImg";
import HeroText from "./HeroText";
const Hero = () => {
  return (
    <section className="pb-[114px] pt-20 md:mt-[100px]">
      <div className="container ">
        <div className="grid items-center gap-6 md:grid-cols-2">
          <HeroImg />
          <HeroText />
        </div>
      </div>
    </section>
  );
};

export default Hero;
