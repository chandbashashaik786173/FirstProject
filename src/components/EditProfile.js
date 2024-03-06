import axios from "axios";
import Navbar from "./Navbar";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

function EditProfile() {
  let nameInputRef = useRef();
  let emailInputRef = useRef();
  let phoneNumberInputRef = useRef();
  let maleInputRef = useRef();
  let femaleInputRef = useRef();
  let dateOfBirthInputRef = useRef();
  let storeObj = useSelector((store) => {
    return store;
  });
  let profileInputRef = useRef();
  let passwordInputRef = useRef();
  let [profilePic, setProfilePic] = useState("./images/images.png");

  useEffect(() => {
    populateUserDetails();
  }, []);

  let populateUserDetails = async () => {
    if (storeObj && storeObj.userDetails) {
      nameInputRef.current.value = storeObj.userDetails.name || "";
      emailInputRef.current.value = storeObj.userDetails.email || "";
      passwordInputRef.current.value = storeObj.userDetails.password || "";
      phoneNumberInputRef.current.value =
        storeObj.userDetails.phoneNumber || "";
      dateOfBirthInputRef.current.value =
        storeObj.userDetails.dateOfBirth || "";

      // Use optional chaining to safely access nested properties
      setProfilePic(
        `http://localhost:9876/${
          storeObj.userDetails?.profilePic || "uploads/default-image.jpg"
        }`
      );
    }
  };
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
      // let reqOpt = {
      //   method: "POST",
      //   body: dataToSend,
      // };
      // let response = await fetch("http://localhost:9876/updateProfile", reqOpt);
      // let responseData = await response.json();
      let responseData = await axios.post(
        "http://localhost:9876/updateProfile",
        dataToSend
      );
      console.log(responseData);
    } catch (error) {
      console.log("failed to updating the details of user");
    }
  };
  return (
    <div className="editpage-maindiv">
      <Navbar />
      <div className="editcontainer">
        <div>
          <form className="editprofileform ">
            <div className="text-center">
              <img src={profilePic} alt="" className="defaultimage"></img>
            </div>
            <div>
              <label>Name</label>
              <input ref={nameInputRef}></input>
            </div>

            <div>
              <label> Email</label>
              <input ref={emailInputRef} readOnly></input>
            </div>
            <div>
              <label>Password</label>
              <input ref={passwordInputRef}></input>
            </div>
            <div>
              <label>PhoneNumber</label>
              <input ref={phoneNumberInputRef}></input>
            </div>
            <div>
              <label>Gender</label>
              <div className="gender-container">
                <label htmlFor="male">Male</label>
                <input
                  className="gender-input"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  ref={maleInputRef}
                />
                <label htmlFor="female" className="female-label">
                  Female
                </label>
                <input
                  className="gender-input"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  ref={femaleInputRef}
                />
              </div>
            </div>
            <div>
              <label>DateOfBirth</label>
              <input ref={dateOfBirthInputRef} type="date"></input>
            </div>
            <div>
              <label>ProfilePic</label>
              <input
                ref={profileInputRef}
                type="file"
                onChange={() => {
                  let profilePicURL = URL.createObjectURL(
                    profileInputRef.current.files[0]
                  );
                  setProfilePic(profilePicURL);
                }}
              ></input>
            </div>
            <div className="text-center mt-3">
              <button
                type="button"
                onClick={() => {
                  onSignup();
                }}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
