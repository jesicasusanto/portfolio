import "./App.css";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

function App() {
  return (
    <main>
      <div className="background scroll-smooth">
        <Navbar />
        <div className="flex flex-col justify-center items-center pt-1.5">
          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Projects />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
