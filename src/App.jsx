import HeroSection from "./components/HeroSection";
import RandomQuote from "./components/RandomQuote";
function App() {
  return (
    <div className="bg-bg-dark min-h-screen flex items-center justify-center flex-col scroll-smooth overflow-hidden">
      <HeroSection />
      <RandomQuote />
    </div>
  );
}

export default App;
