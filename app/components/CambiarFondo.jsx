"use client";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "reactstrap";

export default function CambiarFondo({ color1, color2 }) {
  const [color, setColor] = useState(color1);

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <Button
        onClick={() => setColor(color === color1 ? color2 : color1)}
      >
        Cambiar color de fondo
      </Button>
    </div>
  );
}
