const Card = (props) => {
    return ( 
        <div className="card shadow shadow-grey-100 bg-white text-black rounded-md text-center flex flex-col justify-center items-center gap-5 w-11/12 md:w-1/4 px-4 py-14">
            {props.icon}
            <h3 className=" font-bold">{props.title}</h3>
            <p className=" text-sm">{props.text}</p>
        </div>
     );
}
 
export default Card;