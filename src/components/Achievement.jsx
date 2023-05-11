import Card from "../UI/Card";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineAnalytics } from "react-icons/md";

const Achievement = () => {
  return (
    <div className=" relative">
      <div className="services text-white md:absolute -top-32 flex justify-center items-center flex-col md:flex-row gap-10 md:px-24 mt-10">
        <Card
          icon={<HiOutlineLightBulb size={25} />}
          title={"BRANDING"}
          text={
            "Regular Business Law Assistance service includes monitoring the legal sphere of your business."
          }
        />
        <Card
          icon={<FaRegMoneyBillAlt size={25} />}
          title={"FINANCE"}
          text={
            "We provide businesses with all financial services including consultations"
          }
        />
        <Card
          icon={<MdOutlineAnalytics size={25} />}
          title={"MARKETING"}
          text={
            "Good marketing plan is crucial for businessmen who want to develop their businesses."
          }
        />
      </div>
      <div className="achievement flex flex-col justify-center items-center -mt-32 md:mt-32 pt-48 pb-16 px-5 md:px-24 text-center bg-black text-white">
        <h3 className=" font-bold text-3xl">Our Achievements</h3>
        <p className=" md:w-2/5 text-sm my-5">
          Buildz is a base for future business project which includes all
          aspects and makes a forecast about your project’s payback.
        </p>
        <div className=" mt-10 w-full flex justify-around items-center flex-col md:flex-row gap-12 md:gap-0">
            <div className="">
                <h3 className=" font-bold text-4xl">600</h3>
                <h5 className=" text-sm">AWARDS WON</h5>
            </div>
            <div className="">
                <h3 className=" font-bold text-4xl">567</h3>
                <h5 className=" text-sm">SATISFIED CLIENTS</h5>
            </div>
            <div className="">
                <h3 className=" font-bold text-4xl">670</h3>
                <h5 className=" text-sm">STARTUP GROWTH</h5>
            </div>
            <div className="">
                <h3 className=" font-bold text-4xl">500</h3>
                <h5 className=" text-sm">AVERAGE PRICES</h5>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
