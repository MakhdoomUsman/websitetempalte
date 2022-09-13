import React from "react";
import img1 from "./../img/card/img1.png";
import img2 from "./../img/card/img2.png";
import img3 from "./../img/card/img3.png";

const NewsCard = () => {
  return (
    <div>
      <div className="flex justify-center align-center font-bold text-2xl uppercase mb-[5vh]">
        News
      </div>
      <div className=" relative h-[30vh] ">
        <div className="absolute h-[31vh] w-[20%] overflow-hidden group left-[18%] bg-gradient-to-b from-transparent via-transparent to-indigo-500 hover:to-indigo-400 ">
         
         <img src={img1} alt="." className="relative group-hover:scale-105 h-[31vh] w-[100vh] z-[-1] transition-all duration:1000" />
         

          <div className="text-white absolute bottom-1 left-1">
            <div className="font-bold text-sm uppercase">
              INDUSTRIAL INNOVATION GROUP and MOZER have...
            </div>
            <div className="font-normal text-xs">
              When developing the original futuristic design...
            </div>
          </div>
        </div>
        <div className="absolute h-[31vh] w-[20%] left-[41%] overflow-hidden group bg-gradient-to-b from-transparent via-transparent to-indigo-500 hover:to-indigo-400 ">
          <img src={img2} alt="." className="relative group-hover:scale-105 h-[31vh] w-[100vh] z-[-1] " />
          <div className="text-white absolute bottom-1 left-1">
            <div className="font-bold text-sm uppercase">
              INDUSTRIAL INNOVATION GROUP and MOZER have...
            </div>
            <div className="font-normal text-xs">
              When developing the original futuristic design...
            </div>
          </div>
        </div>
        <div className="absolute h-[31vh] w-[20%] left-[64%] overflow-hidden group bg-gradient-to-b from-transparent via-transparent to-indigo-500 hover:to-indigo-400 ">
          <img src={img3} alt="." className="relative group-hover:scale-105 h-[31vh] w-[100vh] z-[-1] " />
          <div className="text-white absolute bottom-1 left-1">
            <div className="font-bold text-sm uppercase">
              INDUSTRIAL INNOVATION GROUP and MOZER have...
            </div>
            <div className="font-normal text-xs">
              When developing the original futuristic design...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
