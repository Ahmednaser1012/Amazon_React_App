import React from "react";
import { useGlobalContext } from "../../context/Globalstate";
import "./checkoutProduct.css";
import starIcon from "../../images/icons/star.png";

const CheckoutProduct = ({
  id,
  name,
  title,
  price,
  image,
  rating,
  hiddinBtn,
}) => {
  const { dispatch } = useGlobalContext();
  const removToBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
      },
    });
    // console.log(basket);
  };
  return (
    <>
      <div>
        <div className="card mb-3 card-chackOut" style={{ maxwidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4 image">
              <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text ">{title}</p>
                <p className="card-text">
                  <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                  </p>
                  <div className="product-rating">
                    {Array(rating)
                      .fill()
                      .map((_, i) => (
                        <p key={i}>
                          <img src={starIcon} />
                        </p>
                      ))}
                  </div>
                </p>
                <div>
                  {!hiddinBtn && (
                    <button onClick={removToBasket}>Remove from Basket</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutProduct;
