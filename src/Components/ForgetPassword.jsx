import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router";
import axios from "axios";

const ForgetPassword = () => {
  const [email, setEmail] = useState();
  const [registered, setRegistered] = useState();

  const navigate = useNavigate();
  const forgotpassword = async (e) => {
    e.preventDefault();
    const payload = { email };
    try {
      const response = await axios
        .put("https://coffee-shop-backend-ex3n.onrender.com/auth/forgetpassword", payload)
        .then((res) => {
          setRegistered(res.data);
          navigate("/login");
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log("error occured while clicking forget password" + error);
    }
  };
  return (
    <div>
      <div className="totalforgotpassword">
        <div className="forgotpassword blurred-div">
          <form className="form forget" onSubmit={forgotpassword}>
            <h2 className="black green">Forget Password</h2>
            <label className="black green">Email</label>
            <input
            className="forpswd"
              type="email"
              placeholder="johndoe@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-success">
              sent
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
