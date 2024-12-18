import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header/Header";
import Login from "./component/login/login";
import { useGlobalContext } from "./context/Globalstate";
import { useEffect } from "react";
import { auth } from "./firebase";
import Home from "./component/Home/Home";
import Checkout from "./component/checkout/checkout";
import Payment from "./component/payment/payment";
import Order from "./component/order/order";
function App() {
  const { dispatch } = useGlobalContext();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="*" element={<h1>Page Not Found </h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Payment />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Order />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
