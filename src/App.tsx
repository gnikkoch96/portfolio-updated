import Background from "./components/Background";
import Header from "./components/Header";
import Home from "./sections/Home";

function App() {
  return (
    <main className="min-h-screen text-white">
      <Background />
      <div className="px-6">
        <Header />
        <Home />
      </div>
    </main>
  );
}

export default App;
