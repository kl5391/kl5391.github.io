import "./Pages.css";
import { useNavigate } from "react-router-dom";
import { Fieldset } from "primereact/fieldset";
import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { ScrollPanel } from "primereact/scrollpanel";
import { TabMenu } from "primereact/tabmenu";
import { useState } from "react";
import { Terminal } from "primereact/terminal";

export default function Home() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { label: "Technical Skills" },
    { label: "Programming Languages & Frameworks" },
    { label: "Tools & Technologies" },
  ];

  function ListObject({ activeIndex }) {
    if (activeIndex == 0) {
      return (
        <ScrollPanel style={{ width: "100%", height: "200px" }}>
          <ul className="scroll-panel">
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
        <ScrollPanel style={{ width: "100%", height: "200px" }}>
          <ul className="scroll-panel">
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
        <ScrollPanel style={{ width: "100%", height: "200px" }}>
          <ul className="scroll-panel">
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
      <div className="homepage">
        <div className="info-container">
          <Fieldset legend="About me" className="info-card">
            <h1 style={{ color: "#363636c7" }}>
              Thanks for visiting my page! My name is Kyle, and I'm a second
              year{" "}
              <b style={{ color: "#000000dc" }}>software engineering student</b>{" "}
              who is currently studying at the
              <b style={{ color: "#000000dc" }}>
                {" "}
                Rochester Institue of Technology
              </b>
              . Beyond that, I'm a brother of Sigma Alpha Mu and a student
              employee for the Information Technology Services department at
              RIT.
            </h1>
          </Fieldset>

          <Fieldset legend="What I Do" className="info-card">
            <h1>
              During my years at RIT, I’ve expanded those skills even further.
              While I believe I can learn anything, I currently feel most
              proficient in:
            </h1>
            <div className="tabmenu-backdrop">
              <TabMenu
                model={items}
                activeIndex={activeIndex}
                onTabChange={(e) => setActiveIndex(e.index)}
                className="tab-menu"
              />
              <ListObject
                activeIndex={activeIndex}
                style={{ width: "100%", height: "50px" }}
              />
            </div>
            <Button
              label="View My Projects"
              onClick={() => navigate("/pages/projects")}
              className="info-button"
            />
          </Fieldset>

          <Fieldset legend="What I'm Up To" className="info-card">
            <h1 style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              varius mauris quis nisl tristique, at pellentesque lectus
              vehicula. Maecenas ornare sit amet leo vitae elementum. Aliquam
              pharetra efficitur lorem, porta congue sapien semper ut. Sed
              sodales accumsan tellus non pharetra. Aenean pretium sem id
              vulputate elementum. Mauris vehicula congue sem, quis congue purus
            </h1>
          </Fieldset>

          <Fieldset legend="Connect with me" className="info-card">
            <Terminal />
          </Fieldset>
        </div>
      </div>
    </>
  );
}
