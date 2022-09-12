import React from "react";
import logo from "./../img/IIG1.png";
import worldIcon from "./../img/Vector.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Header = () => {
  let Links = [
    { name: "About llG", link: "/" },
    { name: "Member of IIG", link: "/" },
    { name: "Products", link: "/" },
    { name: "Globel Project Experience", link: "/" },
    { name: "Strategic Aliance", link: "/" },
    { name: "Contact Us", link: "/" },
    { name: "News", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="relative lg:flex py-4 items-center justify-between lg:px-10 px-7">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="cursor-pointer" />
        </div>
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="text-2xl text-white absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          <FontAwesomeIcon icon={open ? faXmark : faBars} />
        </div>
        <ul
          className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 bg-mainPage xl:bg-mainPage2 transition-all duration-500 ease-in ${
            open ? "top-20 z-[1]" : "top-[-490px] "
          }`}
        >
          <li className="cursor-pointer text-white font-normal lg:ml-8 lg:my-0 my-7">
            About llG
          </li>
          <li className="cursor-pointer text-white font-normal lg:ml-8 lg:my-0 my-7">
            Member of IIG
          </li>
          <li className=" cursor-pointer text-white font-normal lg:ml-8 lg:my-0 my-7">
            Products
          </li>
          <li className=" cursor-pointer text-white font-normal lg:ml-8 lg:my-0 my-7">
            Globel Project Experience
          </li>
          <li className="cursor-pointer text-white font-normal lg:ml-8 lg:my-0 my-7">
            Strategic Aliance
          </li>
          <li className="cursor-pointer text-white font-normal lg:ml-8 lg:my-0 my-7">
            Contact Us
          </li>
          <li className="cursor-pointer text-white font-normal lg:ml-8 lg:my-0 my-7">
            News
          </li>
        </ul>

        <div
          className={`lg:flex  lg:items-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 opacity-100" : "top-[-490px] "
          } lg:opacity-100 opacity-0`}
        >
          <div className="img">
            <img src={worldIcon} alt="logo" />
          </div>

          <div className="ml-2">
            <p>
              <span className="text-white mb-2">En</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
