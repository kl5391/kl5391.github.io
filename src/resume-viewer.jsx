const resume = "/kyle_long_resume.pdf";

export default function ResumeViewer() {
  return (
    <iframe src={resume} title="My Resume">
      <p>
        Your browser does not support iframes. You can
        <a href={resume}>download the PDF</a> instead.
      </p>
    </iframe>
  );
}
