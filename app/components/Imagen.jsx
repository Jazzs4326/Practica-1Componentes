"use client";
import { useState } from "react";

export default function Imagen({ src, src2, ancho, borde, posicion, margen }) {
  const [imagenActual, setImagenActual] = useState(src);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={imagenActual}
        style={{
          width: ancho,
          borderRadius: borde,
          display: posicion,
          margin: margen,
        }}
      />

      <button
        onClick={() => setImagenActual(src2)}
            style={{
          backgroundColor: "#f195defd",
          borderRadius: "6px",
          padding: "8px 12px",
          cursor: "pointer",
          display: "block",
          margin: "12px auto 0 auto"
        }}
      >
        Cambiar imagen
      </button>
    </div>
  );
}
