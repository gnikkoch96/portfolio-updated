import Background from "./components/Background";
import Header from "./components/Header";
import {MobileNavigation} from "./components/Navigation";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Projects from "./sections/projects/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="min-h-screen text-white">
      <Background />
      <Header />

      <div>
        <Home />
        <Experience />
        <Projects />
        <About/>
      </div>

      <MobileNavigation />

      <Footer/>
    </main>
  );
}

export default App;
