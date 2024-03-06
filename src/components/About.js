import React from "react";
import Navbar from "./Navbar";
// About component
const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <div className="content-aboutpage">
        <header>
          <h1>eKart</h1>
          <p>Your Ultimate Online Shopping Destination</p>
        </header>

        <main>
          <section>
            <h2>About eKart</h2>
            <p>
              Welcome to eKart, your one-stop destination for all your online
              shopping needs. We strive to provide you with the best and most
              convenient shopping experience possible.
            </p>
            <p>
              At eKart, we offer a wide range of products, from electronics to
              fashion, home goods to beauty products. Our goal is to make your
              shopping experience enjoyable, easy, and secure.
            </p>
          </section>

          <section>
            <h2>Our Mission</h2>
            <p>
              Our mission is to connect buyers and sellers in a seamless online
              shopping experience. We aim to provide quality products, excellent
              customer service, and secure transactions.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions, concerns, or feedback, feel free to
              reach out to our customer support team. We are available 24/7 to
              assist you.
            </p>
            <p>
              Email: support@ekartmoon.com
              <br />
              Phone: 1-800-123-4567
            </p>
          </section>
        </main>

        <footer>&copy; 2024 eKart. All Rights Reserved.</footer>
      </div>
    </div>
  );
};

// Export the About component
export default About;
