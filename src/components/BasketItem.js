import React from "react";
import { useContext } from "react";
import MainContext from "../MainContext";

function BasketItem({ item }) {
  const { products } = useContext(MainContext);
  const product = products.find((p) => p.id === item.id);
  return (
    <li className="basket-item" key={product.id}>
      <img src={product.image} alt="" />
      {product.title}
      <span> x {item.amount}</span>
    </li>
  );
}

export default BasketItem;
