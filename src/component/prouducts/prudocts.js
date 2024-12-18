import React from "react";
import starIcon from "../../images/icons/star.png";
import "./pruduct.css";
import { Container } from "react-bootstrap";
import { useGlobalContext } from "../../context/Globalstate";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Prudocts = ({ name, title, price, image, rating, id }) => {
  const { dispatch } = useGlobalContext();
  const navigate = useNavigate();
  const addToBasket = () => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            name: name,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
      } else {
        alert("Please Login First");
        navigate("/login");
      }
    });

    // dispatch({
    //   type: "ADD_TO_BASKET",
    //   item: {
    //     id: id,
    //     name: name,
    //     title: title,
    //     image: image,
    //     price: price,
    //     rating: rating,
    //   },
    // });
  };
  // console.log(basket);

  return (
    <>
      <Container>
        <div className="row ">
          <div className="col ">
            <div className="card h-100 product">
              <img src={image} className="card-img-top" alt="..." />
              <div className="card-body ">
                <h5 className="card-title"> {name}</h5>
                <p className="card-text">{title}</p>
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
                <button onClick={addToBasket}>Add to Basket</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Prudocts;
