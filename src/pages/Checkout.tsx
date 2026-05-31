import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cash from "../assets/checkout/icon-cash-on-delivery.svg"

export default function Checkout() {
  const [payment, setPayment] = useState("e-Money")
  const navigate = useNavigate();
  return (
    <div className="checkout">
      <div className="header">
        <Header />
      </div>

      <p
        className="back"
        onClick={() => {
          navigate("/");
        }}
      >
        Go Back
      </p>

      <div className="checkout-content">
        <div className="information">
          <h1>CHECKOUT</h1>

          <div className="billing">
            <span>BILLING DETAILS</span>
            <div className="infos">
              <div className="info">
                <p>Name</p>
                <input type="text" placeholder="Alexei Ward" />
              </div>
              <div className="info">
                <p>Email Address</p>
                <input type="text" placeholder="alexei@mail.com" />
              </div>
              <div className="info">
                <p>Phone Number</p>
                <input type="text" placeholder="+1 202-555-0136" />
              </div>
            </div>
          </div>

          <div className="shipping-info">
            <span>SHIPPING INFO</span>
            <div className="info address">
              <p>address</p>
              <input type="text" placeholder="1137 Williams Avenue" />
            </div>

            <div className="infos">
              <div className="info">
                <p>Zip Code</p>
                <input type="text" placeholder="10001" />
              </div>

              <div className="info">
                <p>City</p>
                <input type="text" placeholder="New York" />
              </div>

              <div className="info">
                <p>Country</p>
                <input type="text" placeholder="United States" />
              </div>
            </div>
          </div>

          <div className="payment">
            <span>PAYMENT DETAILS</span>
            <div className="top">
              <p>Payment Method</p>
              <div className="right">
                <div className="method" onClick={() => {setPayment("e-Money")}} style={{borderColor: payment === "e-Money" ? "#D87D4A" : ""}}>
                  <div className="check">
                    <div className={payment === "e-Money" ? "checked" : ""}></div>
                  </div>
                  <p>e-Money</p>
                </div>
                <div className="method" onClick={() => {setPayment("Cash on Delivery")}} style={{borderColor: payment === "Cash on Delivery" ? "#D87D4A" : ""}}>
                  <div className="check">
                    <div className={payment === "Cash on Delivery" ? "checked" : ""}></div>
                  </div>
                  <p>Cash on Delivery</p>
                </div>
              </div>
            </div>
            <div className="bottom" style={{display: payment === "e-Money" ? "" : "none"}}>
              <div className="info">
                <p>e-Money Number</p>
                <input type="text" placeholder="238521993" />
              </div>

              <div className="info">
                <p>e-Money Pin</p>
                <input type="text" placeholder="6891" />
              </div>
            </div>

            <div className="bottom2" style={{display: payment === "e-Money" ? "none" : ""}}>
              <img src={Cash} alt="" />
              <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>

      <Footer />
    </div>
  );
}
