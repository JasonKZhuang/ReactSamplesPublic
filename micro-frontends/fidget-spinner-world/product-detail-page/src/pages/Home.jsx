import React, { Suspense } from "react";

import ProductList from "../pages/ProductList";
import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();
  return (
    <div className="max-w-6xl mx-auto my-5 text-3xl text-center bg-gray-100">
      <h1>This Product Details Page</h1>
      <button onClick={() => nav("/products")}>Product List</button>
    </div>
  );
}

export default Home;
