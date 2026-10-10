import Background from "./components/Background";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./sections/Home";

function App() {
  return (
    <main className="min-h-screen text-white">
      <Background />
      <div className="px-6">
        <Header />
        <Home />
        <Navigation/>
      </div>

    </main>
  );
}

export default App;
