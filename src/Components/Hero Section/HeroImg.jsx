import frame from "../../assets/frame.png";
const HeroImg = () => {
  return (
    <div className="flex justify-center md:order-2">
      <img
        className="max-md:w-full"
        src={frame}
        width="326"
        height="290"
        alt="frame"
      />
    </div>
  );
};

export default HeroImg;
