import { BrowserRouter, Routes, Route } from "react-router-dom";
import CV from "./pages/CV";
import AboutMe from "./pages/AboutMe";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CV children={<AboutMe />} />} path="/" />
        <Route element={<CV children={<Education />} />} path="/education" />
        <Route element={<CV children={<Experience />} />} path="/experience" />
        <Route element={<CV children={<Projects />} />} path="/projects" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
