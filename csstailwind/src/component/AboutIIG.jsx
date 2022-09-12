import React from "react";
import arrow from "./../img/arrow.png";
const AboutIIG = () => {
  return (
    <>
      <div className="bg-Rec">
        <div className="bg-recMap">
          <div className="flex justify-center">
            <div className="w-[560px]">
              <div className="font-bold text-blue-500 mt-10">
                About IIG
              </div>
              <div className="font-bold text-3xl text-justify text-white uppercase">
                The global system integrator and leader in ID-documents, IT
                systems development, and implementation
              </div>
              <div className="text-justify text-white">
                The only scientific and industrial closed-cycle consortium
                globally that provides electronic identification documents in a
                single engineering and manufacturing chain. <br />
                The only one in the world, carries out the construction of
                turnkey facilities from design to production of finished
                products in global government projects. <br />
              </div>
              <div className=" flex justify-center align-item-center mt-14">
                <button className="px-3 py-2 flex bg-gradient-to-r from-purple-900 to-blue-900 text-white font-small mb-8">
                  Read More{" "}
                  <img
                    src={arrow}
                    alt="."
                    className=" ml-2 h-3 flex-col self-center"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutIIG;
