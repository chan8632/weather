import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "styled-components";
createRoot(document.getElementById("root")).render(
    <App />
);
