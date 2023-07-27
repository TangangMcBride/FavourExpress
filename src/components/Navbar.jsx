import React, { useState } from "react";
import {IoBusOutline} from "react-icons/io5";
import {AiOutlineCalendar} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import NavLink from "./NavLink";
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [activeIndex, setActiveIndex] = useState(null);

  const handleNavLinkClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <nav className="bg-[#007D8E] p-4 px-20 fixed  w-full flex justify-between items-center border-b border-[#027888]">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* Your Logo Component */}
        <span className="text-white font-semibold text-2xl">Bus Reservations</span>
        {/* Space for Icons (if needed) */}
        {/* Add your icons here (if needed) */}
      </div>

      {/* Nav Links */}
      <div className="flex space-x-10">
      <NavLink
          to="/FavourExpress/"
          index={0}
          activeIndex={activeIndex}
          onClick={handleNavLinkClick}
          icon={<IoBusOutline className="text-2xl"/>}
          name='Buses'
        />  
        <NavLink
          to="/FavourExpress/reservations"
          index={1}
          activeIndex={activeIndex}
          onClick={handleNavLinkClick}
          icon={<AiOutlineCalendar className="text-2xl"/>}
          name='Reservations'
        />  
        <NavLink
          to="FavourExpress/users"
          index={2}
          activeIndex={activeIndex}
          onClick={handleNavLinkClick}
          icon={<AiOutlineUser className="text-2xl"/>}
          name='Users'
        />  
        
        {/* <Link to="/" className="text-[#B8DBE0] hover:text-blue-100 flex flex-row gap-1">
        <IoBusOutline className="text-[#B8DBE0] text-2xl"/>
          Buses
        </Link>
        <Link to="/reservations" className="text-[#B8DBE0] hover:text-blue-100 flex flex-row gap-1">
          <AiOutlineCalendar className="text-[#B8DBE0] text-2xl"/>
          Reservations
        </Link>
        <Link to="/users" className="text-[#B8DBE0] hover:text-blue-100 flex flex-row gap-1">
        <AiOutlineUser className="text-[#B8DBE0] text-2xl"/>
          Users
        </Link> */}
      </div>

      {/* Profile Image Dropdown */}
      <div className="relative">
        <img
          src="/path/to/profile-pic.jpg"
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer"
          onClick={handleToggleMenu}
        />
        {isMenuOpen && (
          <ul className="absolute right-0 px-10 mt-2 py-2 bg-white border rounded-lg shadow-lg">
            <li className="px-8 py-2 hover:bg-gray-100">
              <a
                href="#"
                className=" text-gray-800 hover:text-blue-500"
              >
                View Profile
              </a>
            </li>
            <li className="px-8 py-2 hover:bg-gray-100">
              <a href="#" className=" text-gray-800 hover:text-blue-500">
                Sign Out
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
