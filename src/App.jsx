import "./App.css"
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About"
import Experience from "./components/Experience";
import Projects from "./components/Projects";
function App() {

  return (
    <main>
      <div className="background">
      <Navbar/>
        <div className="flex flex-col justify-center items-center pt-1.5">

        <Home/>

        <About/>

        <Experience/>

        <Projects/>
        
        </div>
      </div>
    </main>
  )
}

export default App
