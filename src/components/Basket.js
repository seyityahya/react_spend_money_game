import React from "react";
import BasketItem from "./BasketItem";
import { moneyFormat } from "../helper";

function Basket({ basket, total, resetBasket }) {
  return (
    <>
      <div className="basket-container container">
        <h3>Alışveriş Detayları</h3>
        <div className="basket-product">
          {basket.map((item) => (
            <ul>
              <BasketItem key={item.id} item={item} />
            </ul>
          ))}
        </div>
        <div className="total">Toplam: {moneyFormat(total)} $ </div>
        <button className="basket-reset-btn" onClick={resetBasket}>
          Sepeti Sıfırla
        </button>
      </div>
    </>
  );
}

export default Basket;
