import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

function Login() {
  //Hook to manage input's state whenever uses types (usestates).
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [checkboxErr, setCheckboxErr] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    let isValid = true;

    if (email === "") {
      setEmailErr("Email address is required");
      isValid = false;
    }

    if (password === "") {
      setPasswordErr("Password is required");
      isValid = false;
    }

    if (!checkbox) {
      setCheckboxErr("Please confirm that you have read all documents.");
      isValid = false;
    }
    if (isValid) {
      const formData = {
        email: email,
        password: password,
        checkbox: checkbox,
      };
      const { data } = await axios.post(
        "http://localhost:9000/in/login",
        formData,

        {
          headers: {
            "Content-type": "application/json",
            Authorization: "",
          },
        },
      );
      console.log("Successfully Login In libraray", data);
      if (data.status === 200) {
        navigate("/Dashboard");
      } else {
        alert("This password is wrong Please enter valid Password");
      }
    } else {
      alert("This Data does not exist please registered yourself");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  const handleCheckbox = (e) => {
    setCheckbox(e.target.checked);
    setCheckboxErr("");
  };

  return (
    <>
      <div className="container row mt-5 ">
        <div className="row justify-content-center">
          <div className="col-lg-6 ms-5 ">
            <div className="card p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email Address"
                    onChange={handleEmail}
                    value={email}
                  />
                  {emailErr ? (
                    <span className="text-danger">{emailErr}</span>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Please Enter Your Password"
                    onChange={handlePassword}
                    value={password}
                  />
                  {passwordErr ? (
                    <span className="text-danger">{passwordErr}</span>
                  ) : null}
                </div>

                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    onChange={handleCheckbox}
                    checked={checkbox}
                  />
                  <label className="form-check-label">
                    I have read all documents
                  </label>
                  {checkboxErr ? (
                    <span className="text-danger">{checkboxErr}</span>
                  ) : null}
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
                <span>
                  Don't have a Account
                  <Link to={"/Registration"}>Create new Account</Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
