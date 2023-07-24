import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, index, activeIndex, onClick, name,icon }) => {
  const isActive = index === activeIndex;

  return (
    <Link
      to={to}
      className={`px-4 py-2 flex rounded-md flex-row gap-1 ${
        isActive ? "bg-[#007080] text-white" : "bg-none text-[#B8DBE0]"
      }`}
      onClick={() => onClick(index)}
    >
        {icon}
       {name}
    </Link>
  );
};

export default NavLink;
