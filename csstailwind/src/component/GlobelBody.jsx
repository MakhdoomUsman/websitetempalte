import React from "react";
import Edaps from "./../img/EDAPS.png";
import dji from "./../img/DJI_0923 2.png";
import dsco from "./../img/DSC01443 1.png";
import grafic from "./../img/Grafic _ai-01 2.png";
import img from "./../img/T_300_2 1.png";

const GlobelBody = () => {
  return (
    <div className="">
      <div className="relative h-screen">
        <div className="absolute w-[20%] hover:w-[24%] bg-edaps h-full group transition-all duration-1000 hover:z-40 p-5">
          <div className="font-bold text-1xl  text-white uppercase ">
            De BEERS
          </div>
          <div className=" font-normal max-w-[300px] min-w-[300px] text-xs group-hover:visible  text-white childclass invisible">
            Industrial Innovation Group has developed and implemented a complex
            system architecture of the project for the production and
            simultaneous delivery of the De Beers passport document.
          </div>
        </div>
        <div className="absolute w-[20%] hover:w-[24%]  bg-dji h-full group transition-all duration-1000 left-[20%] hover:z-30 p-6">
         
          <div className=" font-bold text-1xl  text-white uppercase left-[8%]">
            De BEERS
          </div>
          <div className=" font-normal max-w-[300px] min-w-[300px] text-xs group-hover:visible text-white childclass invisible ">
            Industrial Innovation Group has developed and implemented a complex
            system architecture of the project for the production and
            simultaneous delivery of the De Beers passport document.
          </div>
        </div>
        <div className="absolute w-[20%] hover:w-[24%]  bg-dsco h-full group transition-all duration-1000 left-[40%] hover:z-20 p-6">
         
          <div className=" font-bold text-1xl  text-white uppercase ">
            De BEERS
          </div>
          <div className=" font-normal max-w-[300px] min-w-[300px] text-xs group-hover:visible text-white childclass invisible ">
            Industrial Innovation Group has developed and implemented a complex
            system architecture of the project for the production and
            simultaneous delivery of the De Beers passport document.
          </div>
        </div>
        <div className="absolute w-[20%] hover:w-[24%]  bg-grafs h-full group transition-all duration-1000 left-[60%] hover:z-10 p-6">
         
          <div className=" font-bold text-1xl  text-white uppercase ">
            De BEERS
          </div>
          <div className=" font-normal max-w-[300px] min-w-[300px] text-xs group-hover:visible text-white childclass invisible">
            Industrial Innovation Group has developed and implemented a complex
            system architecture of the project for the production and
            simultaneous delivery of the De Beers passport document.
          </div>
        </div>
        <div className="absolute w-[20%] bg-t300 h-full group transition-all duration-1000 left-[80%] p-6">
         
          <div className=" font-bold text-1xl  text-white uppercase ">
            De BEERS
          </div>
          <div className=" font-normal max-w-[300px] min-w-[300px] text-xs group-hover:visible text-white childclass invisible">
            Industrial Innovation Group has developed and implemented a complex
            system architecture of the project for the production and
            simultaneous delivery of the De Beers passport document.
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default GlobelBody;
