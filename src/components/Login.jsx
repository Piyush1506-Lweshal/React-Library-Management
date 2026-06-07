import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  //Hook to manage input's state whenever uses types (usestates).
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [checkboxErr, setCheckboxErr] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setEmailErr("Email address is required");
    }

    if (password === "") {
      setPasswordErr("Password is required");
    }

    if (!checkbox) {
      setCheckboxErr("Please confirm that you have read all documents.");
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

                <span>
                  Read all the documents carefully.
                  <Link to={"/Privacy"}>Privacy Document</Link>
                </span>

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
