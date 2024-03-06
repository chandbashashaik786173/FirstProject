// Import necessary libraries and components
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";

function Login() {
  // Declare refs and state variables
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const mobileNumberInputRef = useRef();
  const checkBoxInputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginMethod, setLoginMethod] = useState("email");
  const [activeOption, setActiveOption] = useState("email"); // Set the default option to 'email'

  // Function to handle option change
  const handleOptionChange = (option) => {
    setActiveOption(option);
    setLoginMethod(option); // Set loginMethod based on the selected option
  };

  // useEffect to populate email and password from localStorage on component mount
  useEffect(() => {
    emailInputRef.current.value = localStorage.getItem("email") || "";
    passwordInputRef.current.value = localStorage.getItem("password") || "";
  }, []);

  // Function to validate login
  const validateLogin = async () => {
    try {
      const dataToSend = new FormData();
      dataToSend.append(
        loginMethod === "email" ? "email" : "mobileNumber",
        loginMethod === "email"
          ? emailInputRef.current.value
          : mobileNumberInputRef.current.value
      );
      dataToSend.append("password", passwordInputRef.current.value);
      dataToSend.append("token", localStorage.getItem("token") || "");

      const response = await axios.post(
        "http://localhost:9876/validatelogin",
        dataToSend
      );

      console.log(response);

      if (response.data.status === "success") {
        localStorage.setItem("token", response.data.token);
        dispatch({ type: "login", data: response.data.data });
        console.log("Dispatch successful");
        navigate("/home");
      } else {
        console.log("Unable to dispatch");
      }
    } catch (error) {
      console.log("Unable to validate login");
      console.error(error);
    }
  };

  // Function to toggle password visibility
  const showHidePassword = () => {
    passwordInputRef.current.type = checkBoxInputRef.current.checked
      ? "text"
      : "password";
  };

  return (
    <div className="login-container">
      <div className="card">
        <div className="slider">
          <div className="btn-container">
            <button
              onClick={() => handleOptionChange("email")}
              className={`button ${activeOption === "email" ? "active" : ""}`}
            >
              Using Email
            </button>
            <button
              onClick={() => handleOptionChange("mobile")}
              className={`button ${activeOption === "mobile" ? "active" : ""}`}
            >
              Mobile number
            </button>
          </div>
        </div>
        <Card.Body>
          <div className="container text-center">
            <form>
              <h3 style={{ marginBottom: "20px", color: "#007bff" }}>Login</h3>
              <div className="mb-4">
                {loginMethod === "email" ? (
                  <input
                    ref={emailInputRef}
                    placeholder="example@gmail.com"
                    type="text"
                    className="full-width-card"
                  />
                ) : (
                  <input
                    ref={mobileNumberInputRef}
                    placeholder="mobile number"
                    type="number"
                    className="full-width-card"
                  />
                )}
              </div>
              <div className="mb-4">
                <div style={{ position: "relative" }}>
                  <input
                    ref={passwordInputRef}
                    className="full-width-card"
                    placeholder="password"
                    type="password"
                  />
                  <input
                    type="checkbox"
                    ref={checkBoxInputRef}
                    className="checkbox"
                    onChange={showHidePassword}
                  />
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="custom-button"
                  onClick={validateLogin}
                >
                  Login
                </button>
              </div>
              <div className="mt-3">
                <h6>
                  If you don't have an account,<br></br>please{" "}
                  <Link to="/signup" style={{ color: "#007bff" }}>
                    sign up here
                  </Link>
                </h6>
              </div>
            </form>
          </div>
        </Card.Body>
      </div>
    </div>
  );
}

export default Login;
