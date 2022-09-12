import React from "react";

import ProductRow1 from "./ProductRow1";
import ProductRow2 from "./ProductRow2";

export const Prodcuts = () => {
  return (
    <div className="bg-white mt-10 ">
      <div className="flex justify-center align-center font-bold text-2xl uppercase">
        Products
      </div>
      <div className="mt-10 mb-20">
        <ProductRow1 />
        <ProductRow2 />
        <ProductRow1 />
        <ProductRow2 />
        <ProductRow1 />
        <ProductRow2 />
      </div>
    </div>
  );
};
