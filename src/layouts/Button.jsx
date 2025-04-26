import React from "react";

const Button = ({ title }) => {
  
  return (
    <div>
      <button className=" bg-[#0054AD] text-[#FFFFFF] px-4 py-2 rounded-md hover:bg-[#0054AD] transition duration-300 ease-in-out">
      {title}
      </button>
    </div>
  );
};

export default Button;
