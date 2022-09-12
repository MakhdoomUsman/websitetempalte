import React from "react";
import Edaps from "./../img/EDAPS.png";
import dji from "./../img/DJI_0923 2.png";
import dsco from "./../img/DSC01443 1.png";
import grafic from "./../img/Grafic _ai-01 2.png";
import img from "./../img/T_300_2 1.png";
const GlobelBody = () => {
  return (
    <div className="">
      <div className="grid grid-cols-5 ">
        <div className="relative text-align-center  ">
          <img src={Edaps} alt="." className="object-fill w-[863px]" />
          <div className="absolute top-8 left-12 font-bold text-1xl  text-white uppercase">
            De BEERS
          </div>
        </div>
        <div className="relative text-align-center ">
          <img src={dji} alt="" className="object-fill w-[863px]" />
          <div className="absolute top-8 left-12 font-bold text-1xl  text-white uppercase">
            INTERPOL
          </div>
        </div>
        <div className="relative text-align-center ">
          <img src={dsco} alt="" className="object-fill  w-[863px]" />
          <div className="absolute top-8 left-12  font-bold text-1xl  text-white uppercase">
            NASPS
          </div>
        </div>
        <div className="relative text-align-center ">
          <img src={grafic} alt="" className="object-fill w-[863px]" />
          <div className="absolute top-8 left-12 font-bold text-1xl  text-white uppercase">
            IPRS IN KENYA
          </div>
        </div>
        <div className="relative text-align-center ">
          <img src={img} alt="" className="object-fill w-[863px]" />
          <div className="absolute top-8 left-12 font-bold text-1xl  text-white uppercase">
            ECONOMIC EFFECT & STATE BUDGET REVENUE
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobelBody;
