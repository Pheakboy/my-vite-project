import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-10 text-white ">
      <h2 className="w-full text-3xl font-bold text-[#00df9a] "><a href="#">React</a></h2>
      <ul className=" hidden md:flex">
        <li className="p-4 cursor-pointer hover:text-[#00df9a] ">Company</li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a]">Product</li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a]"><Link to='https://chat.openai.com/'>Resource</Link></li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a]"><Link to='/about'>About</Link></li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a]"><Link to ='/contact'>Contact</Link></li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav?  <AiOutlineClose size={20} /> :  <AiOutlineMenu size={20} />}
      </div>
      <div className={nav? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500": "fixed left-[-100%]"}>
        <h2 className="w-full text-3xl font-bold text-[#00df9a] m-4">React</h2>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Product</li>
          <li className="p-4 border-b border-gray-600"><Link to='https://chat.openai.com/'>Resource</Link></li>
          <li className="p-4 border-b border-gray-600"><Link to='/about'>About</Link></li>
          <li className="p-4 border-b border-gray-600"><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
