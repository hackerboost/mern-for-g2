import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
        <App />
    </Theme>
    </BrowserRouter>
  </StrictMode>
);
