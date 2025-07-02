import logo from "./assets//images & videos//final_logo.png";
import Home from "./home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Portofolio from "./portofolio-page";
import "./assets//stylesheets//header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <>
        <header className="flex">
          <img src={logo} alt="Logo"></img>
          <nav>
            <ul className="flex">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li>
                <Link to={"/projects"}>My Project</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio-project" element={<Portofolio />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
