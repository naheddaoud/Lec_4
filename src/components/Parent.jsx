import React, { useState } from "react";
import Child from "./Child";
//React Hooks useState
const initialProducts = [
  { id: 1, name: "Samsung S22", price: 10000, count: 0, category: "Mobile" },
  { id: 2, name: "Nokia S22", price: 10000, count: 0, category: "Mobile" },
  { id: 3, name: "Oppo S22", price: 10000, count: 0, category: "Mobile" },
  { id: 4, name: "Realme S22", price: 10000, count: 0, category: "Mobile" },
  { id: 5, name: "IPhone S22", price: 10000, count: 0, category: "Mobile" },
];

let Parent = () => {
  let [products, setProducts] = useState(initialProducts);
  let [count, setCount] = useState(0);
  //console.log(products)
  function changeCount() {
    setCount(count + 5);
  }
  //Function to Delete
  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
  };

  //Function to Increment the count
  function handleIncrement(productId) {
    setProducts(
      products.map((product) =>
        product.id === productId
          ? { ...product, count: product.count + 1 }
          : product
      )
    );
  }

  return (
    <div>
      <h2>Count: {count} </h2>
      <button onClick={changeCount} className="bg-primary">
        Change
      </button>
      <div className="container p-4 bg-dark">
        <div className="row gy-4">
          {products.map((product) => (
            <Child
              key={product.id}
              product={product}
              onDelete={handleDelete}
              onIncrement={handleIncrement}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parent;
