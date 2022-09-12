import React from "react";
import Newsbutton from "./Newsbutton";
import NewsCard from "./NewsCard";
import arrow from "./../img/arrow.png";
const News = () => {
  return (
    <div className="relative h-[400px]">
      <NewsCard />
      <div>
        <div className="flex justify-center align-item-center mt-14">
          <button className="relative btnnewsstyle pl-3 py-2 flex bg-gradient-to-r from-purple-900 to-blue-900 hover:from-white hover:bg-none  mb-20 text-base hover:text-white hover:text-black">
            See All News{" "}
            <img
              src={arrow}
              alt="."
              className="arrow ml-2 pr-3 h-3 flex-col self-center"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default News;
