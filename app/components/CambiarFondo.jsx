"use client";
import { useState } from "react";
import { useEffect } from "react";

export default function CambiarFondo() {
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
   
      <button
        style={{
          backgroundColor: "#f195defd",
          borderRadius: "6px",
          padding: "8px 12px",
          cursor: "pointer",
          display: "block",
          margin: "12px auto 0 auto"
        }}
        onClick={() => setColor(color === "#ffffff" ? "#add8e6" : "#ffffff")}
      >
        Cambiar color de fondo
      </button>
    
  );
}
