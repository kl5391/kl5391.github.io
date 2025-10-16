import { Button } from "primereact/button";

export default function InteractButton({ text }) {
  return (
    <div className="card flex justify-content-center">
      <Button label={text} className="info-button" size="large" />
    </div>
  );
}
