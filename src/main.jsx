import "bulma/css/bulma.css";
import "../styles/global.css";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.querySelector("#content")).render(<App />);