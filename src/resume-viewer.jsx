import { Document, Page } from "react-pdf";

export default function ResumeViewer() {
  return (
    <div>
      <iframe
        src="src\assets\kyle_long_resume.pdf"
        width="100%"
        height="800px"
        title="My Resume"
      >
        <p>
          Your browser does not support iframes. You can
          <a href="src\assets\kyle_long_resume.pdf">download the PDF</a>{" "}
          instead.
        </p>
      </iframe>
    </div>
  );
}
