import React from "react";
import arrow from "./../img/arrow.png";
import images from "./../img/bgMap.png";
import Newsbutton from "./Newsbutton";
const AboutIIG = () => {
  return (
    <>
      <div className="bg-Rec static">
        <div className="flex justify-center">
          <div className="w-[950px]">
            <div className="relative h-[450px]">
              <div className="absolute top-0 left-0 border-box">
                <img src={images} alt="bg-map" className="h-[450px] " />
              </div>
              <div className="absolute w-[560px] inset-x-1/4">
                <div className="font-bold text-blue-500 mt-10">About IIG</div>
                <div className="font-bold text-3xl text-justify text-white uppercase">
                  The global system integrator and leader in ID-documents, IT
                  systems development, and implementation
                </div>
                <div className="text-justify text-white">
                  The only scientific and industrial closed-cycle consortium
                  globally that provides electronic identification documents in
                  a single engineering and manufacturing chain. <br />
                  The only one in the world, carries out the construction of
                  turnkey facilities from design to production of finished
                  products in global government projects. <br />
                </div>
                <Newsbutton read="Read More"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutIIG;
