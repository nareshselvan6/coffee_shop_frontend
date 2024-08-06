import React, { useEffect, useState } from "react";
import Products from "./Products";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";



const NavBar = ({ cartQuantity }) => {
  const [editmodal, setEditmodal] = useState(false);
  const[pay,setPay]=useState(false)
 

  const selecteditems = () => {
    setEditmodal(true);
  };
  const navigate = useNavigate();

  const logout= ()=>{
    navigate("/")

  }

  // Total Price Calculation
  const totalqty = cartQuantity?.reduce((acc, item) => acc + parseInt(item.price), 0);

  const paynow=()=>{
    setPay(true)

  }

    
// Stripe Payment Integration


const makePayment = async () => {
  try {
    const stripe = await loadStripe(
      "pk_test_51PUnYGGtPSZv8TncLliuhGNGURb3GHaPIxYXw1GcVOwsGMecLsUoygzW7ZtPMsHIeRyFxuoG9lzqFpXuXmfyTUkI00hAxf3b81"
    );

    const { data: session } = await axios.post(
      "http://localhost:5000/payment/stripepayment",
      { totalqty }
    );

    if (session.id) {
      stripe.redirectToCheckout({ sessionId: session.id });
    } else {
      console.error("Session ID not returned from the backend.");
    }
  } catch (error) {
    console.error("Error during payment initiation:", error);
  }
};

useEffect(() => {
  if (pay) {
    makePayment();
  }
}, [pay]);



  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-lyight">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">
            Elite Cafe{" "}
            <i className="fa fa-bolt lcbolt" aria-hidden="true" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <a
                  className="nav-link active hidden"
                  aria-current="page"
                  href="#!"
                ></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!"></a>
              </li>
            </ul>
            <form className="d-flex">
              <button
                className="btn btn-outline-dark"
                type="button"
                onClick={selecteditems}
              >
                <i className="bi-cart-fill me-1" />
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {cartQuantity.length}
                </span>
              </button>
              <button className="logout btn" type="button" onClick={logout}> Logout</button>
            </form>
          </div>
        </div>
      </nav>

      {editmodal && (
        <div
          className="modal fade show"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Cart Items
                </h1>
                <button
                  type="button"
                  className="btn-close btn btn-danger"
                  onClick={() => setEditmodal(false)}
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="modeldivtitle">
                  <div>
                    <b>Items</b>
                  </div>
                  <div>
                    <b>Price</b>
                  </div>
                </div>
                <hr />

                {cartQuantity?.map((ele, index) => {
                  return (
                    <div className="modeldiv" key={ele._id}>
                      <div className="mddv">
                        <div> {ele.name} </div>
                        <div> {ele.price} rs </div>
                      </div>
                    </div>
                  );
                })}
                <div className="totalprice">
                    <hr />
                  <div className="totalprice_title">
                    <b>TotalPrice:</b>
                    <b> {totalqty} rs</b>
                  </div>
                  {cartQuantity?.reduce}
                  <div className="priceamt"></div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => setEditmodal(false)}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={() => paynow()}
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
