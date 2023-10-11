import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./MainApp.tsx";
import "./index.css";
import { BrowserRouter, HashRouter, MemoryRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <HashRouter> */}
    {/* <MemoryRouter> good for test */}
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
    {/* </HashRouter> */}
    {/* </MemoryRouter> */}
  </React.StrictMode>
);
