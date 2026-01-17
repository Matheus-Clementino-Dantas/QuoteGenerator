import { useEffect, useState } from "react";
import { Dices, Copy, Check, Undo, Bookmark } from "lucide-react";
import Button from "./Button";
import XIcon from "../assets/XIcon";
import QuoteCard from "./QuoteCard";
function RandomQuote() {
  const [quote, setQuote] = useState(null);
  const [isloading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [history, setHistory] = useState([]);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    getRandomQuote();
  }, []);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [copied]);
  async function getRandomQuote() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/quotes/random");
      if (!response.ok) throw new Error("Error in the response");
      const data = await response.json();
      setQuote(data);
      setLoading(false);
      setHistory((prevhistory) => [...prevhistory, data]);
      alreadyFavorite();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  async function copyQuote() {
    try {
      await navigator.clipboard.writeText(`"${quote.quote}" - ${quote.author}`);
      setCopied(true);
    } catch (err) {
      console.error(err);
    }
  }
  function postOnX() {
    const postContent = `"${quote?.quote}" - ${quote?.author}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      postContent,
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }
  function previousQuote() {
    if (history.length <= 1) return;

    const newHistory = [...history];
    newHistory.pop();
    const previous = newHistory[newHistory.length - 1];
    setQuote(previous);
    setHistory(newHistory);
  }
  function alreadyFavorite() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const alreadyExists = favorites.some((fav) => fav?.id === quote?.id);
    if (alreadyExists) return setFavorite(true);
    return setFavorite(false);
  }
  function saveFavorite() {
    if (!quote) return;
    const getFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (favorite) return;
    const newFavorites = [...getFavorites, quote];
    localStorage.setItem("favorites", JSON.stringify(newFavorites));

    setFavorite(true);
  }
  return (
    <QuoteCard
      className="min-w-60 w-[50dvw] max-w-2xl"
      quote={quote}
      isloading={isloading}
    >
      <Button
        disabled={isloading}
        className="transition-transform duration-300 hover:scale-95 group"
        onClick={getRandomQuote}
        aria="get a new random quote"
      >
        <Dices className="h-4 w-4 md:h-6 md:w-6 transition-transform duration-300 group-active:rotate-360" />
      </Button>
      <Button
        disabled={isloading}
        className="transition-transform duration-300 hover:scale-95 group relative"
        onClick={copyQuote}
        aria="copy the quote"
      >
        <Copy
          className={`h-4 w-4 md:h-6 md:w-6 transition-opacity duration-300 ${
            copied ? "opacity-0" : "opacity-100"
          }`}
        />
        <Check
          className={`h-4 w-4 md:h-6 md:w-6 transition-opacity duration-300 ${
            copied ? "opacity-100" : "opacity-0"
          } absolute top-1/2 left-1/2 -translate-1/2`}
        />
      </Button>
      <Button
        disabled={isloading}
        className="transition-transform duration-300 hover:scale-95 group"
        aria="post the quote in X"
        onClick={postOnX}
      >
        <XIcon className="h-4 w-4 md:h-6 md:w-6 transition-transform duration-300 group-active:fill-white" />
      </Button>
      <Button
        disabled={isloading || history.length <= 1}
        className="transition-transform duration-300 hover:scale-95 group"
        aria="Previous quote"
        onClick={previousQuote}
      >
        <Undo className="h-4 w-4 md:h-6 md:w-6 transition-transform duration-300 group-active:-rotate-z-180" />
      </Button>
      <Button
        disabled={isloading}
        className="transition-transform duration-300 hover:scale-95 group"
        aria="add to favorites"
        onClick={saveFavorite}
      >
        <Bookmark
          className={`h-4 w-4 md:h-6 md:w-6 transition-colors duration-300 ${favorite ? "stroke-amber-300 fill-amber-300" : ""}`}
        />
      </Button>
    </QuoteCard>
  );
}
export default RandomQuote;
