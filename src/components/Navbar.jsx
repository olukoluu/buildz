import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi'
import logo from '../assets/logo.png'
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    return ( 
        <nav className=" fixed w-full bg-white shadow flex items-center justify-between px-5 md:px-24 py-3 z-10">
            <img src={logo} alt="buildz logo" className=" cursor-pointer w-24" />
            <HiMenuAlt3 size={30} className={'md:hidden'} onClick={toggle}/>
            <div className={`${isOpen ? 'translate-x-0' : 'translate-x-full'} absolute md:static top-14 right-0 p-8 md:p-0 bg-gray-50 md:bg-white w-4/5 md:w-3/5 flex flex-col md:flex-row gap-10 md:gap-0 justify-between transition-all duration-1000  md:translate-x-0`}>
                <a href="/" className="text-gray-500">HOME</a>
                <a href="/" className=" hover:text-gray-500">PRICING</a>
                <a href="/" className=" hover:text-gray-500">ABOUT US</a>
                <a href="/" className=" hover:text-gray-500">SERVICES</a>
                <a href="/" className=" hover:text-gray-500">BLOG</a>
                <a href="/" className=" hover:text-gray-500">CONTACT</a>
            </div>
        </nav>
     );
}
 
export default Navbar;