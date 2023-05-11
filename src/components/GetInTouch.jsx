import Button from "../UI/Button";
import mail from '../assets/mail.png'

const GetInTouch = () => {
  return (
    <div className=" px-5 md:px-24 mt-10 mb-20 flex flex-col items-center">
      <h3 className=" text-3xl font-bold">Get In Touch</h3>
      <p className=" md:w-4/5 text-center mt-3">
        Finance and Jurisprudence are our main directions and we know how to
        deal with many financial issues and how to do business in today’s
        reality and conditions.
      </p>
      <div className=" flex justify-between items-center flex-col md:flex-row w-full">
        <img src={mail} alt="mail" className=" md:w-2/4 mt-5" />
        <form action="#" className=" w-full md:w-2/5 mt-10">
            <div className=" flex flex-col">
                <label className=" text-gray-400" htmlFor="name">Your Name(required)</label>
                <input type="text" className="border p-3 mb-5 w-full" name="name" id="name" />
            </div>
            <div className=" flex flex-col">
                <label className=" text-gray-400" htmlFor="email">Your Email(required)</label>
                <input type="email" className="border p-3 mb-5 w-full" name="email" id="email" />
            </div>
            <div className=" flex flex-col">
                <label className=" text-gray-400" htmlFor="subject">Subject</label>
                <input type="text" className="border p-3 mb-5 w-full" name="subject" id="subject" />
            </div>
            <div className=" flex flex-col">
                <label className=" text-gray-400" htmlFor="message">Your Message</label>
                <textarea className="border p-3 mb-5 h-40 w-full" name="message" id="message"></textarea>
            </div>
            <Button text={'SEND'} className={' bg-black text-white'}/>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
