import React from "react";
import icons from "./../img/icon.png";
const ProductRow1 = () => {
  const list = [
    {
      id: 1,
      icon: "./../img/icon.png",
      name: "Electronic driving license",
    },
    {
      id: 2,
      icon: "./../img/icon",
      name: "Electronic driving 2",
    },
    {
      id: 3,
      icon: "./../img/icon",
      name: "Electronic driving  3",
    },
    {
      id: 4,
      icon: "./../img/icon",
      name: "Electronic driving license 4",
    },
    {
      id: 5,
      icon: "./../img/icon",
      name: "Electronic driving license 5",
    },
    {
      id: 6,
      icon: "./../img/icon",
      name: "Electronic driving license 6",
    },
    {
      id: 7,
      icon: "./../img/icon",
      name: "Electronic driving license 7",
    },
    {
      id: 8,
      icon: "./../img/icon",
      name: "Electronic driving license 8",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-8 mx-32 mt-1">
        {list.map((user, id) => (
          <div className=" grid place-items-center h-32 w-32 rounded-full bg-[#00145c] group-hover:transition-all duration-1000 group-hover:border group-hover:bg-[#0000] group-hover:border-white">
            <img src={user.icon} alt="img" className="h-5" />
            <div className="text-center text-[14px] my-auto mt-[-2px] group-hover:text-none">
              {user.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRow1;
