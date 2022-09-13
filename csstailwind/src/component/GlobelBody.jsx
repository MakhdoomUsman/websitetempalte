import React from "react";
import Edaps from "./../img/EDAPS.png";
import dji from "./../img/DJI_0923 2.png";
import dsco from "./../img/DSC01443 1.png";
import grafic from "./../img/Grafic _ai-01 2.png";
import img from "./../img/T_300_2 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const GlobelBody = () => {
  const [arr1, setArr1] = useState(false);
  const [arr2, setArr2] = useState(false);
  const [arr3, setArr3] = useState(false);
  const [arr4, setArr4] = useState(false);
  const [arr5, setArr5] = useState(false);
  return (
    <div className="">
      <div className="relative h-screen">
        <div
          className="absolute lg:w-[20%] lg:hover:w-[24%] lg:bg-edaps lg:h-full group bg-no-repeat transition-all duration-1000 lg:hover:z-40 p-5
        md:p-6 md:bg-edaps2 md:w-full md:h-[20%] sm:bg-edaps2 sm:w-full sm:h-[20%]"
        >
          <div className="font-bold text-1xl  text-white uppercase ">
            De BEERS
          </div>
          <div
            className="cursor-pointer md:visible sm:visible lg:invisible float-right"
            onClick={() => {
              setArr1(!arr1);
            }}
          >
            <FontAwesomeIcon
              icon={arr1 ? faAngleDown : faAngleUp}
              className=" absolute top-5"
            />
          </div>

          <div
            className={` font-normal w-[300px] text-xs lg:group-hover:visible text-white invisible  ${
              arr1 ? " md:visible md:w-[450px] md:h-[40]" : ""
            }`}
          >
            Industrial Innovation Group has developed and implemented a complex
            system architecture of the project for the production and
            simultaneous delivery of the De Beers passport document.
          </div>
        </div>
        <div className="absolute lg:w-[20%] lg:hover:w-[24%]  lg:bg-dji lg:h-full group bg-no-repeat transition-all duration-1000 lg:left-[20%] lg:top-[0%] lg:hover:z-30 p-6 md:bg-dji2 md:w-full md:h-[20%] md:left-0 sm:left-0 md:top-[20%] sm:bg-dji2 sm:h-[20%] sm:w-full sm:top-[20%]  xsm:bg-dji2 xsm:h-[20%] xsm:w-full xsm:top-[20%] ">
          <div className=" font-bold text-1xl  text-white uppercase left-[8%]">
            De BEERS
          </div>
          <div
            className="cursor-pointer md:visible sm:visible lg:invisible float-right"
            onClick={() => {
              setArr2(!arr2);
            }}
          >
            <FontAwesomeIcon
              icon={arr2 ? faAngleDown : faAngleUp}
              className=" absolute top-5"
            />
          </div>

          <div
            className={` font-normal w-[300px] text-xs lg:group-hover:visible text-white invisible  ${
              arr2 ? " md:visible md:w-[450px] md:h-[40]" : ""
            }`}
          >
            Industrial Innovation Group has developed and implemented a complex
            system architecture of the project for the production and
            simultaneous delivery of the De Beers passport document.
          </div>
        </div>
        <div className="absolute lg:w-[20%] lg:hover:w-[24%]  lg:bg-dsco lg:h-full group bg-no-repeat transition-all duration-1000 lg:left-[40%] lg:top-[0%] lg:hover:z-20 p-6 md:bg-dsco2 md:w-full md:h-[20%] md:left-0 sm:left-0 md:top-[40%] sm:bg-dsco2 sm:h-[20%] sm:w-full sm:top-[40%] ">
          <div className=" font-bold text-1xl  text-white uppercase ">
            De BEERS
          </div>
          <div
            className="cursor-pointer md:visible sm:visible lg:invisible float-right"
            onClick={() => {
              setArr3(!arr3);
            }}
          >
            <FontAwesomeIcon
              icon={arr3 ? faAngleDown : faAngleUp}
              className=" absolute top-5 "
            />
          </div>

          <div
            className={` font-normal w-[300px] text-xs lg:group-hover:visible text-white invisible  ${
              arr3 ? " md:visible md:w-[450px] md:h-[40]" : ""
            }`}
          >
            Industrial Innovation Group has developed and implemented a complex
            system architecture of the project for the production and
            simultaneous delivery of the De Beers passport document.
          </div>
        </div>
        <div className="absolute lg:w-[20%] lg:hover:w-[24%]  lg:bg-grafs lg:h-full group bg-no-repeat transition-all duration-1000 lg:left-[60%] lg:top-[0%] lg:hover:z-10 p-6 md:bg-grafs2 md:w-full md:h-[20%] md:left-0 sm:left-0 md:top-[60%] sm:bg-grafs2 sm:h-[20%] sm:w-full sm:top-[60%] ">
          <div className=" font-bold text-1xl  text-white uppercase ">
            De BEERS
          </div>
          <div
            className="cursor-pointer md:visible sm:visible lg:invisible float-right"
            onClick={() => {
              setArr4(!arr4);
            }}
          >
            <FontAwesomeIcon
              icon={arr4 ? faAngleDown : faAngleUp}
              className=" absolute top-5 "
            />
          </div>

          <div
            className={` font-normal w-[300px] text-xs lg:group-hover:visible text-white invisible  ${
              arr4 ? " md:visible md:w-[450px] md:h-[40]" : ""
            }`}
          >
            Industrial Innovation Group has developed and implemented a complex
            system architecture of the project for the production and
            simultaneous delivery of the De Beers passport document.
          </div>
        </div>
        <div className="absolute lg:w-[20%] lg:hover:w-[24%]  lg:bg-t300 lg:h-full group bg-no-repeat transition-all duration-1000 lg:left-[80%] lg:top-[0%] lg:hover:z-10 p-6 md:bg-t 3002 md:w-full md:h-[20%] md:left-0 sm:left-0 md:top-[80%] sm:bg-t3002 sm:h-[20%] sm:w-full sm:top-[80%] ">
          <div className=" font-bold text-1xl  text-white uppercase ">
            De BEERS
          </div>
          <div
            className="cursor-pointer md:visible sm:visible lg:invisible float-right"
            onClick={() => {
              setArr5(!arr5);
            }}
          >
            <FontAwesomeIcon
              icon={arr5 ? faAngleDown : faAngleUp}
              className=" absolute top-5"
            />
          </div>

          <div
            className={` font-normal w-[300px] text-xs lg:group-hover:visible text-white invisible  ${
              arr5 ? " md:visible md:w-[450px] md:h-[40]" : ""
            }`}
          >
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
