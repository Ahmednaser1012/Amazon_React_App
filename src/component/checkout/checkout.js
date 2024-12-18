import React from "react";
import checkoutImg from "../../images/checkoutAd.jpg";
import "./checkout.css";
import { useGlobalContext } from "../../context/Globalstate";
import ChackoutProduct from "../checkoutProduct/checkoutProduct";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { user, basket } = useGlobalContext();

  const navigate = useNavigate();

  const getBasketTotal = () => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
  };
  return (
    <>
      {user ? (
        <div className="checkout">
          <div className="checkout-left">
            <img className="checkout-ad" src={checkoutImg} />
            <div>
              <h2 className="gest">
                Hello,
                {user ? <p>{user.email}</p> : <p>Guest</p>}
              </h2>

              {basket.length > 0 ? (
                basket.map((item) => (
                  <>
                    <ChackoutProduct
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                    />

                    {/* <Prudocts
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              /> */}
                  </>
                ))
              ) : (
                <p>
                  You have no items in your basket.To buy one or more
                  items,click"Add to basket".
                </p>
              )}

              <h2 className="checkout-title">
                Your shopping Basket{" "}
                <p>
                  Subtotal ({basket.length} items):{" "}
                  <strong style={{ color: "rgb(146, 82, 17)" }}>
                    {getBasketTotal().toFixed(2)}$
                  </strong>
                </p>
                {basket.length > 0 && (
                  <button onClick={() => navigate("/payment")}>
                    Proceed to Checkout
                  </button>
                )}
                {/* <button onClick={() => navigate("/payment")}>
                  Proceed to Checkout
                </button> */}
              </h2>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="text-center">
                {
                  <h1 className="text-center" style={{ marginTop: "20%" }}>
                    Please Login First{" "}
                    <span
                      style={{ color: "orange", cursor: "pointer" }}
                      onClick={() => navigate("/login")}
                    >
                      Click Here
                    </span>
                  </h1>
                }
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
