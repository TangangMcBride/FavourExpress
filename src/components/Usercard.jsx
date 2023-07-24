import React from "react";

const Usercard = ({ image, name, occupation }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-4">
      <img src={image} alt={name} className="w-24 h-24 rounded-full mx-auto" />
      <div className="mt-4 text-center" >
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{occupation}</p>
      </div>
    </div>
  );
};

export default Usercard;
