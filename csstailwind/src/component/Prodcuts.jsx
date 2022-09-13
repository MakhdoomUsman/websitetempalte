import React from "react";
import ProductRow1 from "./ProductRow1";
import ProductRow2 from "./ProductRow2";

export const Prodcuts = () => {
  return (
    <div className="bg-white product pb-10 hover:bg-mainPage2 hover:text-white transition-all duration-1000 group">
      <div className="flex justify-center align-center font-bold text-3xl pt-10 uppercase">
        Products
      </div>
      <div className="pt-10  text-white">
        <ProductRow1 />
        <ProductRow2 />
        <ProductRow1 />
        <ProductRow2 />
      </div>
    </div>
  );
};
