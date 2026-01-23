import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  const app = (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

  const hasServerMarkup =
    rootElement.hasChildNodes() && !rootElement.innerHTML.includes("app-html");

  if (hasServerMarkup) {
    ReactDOM.hydrateRoot(rootElement, app);
  } else {
    ReactDOM.createRoot(rootElement).render(app);
  }
}
