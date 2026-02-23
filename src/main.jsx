import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Apiexe1 from "./components/apiex1.jsx";
import Apiexe2 from "./components/apiex2.jsx";
import ConsultaEndereco from "./components/consultaEndereco.jsx";
import MonitorCombustivel from "./components/MonitorCombustivel.jsx";
import GestãoProdutos from "./assets/components/GestãoProdutos.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Apiexe1 />
    <Apiexe2 />
    <ConsultaEndereco />
    <MonitorCombustivel />
    <GestãoProdutos />
  </StrictMode>,
);
