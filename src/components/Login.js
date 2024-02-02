import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";

function Login() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const checkBoxInputRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    emailInputRef.current.value = localStorage.getItem("email");
    passwordInputRef.current.value = localStorage.getItem("password");
  }, []);

  const validateLogin = async () => {
    try {
      const dataToSend = new FormData();
      dataToSend.append("email", emailInputRef.current.value);
      dataToSend.append("password", passwordInputRef.current.value);
      dataToSend.append("token", localStorage.getItem("token"));

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

  const showHidePassword = () => {
    passwordInputRef.current.type = checkBoxInputRef.current.checked
      ? "text"
      : "password";
  };

  return (
    <div className="login-container">
      <Card className="card">
        <Card.Body>
          <div className="container text-center">
            <form>
              <h3 style={{ marginBottom: "20px", color: "#007bff" }}>Login</h3>
              <div className="mb-4">
                {/* <label style={{ fontWeight: "bold" }}>Email</label> */}
                <input
                  ref={emailInputRef}
                  placeholder="username or email"
                  type="text"
                  className="full-width-card"
                />
              </div>
              <div className="mb-4">
                {/* <label style={{ fontWeight: "bold" }}>Password</label> */}
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
      </Card>
    </div>
  );
}

export default Login;
