import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Filter from "./components/Filter";
import UnitCard from "./components/UnitCard";
import { fetchUnits } from "./services/sheetService"; // 👈 Importación directa
import "./App.css";

export type Unit = {
  unidad: string;
  adultos: number;
  jovenes: number;
  sacerdocio: number;
  miembros: number;
  faltanMiembros: number;
  faltanAdultos: number;
  faltanJovenes: number;
  faltanMP: number;
};

function App() {
  const [units, setUnits] = useState<Unit[]>([]);
  const [search, setSearch] = useState("");
  const [currentUrl, setCurrentUrl] = useState("inicio");

  useEffect(() => {
    fetchUnits()
      .then((data) => setUnits(data))
      .catch((err) => console.error("Error cargando datos:", err));
  }, []);

  const filtered = units.filter((u) =>
    u.unidad.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <>
      <Navbar onNavigate={setCurrentUrl} currentUrl={currentUrl} />
      <main className="main-content">
        {currentUrl === "inicio" ? (
          <div className="container">
            <header className="dashboard-header">
              <h1>Dashboard de Unidades</h1>
              <p>Seguimiento de requisitos y membresía en tiempo real</p>
            </header>
            <Filter value={search} onChange={setSearch} />
            <div className="grid-container">
              {filtered.length > 0 ? (
                filtered.map((unit) => (
                  <UnitCard key={unit.unidad} unit={unit} />
                ))
              ) : (
                <div
                  className="no-results"
                  style={{
                    gridColumn: "1/-1",
                    textAlign: "center",
                    padding: "40px",
                    color: "#64748b",
                  }}
                >
                  <p>No se encontraron unidades.</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="iframe-wrapper">
            <iframe
              src={currentUrl}
              title="External Dashboard"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        )}
      </main>
    </>
  );
}

export default App;
