import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import products from "./products.json";
import Product from "./components/Product";
import MainContext from "./MainContext";
import MoneySelect from "./components/MoneySelect";
import Basket from "./components/Basket";

function App() {
  const [money, setMoney] = useState(1000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  const data = {
    money,
    basket,
    setBasket,
    setMoney,
    total,
    products,
  };

  return (
    <>
      <MainContext.Provider value={data}>
        <MoneySelect />
        <Header money={money} />
        <div className="container products">
          {products.map((product) => (
            <Product
              key={product.id}
              basket={basket}
              setBasket={setBasket}
              product={product}
            />
          ))}
        </div>
        <Basket basket={basket} total={total} resetBasket={resetBasket} />
      </MainContext.Provider>
    </>
  );
}

export default App;
