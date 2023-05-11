const Button = (props) => {
    return ( 
        <button className={`${props.className} mt-4 px-7 py-2 text-base rounded hover:bg-gray-900`}>{props.text}</button>
     );
}
 
export default Button;