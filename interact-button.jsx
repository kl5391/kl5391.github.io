import React, { useRef } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

export default function InteractButton({ text }) {
  return (
    <div className="card flex justify-content-center">
      <Button label={text} className="info-button" size="large" />
    </div>
  );
}
