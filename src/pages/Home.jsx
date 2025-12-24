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
  const [activeIndex, setActiveIndex] = useState(0);
  const options = ["On", "Off"];
  const [value, setValue] = useState(options[1]);

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
            <li>Agile Development & Peer Code Review</li>
            <li>
              Version Control (Git, GitHub, GitLab, GitHub Actions, CI/CD)
            </li>
            <li>Database Management</li>
            <li>RESTful API Design</li>
            <li>Asynchronous Programming</li>
          </ul>
        </ScrollPanel>
      );
    } else if (activeIndex == 1) {
      return (
        <ScrollPanel>
          <ul>
            <li>
              <strong>Backend:</strong> Java, Python, TypeScript/JavaScript,
              SQL, C++, C, Rust
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
            <li>Node.js</li>
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
          color="#d9aeffff"
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
            <h1 style={{ color: "#363636c7" }}>
              My name is Kyle and I'm a second year{" "}
              <b>Software Engineering student</b> who is currently studying at
              the
              <b> Rochester Institue of Technology</b>. This website serves as
              the main page where you can find any relevant information about
              me.
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
              <InteractButton text={"View My Github"} />
            </Link>
          </Fieldset>

          <Fieldset
            legend={<h2 className="card-legend-style">What I'm Up To</h2>}
            className="info-card"
          >
            <h1 style={{ fontWeight: "bolder", margin: "0" }}>
              Order Predictor
            </h1>
            <h1 style={{ color: "#363636c7" }}>
              A full-stack web app combining a Python/Flask backend and React
              frontendthat integrates with the Google Gemini API to analyze user
              data and suggest viable stocks/orders based on historical
              patterns.
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
                onChange={(e) => {
                  if (e.value) {
                    setValue(e.value);
                  }
                }}
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
