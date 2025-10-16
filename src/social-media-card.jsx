import { Splitter, SplitterPanel } from "primereact/Splitter";
import { Link } from "react-router-dom";
import githublogo from "./assets/github-mark.png";
import linkedinlogo from "./assets/linkedin-logo.svg";

export default function SocialMediaCard() {
  return (
    <Splitter>
      <SplitterPanel>
        <Link to="https://github.com/kl5391">
          <img src={githublogo} />
        </Link>
      </SplitterPanel>
      <SplitterPanel>
        <Link to="https://www.linkedin.com/in/kyle-long-ny/">
          <img src={linkedinlogo} />
        </Link>
      </SplitterPanel>
    </Splitter>
  );
}
