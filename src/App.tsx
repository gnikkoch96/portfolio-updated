import Background from "./components/Background";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Experience from "./sections/Experience";
import Home from "./sections/Home";

function App() {
  return (
    <main className="min-h-screen text-white">
      <Background />
      <Header />
      
      <div className="px-6">
        <Home />
        <Experience/>
      </div>
      
      <Navigation />
    </main>
  );
}

export default App;
