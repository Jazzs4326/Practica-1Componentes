"use client";

import { useState } from "react";
import { Alert } from "reactstrap";
import { Button } from "reactstrap";

export function Toast(color, colorAlert) {
  const [isVisible, setIsVisible] = useState(false);

  const visible = () => setIsVisible(true);
  
  setTimeout(() => {
    setIsVisible(false);
  }, 3000);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <Alert color={colorAlert} isOpen={isVisible} toggle={visible}>Holaaaaaa.</Alert>

      <Button onClick={visible}>Toast</Button>
      
    </div>
  );
}
