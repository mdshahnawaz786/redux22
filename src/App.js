import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Routing/Navbar";
import Home from "./Routing/Home";
import Product from "./Routing/Product";
import Cart from "./Routing/Cart";
import { useState } from "react";

function App() {
  const [state, setState] = useState([]);
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/product" element={<Product state={state} setState={setState} />} />
        <Route path="/cart" element={<Cart state={state} setState={setState} />} /> */}

        <Route
          path="/product" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}
        />
      </Routes>
    </div>
  );
}

export default App;
