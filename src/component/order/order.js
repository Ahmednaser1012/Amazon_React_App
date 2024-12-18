import React from "react";
import { useGlobalContext } from "../../context/Globalstate";
import ChackoutProduct from "../checkoutProduct/checkoutProduct";
import { useNavigate } from "react-router-dom";
const Order = () => {
  const { basket, user } = useGlobalContext();
  const navigate = useNavigate();
  const getBasketTotal = () => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
  };
  return (
    <>
      {user ? (
        <div style={{ marginTop: "10%" }}>
          <div className="checkout">
            <div className="checkout-left">
              <div>
                {basket.map((item) => (
                  <>
                    <ChackoutProduct
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                      hiddinBtn
                    />
                  </>
                ))}
                <p>
                  Order Total :
                  <strong style={{ color: "rgb(146, 82, 17)" }}>
                    $ {getBasketTotal().toFixed(2)}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 style={{ marginTop: "20%" }}>
          please login to see your order{" "}
          <span
            style={{ color: "orange", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Click Here
          </span>
        </h1>
      )}
      ;
    </>
  );
};

export default Order;
