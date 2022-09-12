import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const Newsbutton = (props) => {
  return (

    <div>
      <div className="flex justify-center align-item-center mt-14">
        <button className="relative btnstyle pl-3 py-2 flex bg-gradient-to-r from-purple-900 to-blue-900 hover:bg-none mb-20 text-base hover:text-white transition-all ease-in-out duration-1000">
          {props.read}{" "}
          <FontAwesomeIcon icon={faArrowRightLong} className="arrow ml-2 pr-3 h-5 flex-col self-center" />
        </button>
      </div>
    </div>
  );
};

export default Newsbutton;
