import React, { useContext } from "react";
import MainContext from "../MainContext";
import { moneyFormat } from "../helper";

function Header() {
  const { money, total } = useContext(MainContext);
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          Harcayacak <span>{moneyFormat(money - total)} $</span> paranız kaldı!
        </div>
      )}
      {total === 0 && (
        <div className="header">
          Harcayacak <span>{moneyFormat(money)} $</span> paranız kaldı!
        </div>
      )}
      {money - total === 0 && (
        <div className="header">
          Paran bitti parasız insanı sadece annesi sever
        </div>
      )}
    </>
  );
}

export default Header;
