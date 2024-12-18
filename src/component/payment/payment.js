import React from "react";
import { useGlobalContext } from "../../context/Globalstate";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./payment.css";

const Payment = () => {
  const { user, basket } = useGlobalContext();
  const navigate = useNavigate();
  const getBasketTotal = () => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
  };
  const handelButton = () => {
    alert("Your Order Has Been Placed");
    navigate("/orders");
  };
  const handelForm = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="cardd mt-50 mb-50 ">
        <h2>
          {" "}
          CheckOut (
          <Link to="/checkout" className="items">
            {basket.length} Items
          </Link>
          )
        </h2>
        <div className="cardd-title mx-auto textt">Credit card</div>

        <form onSubmit={handelForm}>
          <span id="card-header">Saved cards:</span>
          <div className="row row-1">
            <div className="col-2">
              <img
                className="img-fluid"
                src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
              />
            </div>
            <div className="col-7">
              <input type="text" placeholder="**** **** **** 3193" />
            </div>
            <div className="col-3 d-flex justify-content-center">
              <a href="#">Remove card</a>
            </div>
          </div>
          <div className="row row-1">
            <div className="col-2">
              <img
                className="img-fluid"
                src="https://img.icons8.com/color/48/000000/visa.png"
              />
            </div>
            <div className="col-7">
              <input type="text" placeholder="**** **** **** 4296" />
            </div>
            <div className="col-3 d-flex justify-content-center">
              <a href="#">Remove card</a>
            </div>
          </div>
          <span id="card-header">Add new card:</span>
          <div className="row-1 ">
            <div className="row row-2 bb">
              <span id="card-inner">Card holder name</span>
            </div>
            <div className="row row-2 bb">
              <input type="text" placeholder="Ahmed Nasser" />
            </div>
          </div>
          <div className="row three">
            <div className="col-7">
              <div className="row-1">
                <div className="row row-2">
                  <span id="card-inner">Card number</span>
                </div>
                <div className="row row-2">
                  <input type="text" placeholder="5134-5264-4" />
                </div>
              </div>
            </div>
            <div className="col-2 boox">
              <input type="text" placeholder="Exp. date" />
            </div>
            <div className="col-2 boox">
              <input type="text" placeholder="CVV" />
            </div>
          </div>

          <p>
            Order Total :
            <strong style={{ color: "rgb(146, 82, 17)" }}>
              $ {getBasketTotal().toFixed(2)}
            </strong>
          </p>
          <button className="bttn d-flex mx-auto" onClick={handelButton}>
            <b>Buy Now </b>
          </button>
        </form>
      </div>
    </>
  );
};
export default Payment;
