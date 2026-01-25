import { useEffect, useState } from "react";
import CopyButton from "./CopyButton";
import ShareOnXButton from "./ShareOnXButton";
import FavoritesButton from "./FavoritesButton";
import QuoteCard from "./QuoteCard";

function QuoteGrid({ viewMode }) {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const randomSkip = Math.floor(Math.random() * 1440);

      const response = await fetch(
        `https://dummyjson.com/quotes?limit=12&skip=${randomSkip}`,
      );
      const data = await response.json();
      console.log(data);
      setCards((prevCards) => [...prevCards, ...data.quotes]);
    } catch (error) {
      console.error("Erro na API:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCards([]);

    if (viewMode === "favorites") {
      queueMicrotask(() => {
        const saved = JSON.parse(localStorage.getItem("favorites")) || [];
        setCards(saved);
      });
    } else {
      fetchQuotes();
    }
  }, [viewMode]);

  return (
    <div className="w-full flex flex-col gap-8 pb-10">
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 relative">
        {cards.length > 0
          ? cards.map((quote, index) => (
              <QuoteCard
                key={`${quote.id}-${index}`}
                quote={quote}
                isloading={loading}
                className={" break-inside-avoid"}
              >
                <div>
                  <CopyButton isloading={loading} quote={quote} />
                  <ShareOnXButton isloading={loading} quote={quote} />
                  <FavoritesButton isloading={loading} quote={quote} />
                </div>
              </QuoteCard>
            ))
          : !loading && (
              <p className="text-text-dark absolute right-1/2 translate-x-1/2 text-xl mt-10">
                {viewMode === "favorites"
                  ? "No favorites yet."
                  : "No quotes found."}
              </p>
            )}
      </div>

      {loading && (
        <p className="text-text-light text-center animate-pulse">
          Fetching wisdom...
        </p>
      )}

      {viewMode === "explore" && !loading && (
        <div className="flex justify-center">
          <button
            onClick={fetchQuotes}
            className="px-6 py-2 bg-bg-light text-text-light rounded-full hover:bg-text-light hover:text-bg-dark transition-colors duration-300 shadow-sm"
          >
            Load More ↓
          </button>
        </div>
      )}
    </div>
  );
}

export default QuoteGrid;
