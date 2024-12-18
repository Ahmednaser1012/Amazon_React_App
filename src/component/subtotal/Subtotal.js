import React from "react";
// import CurrencyFormat from "react-currency-format";
// import { getBasketTotal } from "../context/AppReducer";
import "./Subtotal.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/Globalstate";
const Subtotal = () => {
  const { basket } = useGlobalContext();
  const navigate = useNavigate();

  const getBasketTotal = () => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
  };

  return (
    <div className="subtotal">
      {/* <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      /> */}
      <p>
        Subtotal ({basket.length} items): <strong>{getBasketTotal()}</strong>
      </p>
      <button onClick={() => navigate("/")}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
