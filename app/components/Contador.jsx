"use client";
import { useState } from "react";
import { Button } from "reactstrap";

export default function Contador({ button, posicion }) {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ textAlign: posicion, margin: "20px" }}>
      <p>Contador: {contador}</p>

      <Button 
        onClick={() => setContador(contador + 1)}
      >
        {button}
      </Button>
    </div>
  );
}
