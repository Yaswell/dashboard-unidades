import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // 💡 Quita el .js, Vite lo resuelve solo

// Añadimos el "!" al final de getElementById
const rootElement = document.getElementById("root")!;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
