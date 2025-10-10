import React, { useEffect } from "react";
import { Terminal } from "primereact/terminal";
import { TerminalService } from "primereact/terminalservice";

export default function MediaTerminal() {
  const commandHandler = (text) => {
    let response;
    let argsIndex = text.indexOf(" ");
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch (command) {
      case "getInfo":
        response = "https://www.google.com";
        break;

      case "clear":
        response = null;
        break;

      default:
        response = "Unknown command: " + command;
        break;
    }

    if (response) TerminalService.emit("response", response);
    else TerminalService.emit("clear");
  };

  useEffect(() => {
    TerminalService.on("command", commandHandler);

    return () => {
      TerminalService.off("command", commandHandler);
    };
  }, []);

  return (
    <div className="card terminal-demo">
      <h1>
        Enter <b style={{ color: "#a78bfa" }}>getInfo</b> to get all relevant
        contact information about me
      </h1>
      <Terminal
        prompt="root $"
        pt={{
          root: "bg-gray-900 text-white border-round",
          prompt: "text-gray-400 mr-2",
          command: "text-primary-300",
          response: "link-primary-300",
        }}
      />
    </div>
  );
}
