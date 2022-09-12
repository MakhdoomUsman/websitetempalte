import React from "react";
import flag from "./../img/Group 3.png";
const Footer = () => {
  return (
    <div className="bg-Rec">
      <div className="grid grid-cols-5 mt-5">
        <div className="mt-5"></div>
        <div className=" col-span-2">
          <div className="font-bold mt-5 text-sm  uppercase text-white mb-2">
            info@industrialinnovationgroup.com
          </div>
          <div className="font-bold text-sm uppercase text-blue-600 mb-5">
            +9 716 5062555
          </div>
          <div className="font-normal text-sm text-white">
            <span>
              Taryam bld., Industrial Area 18, <br /> Maleha Street, Sharjah,{" "}
              <br />
              <br />
              PO Box 123428, United Arab Emirates
            </span>
          </div>
          <div className=" mb-24">
            <img src={flag} alt="" />
          </div>
          <div className="text-white text-xs">
            <span>© 2022 All rights reserved.</span>
          </div>
        </div>

        <div>
          <div className="text-white font-normal text-sm mt-5">
            <span>
              Business Center «Europa», 19th floor, <br /> Na Troskách 26,
              97401, Banská <br /> Bystrica, Slovak Republic <br /> <br />
              +4 214 83211651
            </span>
          </div>
          <div className="body">
            <div className=" mb-5">
              <img src={flag} alt="" />
            </div>
          </div>
          <div className="text-white font-normal text-sm">
            <span>
              Rue de la Pélisserie 16, 1204 <br /> Geneva, Switzerland <br />
              <br />
              +4 122 8108637
            </span>
          </div>
          <div className="body">
            <div className="mb-5">
              <img src={flag} alt="" />
            </div>
          </div>
        </div>

        <div className="mt-5"></div>
      </div>
    </div>
  );
};

export default Footer;
