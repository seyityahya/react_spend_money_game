import React, { useContext } from "react";
import MainContext from "../MainContext";
import { moneyFormat } from "../helper";

function Header() {
  const { money, total } = useContext(MainContext);
  return (
    <div>
      {total > 0 && money - total !== 0 && (
        <div>Harcayacak {moneyFormat(money - total)} $ paranız kaldı!</div>
      )}
      {total === 0 && (
        <div>Harcayacak {moneyFormat(money)} $ paranız kaldı!</div>
      )}
      {money - total === 0 && (
        <div>Paran bitti parasız insanı sadece annesi sever</div>
      )}
    </div>
  );
}

export default Header;
