import { useState } from "react";
import QuoteGrid from "./QuoteGrid";
function ExploreSection() {
  const [viewMode, setViewMode] = useState("explore");

  return (
    <section
      className="min-h-screen w-4/5 py-12 space-y-4 max-w-400"
      id="Explore"
    >
      <h2 className="text-text-light tracking-tighter text-4xl font-site font-semibold sm:text-6xl">
        Explore quotes and see your favorites!
      </h2>
      <div className="bg-bg w-max p-2 rounded-lg shadow-sm flex items-center gap-2">
        <button
          className={`${viewMode === "explore" ? "bg-bg-light" : "bg-bg"} transition-colors duration-300 text-text-light font-semibold font-site text-base sm:text-xl px-2 py-1.5 rounded-lg `}
          onClick={() => setViewMode("explore")}
        >
          Explore
        </button>
        <button
          className={`${viewMode === "favorites" ? "bg-bg-light" : "bg-bg"} transition-colors duration-300  text-text-light font-semibold font-site text-base sm:text-xl py-1.5 px-2  rounded-lg `}
          onClick={() => setViewMode("favorites")}
        >
          Favorites
        </button>
      </div>
      <QuoteGrid />
    </section>
  );
}
export default ExploreSection;
