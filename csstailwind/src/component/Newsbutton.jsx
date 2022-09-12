import React from "react";
import arrow from "./../img/arrow.png";
const Newsbutton = () => {
  return (
    <div>
      <div className=" flex justify-center align-item-center mt-14">
        <button className="px-3 py-2 flex bg-gradient-to-r from-purple-900 to-blue-900 text-white font-small mb-20">
          SEE ALL NEWS{" "}
          <img src={arrow} alt="." className=" ml-2 h-3 flex-col self-center" />
        </button>
      </div>
    </div>
  );
};

export default Newsbutton;
