import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
const ProductsAdd = () => {
  let productNameRef = useRef();
  let productDescriptionRef = useRef();
  let priceRef = useRef();
  let categoryRef = useRef();
  let brandRef = useRef();
  let imageRef = useRef();
  let stockQuantityRef = useRef();
  let ratingRef = useRef();

  let productData = async () => {
    let dataToSend = new FormData();
    dataToSend.append("productName", productNameRef.current.value);
    dataToSend.append(
      "productDescription",
      productDescriptionRef.current.value
    );
    dataToSend.append("price", priceRef.current.value);
    dataToSend.append("category", categoryRef.current.value);
    dataToSend.append("image", imageRef.current.files[0]);
    dataToSend.append("brand", brandRef.current.value);
    dataToSend.append("stockQuantity", stockQuantityRef.current.value);
    dataToSend.append("rating", ratingRef.current.value);
    dataToSend.append("productDescriptin", productDescriptionRef.current.value);
    let responseData = await axios.post(
      "http://localhost:9876/products",
      dataToSend
    );
    console.log(responseData);
  };

  return (
    <div className="text-center productpage-maindiv">
      <Navbar />
      <div className="background d-flex justify-content-center">
        <div className="card-product">
          <div className="card-header">
            <h3>Add Product</h3>
          </div>
          <div className="card-body">
            <div className="input-group">
              <label>Product Name:</label>
              <input type="text" name="product_name" ref={productNameRef} />
            </div>
            <div className="input-group">
              <label>Product Description:</label>
              <input name="product_description" ref={productDescriptionRef} />
            </div>
            <div className="input-group">
              <label>Price:</label>
              <input type="text" name="price" ref={priceRef} />
            </div>
            <div className="input-group">
              <label>Category:</label>
              <input type="text" name="category" ref={categoryRef} />
            </div>
            <div className="input-group">
              <label>Brand:</label>
              <input type="text" name="brand" ref={brandRef} />
            </div>
            <div className="input-group">
              <label>Image :</label>
              <input type="file" name="image_url" ref={imageRef} />
            </div>
            <div className="input-group">
              <label>Stock Quantity:</label>
              <input type="text" name="stock_quantity" ref={stockQuantityRef} />
            </div>
            <div className="input-group">
              <label>Rating:</label>
              <input type="text" name="rating" ref={ratingRef} />
            </div>
          </div>
          <div className="card-footer">
            <button
              type="button"
              onClick={() => {
                productData();
              }}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsAdd;
