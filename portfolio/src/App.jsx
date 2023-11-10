import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Services id="services" />
      <Projects id="projects" />
    </div>
  );
}

export default App;