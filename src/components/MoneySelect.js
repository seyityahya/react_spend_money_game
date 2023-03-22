import React, { useContext } from "react";
import MainContext from "../MainContext";

function MoneySelect() {
  const { setMoney, setBasket } = useContext(MainContext);

  const moneyChange = (buy) => {
    setMoney(buy);
    setBasket([]);
  };
  return (
    <>
      <button onClick={() => moneyChange(10000000)}>Bill Gates</button>
      <button onClick={() => moneyChange(200000000)}>Elon Musk</button>
    </>
  );
}

export default MoneySelect;
