import Button from "../UI/Button";

const Experience = () => {
    return ( 
        <div className=" bg-black text-white text-center px-5 py-16">
            <h3 className=" text-3xl font-bold">Worried About Experience?</h3>
            <p className=" text-lg tracking-wider my-3">We have over fifteen years of experience in financial sphere in the US.</p>
            <Button text={'GET STARTED'} className={'bg-white text-black hover:text-white'} />
        </div>
     );
}
 
export default Experience;