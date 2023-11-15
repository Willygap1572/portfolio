import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Projects from './components/Projects/Projects';
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Services id="services" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer id='footer'/>
    </div>
  );
}

export default App;
