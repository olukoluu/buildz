import PricingCard from "../UI/PricingCard";

const Pricing = () => {
  return (
    <div className=" my-10 py-10 px-5 md:px-24 text-center">
      <h3 className=" text-3xl font-bold">Our Pricing</h3>
      <p className=" text-lg my-3">
        This service includes your business analysis, marketing researches and
        financial planning.
      </p>
      <div className=" w-full flex flex-col md:flex-row justify-center gap-10 md:gap-64 items-center relative mt-14">
        <PricingCard price={'100'} btnClass={'bg-black text-white'}/>
        <PricingCard price={'150'} className={'md:absolute top-10'} btnClass={'hover:bg-black hover:text-white'}/>
        <PricingCard price={'200'} btnClass={'bg-black text-white'}/>
      </div>
    </div>
  );
};

export default Pricing;
