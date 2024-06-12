import styles from "./App.module.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Experince from "./components/Experince/Experince";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experince />
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
