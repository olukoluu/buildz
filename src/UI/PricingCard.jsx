import Button from "./Button";
import { IoCheckmarkCircleOutline } from 'react-icons/io5'

const PricingCard = (props) => {
    return ( 
        <div className={` border bg-white text-center py-14 shadow-md w-full md:w-1/4 ${props.className}`}>
            <h5 className=" font-light">1 USER</h5>
            <h4 className=" font-bold text-2xl md:text-lg">Premium</h4>
            <h3>{props.price}$/month</h3>
            <ul className=" mt-5">
                <li className=" flex justify-center items-center mb-3"><IoCheckmarkCircleOutline fontWeight={'bold'} size={24}/> Lorem, ipsum dolor.</li>
                <li className=" flex justify-center items-center mb-3"><IoCheckmarkCircleOutline fontWeight={'bold'} size={24}/> Lorem, ipsum dolor.</li>
                <li className=" flex justify-center items-center mb-3"><IoCheckmarkCircleOutline fontWeight={'bold'} size={24}/> Lorem, ipsum dolor.</li>
                <li className=" flex justify-center items-center mb-3"><IoCheckmarkCircleOutline fontWeight={'bold'} size={24}/> Lorem, ipsum dolor.</li>
                <li className=" flex justify-center items-center mb-3"><IoCheckmarkCircleOutline fontWeight={'bold'} size={24}/> Lorem, ipsum dolor.</li>
            </ul>
            <Button text={'BUY NOW'} className={`border border-black ${props.btnClass}`}/>
        </div>
     );
}
 
export default PricingCard;