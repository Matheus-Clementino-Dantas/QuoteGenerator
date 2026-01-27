import HeroSection from "./components/HeroSection";
import RandomQuote from "./components/RandomQuote";
import AboutSection from "./components/AboutSection";
import ExploreSection from "./components/ExploreSection";
import ToggleMode from "./components/ToggleMode";
function App() {
  return (
    <main className="bg-bg-dark min-h-screen flex items-center justify-center flex-col overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <section
        className="h-screen flex justify-center items-center"
        id="RandomQuote"
      >
        <RandomQuote />
      </section>
      <ExploreSection />
      <ToggleMode />
    </main>
  );
}

export default App;
