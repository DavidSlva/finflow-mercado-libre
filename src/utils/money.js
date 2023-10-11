export function formatearPesosChilenos(numero) {
  return numero.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });
}
