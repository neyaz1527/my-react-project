import React, { useState } from "react";
import Cart from "../components/state/Cart.jsx";
import "./Home.css";

export default function Home() {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (e) => {
    e.preventDefault();
    if (productName && price) {
      const newProduct = {
        id: Date.now(),
        name: productName,
        price: parseFloat(price),
      };
      setCartItems([...cartItems, newProduct]);
      setPrice("");
      setProductName("");
    }
  };
  

  return (
    <div>
      <h1>Add product</h1>
      <form className="form" onSubmit={handleAddToCart}>
        <label htmlFor="productName">Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        ></input>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <button className="btn-submit" type="submit">Add to cart</button>
      </form>
      <Cart products={cartItems} setProducts={setCartItems} />
    </div>
  );
}
