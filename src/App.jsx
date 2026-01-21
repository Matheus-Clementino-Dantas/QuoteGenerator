import HeroSection from "./components/HeroSection";
import RandomQuote from "./components/RandomQuote";
import AboutSection from "./components/AboutSection";
function App() {
  return (
    <main className="bg-bg-dark min-h-screen flex items-center justify-center flex-col overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <RandomQuote />
    </main>
  );
}

export default App;
