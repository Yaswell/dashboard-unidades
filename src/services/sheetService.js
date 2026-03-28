const URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQhHijiE7aLuZ1-zSh9Y-yodN9y5Jc_5ZrzwpFRbp4gggTutW68rsNbSNSYlnlkxOC6y_1VyuuyNez0/pub?output=csv&gid=789410875";

export async function fetchUnits() {
  const res = await fetch(URL);
  const text = await res.text();

  const rows = text.split("\n").slice(1);

  return rows
    .filter((row) => row.trim() !== "")
    .map((row) => {
      const cols = row.split(",");

      return {
        unidad: cols[0],
        adultos: Number(cols[1]),
        jovenes: Number(cols[2]),
        sacerdocio: Number(cols[3]),
        miembros: Number(cols[4]),
        faltanMiembros: Number(cols[10]),
        faltanAdultos: Number(cols[11]),
        faltanJovenes: Number(cols[12]),
        faltanMP: Number(cols[13]),
      };
    });
}
