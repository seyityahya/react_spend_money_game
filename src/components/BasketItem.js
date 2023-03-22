import React from "react";
import { useContext } from "react";
import MainContext from "../MainContext";

function BasketItem({ item }) {
  const { products } = useContext(MainContext);
  const product = products.find((p) => p.id === item.id);
  return (
    <div>
      {product.title} x {item.amount}
    </div>
  );
}

export default BasketItem;
