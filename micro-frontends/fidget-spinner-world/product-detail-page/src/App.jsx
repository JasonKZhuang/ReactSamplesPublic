import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
const Header = React.lazy(() => import("HomeKey/Header")); // import Header from "HomeKey/Header";
import Footer from "HomeKey/Footer";
import SafeComponent from "./components/errorHandling/SafeComponent";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductContent from "./components/ProductContent";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <Header />
      </Suspense>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/products"
          element={<ProductList />}
        />
        <Route
          path="/product/:pId"
          element={<ProductContent />}
        />
      </Routes>
      <SafeComponent fallback={<p>The part is temporally unavailable.</p>}>
        <Footer obj={{ name: "The Spinner World" }} />
      </SafeComponent>
    </>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
