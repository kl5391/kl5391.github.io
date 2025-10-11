import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { Routes, Route } from "react-router-dom";
import ResumeViewer from "./resume-viewer";

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="pages">
        <Route path="projects" element={<Projects />} />
      </Route>
      <Route path="resume" element={<ResumeViewer />} />
    </Routes>
  );
}
