import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../images/header-logo.png";
import searchIcon from "../../images/icons/searchIcon.png";
import shoppingCart from "../../images/icons/shopping-cart.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./header.css";
import { useGlobalContext } from "../../context/Globalstate";
import { auth } from "../../firebase";

function Header() {
  const { user, basket } = useGlobalContext();
  // const navigate = useNavigate();
  // console.log(user?.email);
  const handelAuthantication = () => {
    if (user) {
      auth.signOut();
    } else {
      // alert("You need to sign in Amazon.eg");
    }
  };
  return (
    <Navbar expand="lg" bg="dark">
      <Container fluid className="nav">
        <NavLink to="/">
          <img className="header-logo" src={Logo} alt="logo-img" />
        </NavLink>

        {/* ********************************* */}
        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ backgroundColor: "white" }}
        />
        {/* ************************************ */}
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>

          {/* ********************************* */}
          <Form className="d-flex header-search">
            <Form.Control
              type="Search"
              placeholder=" Search Amazon.eg "
              className="me-2 "
              aria-label="Search"
            />

            <Button
              style={{ backgroundColor: "#cd9042" }}
              className="searchIcon"
            >
              <img
                className="header-searchIcon"
                src={searchIcon}
                alt="search-icon"
              />
            </Button>
          </Form>
          {/* ************************************************ */}
          <div className="header-nav">
            <NavLink
              to={!user && "/login"}
              style={{ textDecoration: "none" }}
              onClick={handelAuthantication}
            >
              <div className="header-option">
                <span className="header-optionLineOne">
                  Hello :{/* {user ? user.email : "Guest"} */}
                  {user ? `${user.email}` : "Guest"}
                </span>
                <span className="header-optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </NavLink>
            <NavLink to="/orders" style={{ textDecoration: "none" }}>
              <div className="header-option">
                <span className="header-optionLineOne">Returns</span>
                <span className="header-optionLineTwo">& Orders</span>
              </div>
            </NavLink>
            <div className="header-option">
              <span className="header-optionLineOne">Your</span>
              <span className="header-optionLineTwo">Prime</span>
            </div>
            <NavLink to="/checkout" style={{ textDecoration: "none" }}>
              <div className="header-optionBasket">
                <img src={shoppingCart} />
                <span className="header-optionLineTwo header-basketCount">
                  {basket.length > 0 ? (
                    <span style={{ color: "orange" }}>{basket.length}</span>
                  ) : (
                    <span>0</span>
                  )}
                </span>
              </div>
            </NavLink>
          </div>

          {/* ************************************************ */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
