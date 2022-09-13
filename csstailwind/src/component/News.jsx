import React from "react";
import Newsbutton from "./Newsbutton";
import NewsCard from "./NewsCard";
import arrow from "./../img/arrow.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
const News = () => {
  return (
    <div className="relative h-[60vh] pt-[5vh]">
      <NewsCard />
      <div>
        <div className="flex justify-center align-center pt-[5vh]">
          <button className="relative btnnewsstyle pl-3 py-2 flex bg-gradient-to-r group from-purple-900 to-blue-900 hover:bg-none text-base hover:text-black transition-all duration-1000">
            See All News{" "}
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className="arrow ml-2 pr-3 h-5 flex-col self-center"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default News;
