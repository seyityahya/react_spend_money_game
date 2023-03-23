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
      <div className="para-seçme">
        <button onClick={() => moneyChange(200000000000)}>Elon Musk</button>
        <button onClick={() => moneyChange(120000000000)}>Jeff Bezos</button>
        <button onClick={() => moneyChange(100000000000)}>Bill Gates</button>
        <button onClick={() => moneyChange(70000000000)}>
          Mark Zuckerberg
        </button>
        <button onClick={() => moneyChange(2000000000)}>Acun Ilıcalı</button>
      </div>
    </>
  );
}

export default MoneySelect;
