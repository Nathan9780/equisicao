import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Apiexe1 from "./components/apiex1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Apiexe1 />
  </StrictMode>,
);
