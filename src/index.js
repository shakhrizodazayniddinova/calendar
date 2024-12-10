import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from "./App/App";
import { ThemeProvider } from "./ThemeContext/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
);
