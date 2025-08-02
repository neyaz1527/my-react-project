import React, { useEffect, useState } from "react";
import "./Cart.css";
import { data } from "../../data/dataset.js";

export default function Cart({ products, setProducts }) {
  const [totalProducts, setTotalProducts] = useState(products.length);

  useEffect(() =>{
    setTotalProducts(products.length);
  }, [products])

  const handleDelete = (id) => {
    const updateProducts = products.filter((index) => index.id !== id);
    setProducts(updateProducts);
  };

  const handleDeleteAll = () => {
    setProducts([]);
  };

  if (products.length == 0) {
    return <h1>Cart is Empty</h1>;
  }
  return (
    <div className="cards">
      <h1>Item in cart: {totalProducts}</h1>
      {products.map((product) => {
        return (
          <div className="card">
            <p>
              {product.name}, {product.price}
            </p>
            <button
              className="btn-delete"
              onClick={() => handleDelete(product.id)}>Delete</button>
          </div>
        );
      })}
      <button
        onClick={() => {
          handleDeleteAll();
        }}>Delete all</button>
    </div>
  );
}

// export default function Cart() {

//     const [products, setProducts] = useState(data);
//     const [totalProducts, setTotalProducts] = useState(data.length);

//     const handleDelete = (id) =>{
//         const updateProducts = products.filter((index) => index.id !== id);
//         setProducts(updateProducts);
//         setTotalProducts(updateProducts.length);
//     }

//     const handleDeleteAll=() =>{
//         setProducts([]);
//         setTotalProducts(0);
//     }

//   return (
//     <div className='cards'>
//         <h1>Item in cart: {totalProducts}</h1>
//         {products.map((product =>{
//             return <div className='card'>
//                 <p>{product.name}, {product.price}</p>
//                 <button className='btn-delete' onClick={()=>handleDelete(product.id)}>
//                     Delete
//                 </button>
//             </div>
//         }))}
//         <button onClick={() => {handleDeleteAll()}}>Delete all</button>
//     </div>
//   )
// }
