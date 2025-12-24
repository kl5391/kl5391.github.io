import "./Pages.css";
import { useNavigate } from "react-router-dom";
import { Fieldset } from "primereact/fieldset";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { ScrollPanel } from "primereact/scrollpanel";
import { TabMenu } from "primereact/tabmenu";
import { useState } from "react";
import MediaTerminal from "../media-terminal";
import { SelectButton } from "primereact/selectbutton";
import InteractButton from "../interact-button";
import { Link } from "react-router-dom";
import SocialMediaCard from "../social-media-card";
import Silk from "./Silk";

export default function Home() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(1);
  const options = ["On", "Off"];
  const [value, setValue] = useState(options[0]);

  const items = [
    { label: "Technical Skills" },
    { label: "Programming Languages & Frameworks" },
    { label: "Tools & Technologies" },
  ];

  function FunMode({ value }) {
    if (value == "On") {
      return <MediaTerminal />;
    } else if (value == "Off") {
      return <SocialMediaCard />;
    }
  }

  function ListObject({ activeIndex }) {
    if (activeIndex == 0) {
      return (
        <ScrollPanel>
          <ul>
            <li>Full Stack Development</li>
            <li>Database Management</li>
            <li>
              Version Control (Git, GitHub, GitLab, GitHub Actions, CI/CD)
            </li>
            <li>RESTful API Design</li>
            <li>Asynchronous Programming</li>
            <li>Agile Development & Peer Code Review</li>
          </ul>
        </ScrollPanel>
      );
    } else if (activeIndex == 1) {
      return (
        <ScrollPanel>
          <ul>
            <li>
              <strong>Backend:</strong> Java, Python, SQL, PostgreSQL, C
            </li>
            <li>
              <strong>Frontend:</strong> React, Angular, TypeScript, JavaScript
            </li>
            <li>
              <strong>Markup & Styles:</strong> HTML, CSS
            </li>
          </ul>
        </ScrollPanel>
      );
    } else if (activeIndex == 2) {
      return (
        <ScrollPanel>
          <ul>
            <li>PostgreSQL</li>
            <li>Git, GitHub, GitLab</li>
            <li>CI/CD Pipelines</li>
            <li>Windows 10/11, macOS, Ubuntu, iOS</li>
          </ul>
        </ScrollPanel>
      );
    }
  }

  return (
    <>
      <div className="silk-container">
        <Silk
          style={{ height: "100%", width: "100%" }}
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className="homepage">
        <div className="info-container">
          <Fieldset
            legend={<h2 className="card-legend-style">About Me</h2>}
            className="info-card"
          >
            <h1>Thanks for visiting my page!</h1>
            <h1 style={{ color: "#363636c7", fontSize: 25 }}>
              My name is Kyle and I'm a second year{" "}
              <b>Software Engineering student</b> who is currently studying at
              the
              <b> Rochester Institue of Technology</b>. I'm also a brother of{" "}
              <b>Sigma Alpha Mu</b> and a student employee for the{" "}
              <b>Information Technology Services</b> department at RIT.
            </h1>
            <Link to="/resume">
              <InteractButton text={"View My Resume"} />
            </Link>
          </Fieldset>

          <Fieldset
            legend={<h2 className="card-legend-style">What I Do</h2>}
            className="info-card"
          >
            <h1 style={{ color: "#363636c7" }}>
              During my years at RIT, I’ve expanded and developed hundreds of
              new skills. While I believe I can learn anything,{" "}
              <b style={{ color: "#000000dc" }}>
                I currently feel that I am most proficient in:
              </b>
            </h1>
            <span>
              <TabMenu
                model={items}
                activeIndex={activeIndex}
                onTabChange={(e) => setActiveIndex(e.index)}
              />
              <ListObject activeIndex={activeIndex} />
            </span>
            <Link to="https://github.com/kl5391">
              <InteractButton text={"See My Work"} />
            </Link>
          </Fieldset>

          <Fieldset
            legend={<h2 className="card-legend-style">What I'm Up To</h2>}
            className="info-card"
          >
            <h1 style={{ color: "#363636c7" }}>
              I’m currently working on building this personal website as a
              project to showcase my skills and projects.{" "}
              <b style={{ color: "#000000dc" }}>
                It’s a hands-on exploration of modern web development, including
                responsive design, dynamic layouts, and interactive UI elements.
              </b>
            </h1>
          </Fieldset>
          <Fieldset
            legend={<h2 className="card-legend-style">Connect With Me</h2>}
            className="info-card"
          >
            <div className="fun-mode">
              <h1>Fun mode?</h1>
              <SelectButton
                value={value}
                onChange={(e) => setValue(e.value)}
                options={options}
              />
            </div>
            <Divider></Divider>
            <FunMode value={value}></FunMode>
          </Fieldset>
        </div>
      </div>
    </>
  );
}
