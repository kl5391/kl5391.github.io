import { Dialog } from "primereact/dialog";
import { Carousel } from "primereact/carousel";

export default function SocialMediaDialog({ visible, setVisible }) {
  return (
    <Dialog
      header="My Contact"
      visible={true}
      style={{ width: "100vw" }}
      onHide={() => {
        if (!visible) return;
        setVisible(false);
      }}
    >
      <h1>COMING SOON</h1>
    </Dialog>
  );
}
