import React from "react";
import Navbar from "./Navbar";

function Contact() {
  return (
    <div className="contactpage-maindiv">
      <Navbar />
      <div className="contact-container">
        <div class="contact-container2">
          <div class="text">Contact us Form</div>
          <form action="#">
            <div class="form-row">
              <div class="input-data">
                <input type="text" required />
                <div class="underline"></div>
                <label for="" className="labeltext">
                  Name
                </label>
              </div>
              <div class="input-data">
                <input type="text" required />
                <div class="underline"></div>
                <label for="" className="labeltext">
                  Mobile Number
                </label>
              </div>
            </div>
            <div class="form-row">
              <div class="input-data">
                <input type="text" required />
                <div class="underline"></div>
                <label for="" className="labeltext">
                  Email Address
                </label>
              </div>
              <div class="input-data">
                <input type="text" required />
                <div class="underline"></div>
                <label for="" className="labeltext">
                  Suggestions
                </label>
              </div>
            </div>
            <div class="form-row">
              <div class="input-data textarea">
                <textarea rows="8" cols="80" required></textarea>
                <br />
                <div class="underline"></div>
                <label for="" className="labeltext">
                  Write your message
                </label>
              </div>
            </div>
            <div>
              <button type="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
