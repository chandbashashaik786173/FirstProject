import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import {
  Navbar,
  Container,
  Dropdown,
  DropdownButton,
  Offcanvas,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Home() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  const handleAddToCart = () => {
    console.log("Add to Cart clicked");
    // Dispatch your add-to-cart action or navigate to the cart page
  };

  return (
    <>
      <div className="home-main-div">
        <Navbar className="d-flex bg-info">
          <Container className="hometopdiv">
            <Navbar.Brand href="#home">MoonMart</Navbar.Brand>
            <input
              type="search"
              className="search-input"
              placeholder="Search here"
            />
            <button className="search-btn">Search</button>
            <DropdownButton id="dropdown-basic-button" title="Category">
              <Dropdown.Item href="#/action-1">Shirts</Dropdown.Item>
              <Dropdown.Item href="#/action-2">T-shirts</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Jeans</Dropdown.Item>
            </DropdownButton>
            <div>
              <div
                className="text-center p-4 cursor-pointer"
                onClick={handleAddToCart}
              >
                <FontAwesomeIcon icon={faShoppingCart} />
                <h6 className="ml-2">Cart</h6>
              </div>
            </div>
            <a
              href="#"
              onClick={handleShowOffcanvas}
              className="p-4 "
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3 className="hamberger w-50 menu-items"> ☰</h3>
            </a>
          </Container>
        </Navbar>
      </div>
      <Offcanvas
        show={showOffcanvas}
        onHide={handleCloseOffcanvas}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Link
              to="/home"
              className="nav-link"
              onClick={handleCloseOffcanvas}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="nav-link"
              onClick={handleCloseOffcanvas}
            >
              About
            </Link>
            <Link
              to="/edit-profile"
              className="nav-link"
              onClick={handleCloseOffcanvas}
            >
              Edit Profile
            </Link>
            <Link
              to="/contact"
              className="nav-link"
              onClick={handleCloseOffcanvas}
            >
              Contact
            </Link>
            <Link to="/" className="nav-link" onClick={handleCloseOffcanvas}>
              Logout
            </Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="card-div ">
        <div className="container-fluid  pt-4">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/shp-1.jpeg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/shp-2.webp"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/shp-3.webp"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Home;
