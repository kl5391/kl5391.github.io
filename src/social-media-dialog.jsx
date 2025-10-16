import { Dialog } from "primereact/dialog";
import { Carousel } from "primereact/carousel";
import SocialMediaCard from "./social-media-card";

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
      <SocialMediaCard />
    </Dialog>
  );
}
