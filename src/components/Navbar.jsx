import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:bg-white hover:text-black rounded-lg">Home</li>
        <li className="p-4 hover:bg-white hover:text-black rounded-lg">
          Company
        </li>
        <li className="p-4 hover:bg-white hover:text-black rounded-lg">
          Resources
        </li>
        <li className="p-4 hover:bg-white hover:text-black rounded-lg">
          About
        </li>
        <li className="p-4 hover:bg-white hover:text-black rounded-lg">
          Contacts
        </li>
        <li className="p-4 hover:bg-white hover:text-black rounded-lg">
          Address
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">REACT</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contacts</li>
          <li className="p-4">Address</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
