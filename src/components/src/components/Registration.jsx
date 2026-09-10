import axios from "axios";
import React, { useEffect, useState } from "react";
import { data, Link, useNavigate } from "react-router-dom";

const Registration = () => {
  // Hook to manage input 's state whenever user types (username);
  const [userName, setUserName] = useState("");
  const [userNameErr, setUserNameErr] = useState("");
  const [contact, setContact] = useState("");
  const [contactErr, setContactErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const navigate = useNavigate();
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const existingUserName = ["piyush@123", "mohit@432", "Priya@921"];

  // Check for duplicate username
  useEffect(() => {
    if (userName) {
      if (existingUserName.includes(userName)) {
        setUserNameErr("This Username is already in used.");
      } else {
        setUserNameErr("");
      }
    }
  }, [userName]);

  const handleUserName = (e) => {
    setUserName(e.target.value);
    setUserNameErr("");
  };
  ////////// Handle submit button /////////

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    let isValid = true;
    if (userName === "") {
      setUserNameErr("Username is Required");
      isValid = false;
    } else if (userName.length < 4) {
      setUserNameErr("User  Name Must contain 4 digits.");
      isValid = false;
    } else if (!userName.includes("@")) {
      setUserNameErr("Use Special characrter like @.");
      isValid = false;
    }

    if (contact === "") {
      setContactErr("Contact number is required");
      isValid = false;
    }

    if (email === "") {
      setEmailErr("Email-Address is Required");
      isValid = false;
    }

    if (password === "") {
      setPasswordErr("Password Should be Field");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordErr("Atleast use 6 Character.");
      isValid = false;
    } else if (!password.includes("@")) {
      setPasswordErr("password is weak.");
      isValid = false;
    }
    //for api calling when submitting the form btn//
    if (isValid) {
      const formData = {
        name: userName,
        email: email,
        phone: contact,
        password: password,
      };
      const { data } = await axios.post(
        "http://localhost:9000/auth/registration",
        formData,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: "",
          },
        },
      );
      console.log("Data from Registration api:", data);
      if (data.status === 201) {
        navigate("/login");
      }
    } else {
      alert("Invalid  form details");
    }
  };

  const handle;
  Contact = (e) => {
    const value = e.target.value;
    setContact(value);
    if (contact.length > 10) {
      setContactErr("Invalid length Number.");
    } else if (/^[a-zA-Z\s]*$/.test(contact)) {
      setContactErr("Only contain numbers.");
      // 4234;
    } else {
      setContactErr("");
    }
  };

  const handleEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!emailRegex.test(value)) {
      setEmailErr("Please enter a valid email address.");
    } else {
      setEmailErr("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  return (
    <>
      <div className="row mt-5 justify-content-center m-0">
        <div className="col-6 ms-5">
          <div className="card p-5 ">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">UserName</label>
                <input
                  type="username"
                  className="form-control"
                  onChange={handleUserName}
                  value={userName}
                  placeholder="Enter Your Name"
                />
                {
                  // userNameErr ? <span className="text-danger">{userNameErr}</span> : null
                  userNameErr && (
                    <span className="text-danger">{userNameErr}</span>
                  )
                }
              </div>

              <div className="mb-3">
                <label className="form-label">Contact</label>
                <input
                  type="contact"
                  className="form-control"
                  onChange={handleContact}
                  value={contact}
                  placeholder="Please Enter Your Contact"
                />
                {contactErr ? (
                  <span className="text-danger">{contactErr}</span>
                ) : null}
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="text"
                  className="form-control "
                  onChange={handleEmail}
                  value={email}
                  placeholder="Please Submit Your Email Address"
                />
                {emailErr ? (
                  <span className="text-danger">{emailErr}</span>
                ) : null}
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={handlePassword}
                  value={password}
                  placeholder="Please Enter Your Password"
                />
                {passwordErr ? (
                  <span className="text-danger">{passwordErr}</span>
                ) : null}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
              <span>
                Already have a Account<Link to={"/login"}>Login Now</Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registration;

// conditional rendering
// terhary operator
// nullish
