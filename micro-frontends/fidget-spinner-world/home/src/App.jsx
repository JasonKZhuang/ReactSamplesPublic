import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";

const App = () => (
  <div className="flex flex-col items-center justify-center max-w-6xl mx-auto mt-10 text-3xl">
    <h1>The home application contains</h1>
    <h2>Containing Header and Footer </h2>
    <h2>which can be shared by other micro front-ends</h2>
    <Header />
    <HomeContent />
    <Footer obj={{ name: "Fidget Spinner in the world" }} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
