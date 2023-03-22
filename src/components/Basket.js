import React from "react";
import BasketItem from "./BasketItem";

function Basket({ basket, total }) {
  return (
    <>
      {basket.map((item) => (
        <BasketItem item={item} />
      ))}
      <div>Toplam: {total} $ </div>
    </>
  );
}

export default Basket;
