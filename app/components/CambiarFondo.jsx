"use client";
import { useState, useEffect } from "react";
import { Button } from "reactstrap";

export default function CambiarFondo({ color1, color2, customStyle }) {
  const [color, setColor] = useState(color1);
  const defaultStyle = { textAlign: "center", margin: "20px" }

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div style={customStyle ? customStyle : defaultStyle}>
      <Button
        onClick={() => setColor(color === color1 ? color2 : color1)}
      >
        Cambiar color de fondo
      </Button>
    </div>
  );
}
