import React from "react";
import paypal from "../../Assets/images/paypal.png";
import mastercard from "../../Assets/images/master card.png";
import amazon from "../../Assets/images/amazon.png";
import americanExpress from "../../Assets/images/American express.png";
import googleplay from "../../Assets/images/google play.png";
import appStore from "../../Assets/images/app store.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <footer className=" bg-main-light  py-5 mt-auto">
        <div className="container-sm ">
          <h3 className="h5 fw-semibold mb-2">Get the FreshCart App</h3>
          <p>We will sent you a link, open it on your phone to download it</p>
          <div className="row py-3 border-bottom border-opacity-25 border-dark  d-flex justify-content-between align-items-center">
            <div className="col-md-9">
              <input
                type="text"
                className="form-control w-100"
                placeholder="Your Email"
              />
            </div>
            <div className="col-md-3 text-end">
              <button className="btn bg-main  text-light w-100">
                {" "}
                Share App Link
              </button>
            </div>
          </div>
          <div className="row d-flex py-3 border-bottom border-opacity-25 border-dark justify-content-between align-items-center">
            <div className="col-md-6 ">
              <span className="me-3 fw-semibold">Payment Partners</span>
              <img className="partner" src={amazon} alt="Amazon" />
              <img
                className="partner"
                src={americanExpress}
                alt="American Express"
              />
              <img className="partner" src={mastercard} alt="Master Card" />
              <img className="partner" src={paypal} alt="Paypal" />
            </div>
            <div className="col-md-6 text-lg-end">
              <span className="me-3 fw-semibold">
                Get Deliveries with FreshCart
              </span>
              <Link to={"/"}>
                <img className=" partner" src={appStore} alt="App Store" />
              </Link>
              <Link to={"/"}>
                <img className="partner" src={googleplay} alt="Google Play" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
