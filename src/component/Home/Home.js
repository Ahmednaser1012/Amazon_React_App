import Row from "react-bootstrap/Row";
import homeImg from "../../images/home.jpg";
// import shortid from "shortid";
import ProductImg1 from "../../images/products/1.png";
import ProductImg2 from "../../images/products/2.png";
import ProductImg3 from "../../images/products/3.png";
import ProductImg4 from "../../images/products/4.png";
import ProductImg5 from "../../images/products/5.png";
import ProductImg6 from "../../images/products/6.png";
import "./Home.css";
import Prudocts from "../prouducts/prudocts";

import shortid from "shortid";

function Home() {
  return (
    <div className="home">
      <div className="home_card">
        <img
          className="home-image"
          src={homeImg}
          alt="home-img"
          style={{ width: "100%" }}
        />

        <div className="container text-center">
          <div className="row g-2">
            <div className="col-lg-8 col-sm-12">
              <Prudocts
                id={shortid.generate()}
                image={ProductImg1}
                price={64}
                name={"HeadPhone"}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
                rating={5}
              />
            </div>
            <div
              className="col-lg-4 col-sm-12 "
              style={{
                marginBottom: "5%",
              }}
            >
              <Prudocts
                id={shortid.generate()}
                image={ProductImg2}
                price={6466}
                name={"Lap Top"}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
                rating={4}
              />
            </div>
          </div>
          <div
            className="row g-3"
            style={{
              marginBottom: "5%",
            }}
          >
            <div className="col-sm">
              <Prudocts
                id={shortid.generate()}
                image={ProductImg3}
                price={6466}
                name={"Printer"}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
                rating={4}
              />
            </div>
            <div className="col-sm">
              {" "}
              <Prudocts
                id={shortid.generate()}
                image={ProductImg4}
                price={6445}
                name={"Video Game"}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
                rating={3}
              />
            </div>
            <div className="col-sm">
              <Prudocts
                id={shortid.generate()}
                image={ProductImg5}
                price={90}
                name={"MelE PCG02"}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
                rating={4}
              />
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-12 col-md-6 col-sm-12 ">
              <Prudocts
                id={shortid.generate()}
                image={ProductImg6}
                price={150}
                name={"Samsung"}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
                rating={3}
              />
            </div>
            <div className="col-md-6 col-lg-4 col-sm-12">
              <Prudocts
                id={shortid.generate()}
                image={ProductImg6}
                price={50}
                name={"Samsung ultraviolet"}
                title="Razer Kraken Tournament Edition THX 7.1 Surround Sound Gaming Headset: Retractable Noise Cancelling Mic - USB DAC -  For PC, PS4, PS5, Nintendo Switch, Xbox One, Xbox Series X & S, Mobile – Black"
                rating={5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
