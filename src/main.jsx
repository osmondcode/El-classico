import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Leva } from "leva";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Leva />
    <App />
  </StrictMode>
);
