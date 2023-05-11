import Button from "../UI/Button";
import hero from '../assets/bro.png'

const Hero = () => {
  return (
    <div className="hero flex md:justify-between items-center flex-col md:flex-row px-5 md:px-24 h-screen">
      <div className=" mt-24 md:mt-0 md:w-2/5 tracking-wide leading-loose">
        <h2 className=" text-4xl font-semibold">
          Making Your Business Ideas{" "}
          <span className=" font-extrabold">Come True</span>
        </h2>
        <p className=" text-base md:text-lg mt-6">
          We provide businesses with all financial services including financial
          analysis of enterprise.
        </p>
        <Button text={"READ MORE"} className={"bg-black text-white"} />
      </div>
      <img src={hero} alt="hero illustration" className=" mt-10 md:mt-0"/>
    </div>
  );
};

export default Hero;
