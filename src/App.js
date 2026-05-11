import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [carts, setCarts] = useState([]);

  const cartsApiData = async () => {
    try {
      const cartsApiresp = await axios.get("htps://dummyjson.com/carts");
      setCarts(cartsApiresp.data.carts);
      console.log(cartsApiresp.data.carts);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    cartsApiData();
  }, []);

  return (
    <div className="App">
      <h1>Carts</h1>
      {carts.map((cart) => (
        <div key={cart.id} className="cart">
          <h2>Cart ID: {cart.id}</h2>
          <p>User ID: {cart.userId}</p>
          <p>Total Products: {cart.totalProducts}</p>
          <p>Total Quantity: {cart.totalQuantity}</p>
          <p>Total Price: ${cart.total}</p>
          <div className="products">
            <h3>Products:</h3>
            {cart.products.map((product) => (
              <div key={product.id} className="product">
                <p>Product ID: {product.id}</p>
                <p>Title: {product.title}</p>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
