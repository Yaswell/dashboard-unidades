const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhHijiE7aLuZ1-zSh9Y-yodN9y5Jc_5ZrzwpFRbp4gggTutW68rsNbSNSYlnlkxOC6y_1VyuuyNez0/pub?output=csv&gid=789410875";

export async function fetchUnits() {
  try {
    const res = await fetch(URL);
    if (!res.ok) throw new Error("No se pudo conectar con Google Sheets");

    const text = await res.text();
    // Limpiamos retornos de carro (\r) que a veces mete Windows/Google
    const rows = text.replace(/\r/g, "").split("\n").slice(1);

    return rows
      .filter((row) => row.trim() !== "")
      .map((row) => {
        const cols = row.split(",");

        return {
          unidad: cols[0] || "Desconocida",
          adultos: Number(cols[1]) || 0,
          jovenes: Number(cols[2]) || 0,
          sacerdocio: Number(cols[3]) || 0,
          miembros: Number(cols[4]) || 0,
          faltanMiembros: Number(cols[10]) || 0,
          faltanAdultos: Number(cols[11]) || 0,
          faltanJovenes: Number(cols[12]) || 0,
          faltanMP: Number(cols[13]) || 0,
        };
      });
  } catch (error) {
    console.error("Error en fetchUnits:", error);
    return [];
  }
}
