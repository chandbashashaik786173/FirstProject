import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import EditProfile from "./components/EditProfile";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductsAdd from "./components/ProductsAdd";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/editProfile" element={<EditProfile />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/productsAdd" element={<ProductsAdd />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
