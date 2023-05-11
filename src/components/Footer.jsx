import logo from '../assets/logowhite.png'
const Footer = () => {
    return ( 
        <footer className=" px-5 md:px-24 py-16 bg-black text-white">
            <div className=" md:px-10 pb-10 border-b border-white flex flex-col md:flex-row md:items-center md:gap-64">
                <img src={logo} className=" cursor-pointer w-24" alt="logo" />
                <nav className=" w-full flex flex-wrap gap-5 mt-10 md:mt-0">
                    <a href="/" className=" w-2/5 md:w-1/5 text-gray-400">HOME</a>
                    <a href="/" className=" w-2/5 md:w-1/5 hover:text-gray-400">ABOUT US</a>
                    <a href="/" className=" w-2/5 md:w-1/5 hover:text-gray-400">BLOG</a>
                    <a href="/" className=" w-2/5 md:w-1/5 hover:text-gray-400">CONTACT</a>
                </nav>
            </div>
            <h5 className=" text-lg font-semibold mt-4 italic">2019 Zetter All Right Preserved</h5>
        </footer>
     );
}
 
export default Footer;