"use client";
import { useState } from "react";
import { Button } from "reactstrap";

export default function Imagen({ src, src2, ancho, borde, posicion, margen }) {
  const [imagenActual, setImagenActual] = useState(src);

  const cambiarImagen = () => {
    setImagenActual(imagenActual === src ? src2 : src);
  }

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

      <Button
        onClick={cambiarImagen}
      >
        Cambiar imagen
      </Button>
    </div>
  );
}
