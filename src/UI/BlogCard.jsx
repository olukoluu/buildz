const BlogCards = (props) => {
    return ( 
        <div className=" shadow-md">
            <img src={props.img} alt="blog image" className=" md:h-64 w-full" />
            <div className=" p-6 pb-12">
                <h3 className=" cursor-pointer hover:underline text-xl font-bold">{props.title}</h3>
                <h4 className=" my-2 font-semibold">POSTED BY <span className=" text-gray-500">{props.author}</span></h4>
                <p className=" text-sm">{props.text}</p>
            </div>
        </div>
     );
}
 
export default BlogCards;