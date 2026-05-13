import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [carts, setCarts] = useState([]);

  const cartsApiData = async() => {
    try {
      const cartsApiResp = await axios.get("https://dummyjson.com/carts");
      setCarts(cartsApiResp.data.carts);
      console.log(cartsApiResp.data.carts);
    } catch (err) {
      console.log("Error", err);
    }
  };

  useEffect(() => {
    cartsApiData()
  }, []);

  return (
  );
}

export default App;
