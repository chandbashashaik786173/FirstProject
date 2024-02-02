import axios from "axios";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form as BootstrapForm } from "react-bootstrap";

function SignUp() {
  let nameInputRef = useRef();
  let emailInputRef = useRef();
  let phoneNumberInputRef = useRef();
  let maleInputRef = useRef();
  let femaleInputRef = useRef();
  let dateOfBirthInputRef = useRef();
  let profileInputRef = useRef();
  let passwordInputRef = useRef();
  let [profilePic, setProfilePic] = useState("./images/images.png");
  let navigate = useNavigate();

  let onSignup = async () => {
    try {
      let dataToSend = new FormData();
      dataToSend.append("name", nameInputRef.current.value);
      dataToSend.append("email", emailInputRef.current.value);
      dataToSend.append("phoneNumber", phoneNumberInputRef.current.value);
      dataToSend.append("dateOfBirth", dateOfBirthInputRef.current.value);
      dataToSend.append("profilePic", profileInputRef.current.files[0]);
      dataToSend.append("password", passwordInputRef.current.value);
      dataToSend.append(
        "gender",
        maleInputRef.current.checked ? "male" : "female"
      );

      let responseData = await axios.post(
        "http://localhost:9876/signup",
        dataToSend
      );

      console.log(responseData);

      if (responseData.data.status === "success") {
        navigate("/");
      } else {
        console.log("Unable to navigate to login page");
      }
    } catch (error) {
      console.log("failed to send data to the database");
    }
  };

  return (
    <div className=" text-center main page-wrapper">
      <BootstrapForm
        className="form-container mt-3 mb-2 shadow-lg   "
        style={{ fontFamily: "OpenSans-Regular, sans-serif" }}
      >
        <div>
          <img src={profilePic} alt="" className="defaultimage " />
        </div>
        <BootstrapForm.Group controlId="name">
          <BootstrapForm.Label>Name</BootstrapForm.Label>
          <BootstrapForm.Control
            className="mb-2"
            type="text"
            ref={nameInputRef}
          />
        </BootstrapForm.Group>
        <BootstrapForm.Group controlId="email">
          <BootstrapForm.Label>Email</BootstrapForm.Label>
          <BootstrapForm.Control
            className="mb-2"
            type="email"
            ref={emailInputRef}
          />
        </BootstrapForm.Group>
        <BootstrapForm.Group controlId="password">
          <BootstrapForm.Label>Password</BootstrapForm.Label>
          <BootstrapForm.Control
            className="mb-2"
            type="password"
            ref={passwordInputRef}
          />
        </BootstrapForm.Group>
        <BootstrapForm.Group controlId="phoneNumber">
          <BootstrapForm.Label>PhoneNumber</BootstrapForm.Label>
          <BootstrapForm.Control
            className="mb-2"
            type="tel"
            ref={phoneNumberInputRef}
          />
        </BootstrapForm.Group>
        <BootstrapForm.Group controlId="gender">
          <BootstrapForm.Label>Gender :</BootstrapForm.Label>
          <div className="gender-container m-2 d-flex ">
            <div className="d-flex align-items-center">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                ref={maleInputRef}
                style={{ marginTop: "3px" }}
              />
              <label
                className="radio-container "
                htmlFor="male"
                style={{ marginLeft: "10px" }}
              >
                Male
              </label>
            </div>
            <div className="d-flex align-items-center">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                ref={femaleInputRef}
                style={{ marginTop: "3px" }}
              />
              <label
                className="radio-container"
                htmlFor="female"
                style={{ marginLeft: "10px" }}
              >
                Female
              </label>
            </div>
          </div>
        </BootstrapForm.Group>
        <BootstrapForm.Group controlId="dateOfBirth">
          <BootstrapForm.Label>DateOfBirth</BootstrapForm.Label>
          <BootstrapForm.Control
            className="mb-2"
            type="date"
            ref={dateOfBirthInputRef}
          />
        </BootstrapForm.Group>
        <BootstrapForm.Group controlId="profilePic">
          <BootstrapForm.Label>ProfilePic</BootstrapForm.Label>
          <BootstrapForm.Control
            className="mb-1"
            type="file"
            ref={profileInputRef}
            onChange={() => {
              let profilePicURL = URL.createObjectURL(
                profileInputRef.current.files[0]
              );
              setProfilePic(profilePicURL);
            }}
          />
        </BootstrapForm.Group>
        <Button
          variant="primary"
          type="button"
          onClick={() => {
            onSignup();
          }}
          className="mt-3 mb-2"
        >
          SignUp
        </Button>
        <div> <Link to="/" className="link-style ">
          <button variant="primary" className="mt-1">
            Login
          </button>
        </Link></div>
      </BootstrapForm>

      <div className="slogan bg-light ">
        "Welcome to Ekart Services: Your Logistics Partner"
        <div className="linkdiv">
          <h5>If you already have an account, please login here...</h5>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
