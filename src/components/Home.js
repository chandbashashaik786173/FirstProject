import React, { useEffect, useState } from "react";
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
  const [products, setProducts] = useState([]);

  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  const handleShowOffcanvas = () => setShowOffcanvas(true);

  const handleAddToCart = () => {
    console.log("Add to Cart clicked");
    // Dispatch your add-to-cart action or navigate to the cart page
  };

  const getData = async () => {
    let reqOpt = {
      method: "GET",
    };
    let response = await fetch("http://localhost:9876/getProducts", reqOpt);
    let responseData = await response.json();
    console.log(responseData);
    setProducts(responseData);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="home-main-div">
        <Navbar className="d-flex bg-info">
          <Container className="hometopdiv">
            <Navbar.Brand href="#home">MoonMart</Navbar.Brand>
            <div className="search-input-btn ">
              <input
                type="search"
                className="search-input"
                placeholder="Search here"
              />
              <button className="search-btn">Search</button>
            </div>
            <DropdownButton id="dropdown-basic-button" title="Category">
              <Dropdown.Item style={{ color: "black" }}>Shirts</Dropdown.Item>
              <Dropdown.Item style={{ color: "black" }}>T-shirts</Dropdown.Item>
              <Dropdown.Item style={{ color: "black" }}>Jeans</Dropdown.Item>
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
          <Offcanvas.Title className="header-offcanvas">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Link
              to="/home"
              className="nav-link"
              onClick={handleCloseOffcanvas}
            >
              🏠 Home
            </Link>
            <Link
              to="/about"
              className="nav-link"
              onClick={handleCloseOffcanvas}
            >
              (^_^) About
            </Link>
            <Link
              to="/editprofile"
              className="nav-link"
              onClick={handleCloseOffcanvas}
            >
              ✏️ Edit Profile
            </Link>
            <Link
              to="/contact"
              className="nav-link"
              onClick={handleCloseOffcanvas}
            >
              📞 Contact
            </Link>
            <Link
              to="/productsAdd"
              className="nav-link"
              onClick={handleCloseOffcanvas}
            >
              ➕ Add Products
            </Link>{" "}
            <Link to="/" className="nav-link" onClick={handleCloseOffcanvas}>
              🚪 Logout
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
      <div className="product-details-div text-center">
        {products.map((product) => (
          <div key={product.id} className="product">
            {/* Replace the existing img tag with the product's image source */}
            {/* <img src={product.image} alt={product.brand} /> */}
            <img
              src={`http://localhost:9876/${product.image}`}
              alt={product.brand}
            />
            <p>Product_name: {product.product_name}</p>
            <p>product_description: {product.product_description}</p>
            <p>price: {product.price}</p>
            <p>Brand: {product.brand}</p>
            <p>Rating: {product.rating}</p>
            <p>stock_quantity: {product.stock_quantity}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
