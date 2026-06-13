import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async"; // ← add this line

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      {" "}
      {/* ← wrap App */}
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);

reportWebVitals();
