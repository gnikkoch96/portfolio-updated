import Background from "./components/Background";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Experience from "./sections/Experience";
import Home from "./sections/Home";
import Projects from "./sections/projects/Projects";

function App() {
  return (
    <main className="min-h-screen text-white">
      <Background />
      <Header />

      <div>
        <Home />
        <Experience />
        <Projects />
      </div>

      <Navigation />
    </main>
  );
}

export default App;
