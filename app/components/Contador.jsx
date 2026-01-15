"use client";
import { useState } from "react";

export default function Contador({ button }) {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>

      <button
        style={{
          backgroundColor: "#6497daac",
          borderRadius: "6px",
          padding: "8px 12px",
          cursor: "pointer",
          display: "block",
        }}
        onClick={() => setContador(contador + 1)}
      >
        {button}
      </button>
    </div>
  );
}
