import { useEffect, useState } from "react";
import { Dices, Undo } from "lucide-react";
import Button from "./Button";
import QuoteCard from "./QuoteCard";
import CopyButton from "./CopyButton";
import ShareOnXButton from "./ShareOnXButton";
import FavoritesButton from "./FavoritesButton";
function RandomQuote() {
  const [quote, setQuote] = useState(null);
  const [isloading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getRandomQuote();
  }, []);

  async function getRandomQuote() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/quotes/random");
      if (!response.ok) throw new Error("Error in the response");
      const data = await response.json();
      setQuote(data);
      setLoading(false);
      setHistory((prevhistory) => [...prevhistory, data]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function previousQuote() {
    if (history.length <= 1) return;

    const newHistory = [...history];
    newHistory.pop();
    const previous = newHistory[newHistory.length - 1];
    setQuote(previous);
    setHistory(newHistory);
  }

  return (
    <QuoteCard
      className="min-w-60 w-[50dvw] max-w-2xl"
      quote={quote}
      isloading={isloading}
      id="RandomQuote"
    >
      <Button
        disabled={isloading}
        className="transition-transform duration-300 hover:scale-95 group"
        onClick={getRandomQuote}
        aria="get a new random quote"
      >
        <Dices className="h-4 w-4 md:h-6 md:w-6 transition-transform duration-300 group-active:rotate-360" />
      </Button>
      <CopyButton quote={quote} isloading={isloading} />
      <ShareOnXButton quote={quote} isloading={isloading} />
      <FavoritesButton quote={quote} isloading={isloading} key={quote?.id} />
      <Button
        disabled={isloading || history.length <= 1}
        className="transition-transform duration-300 hover:scale-95 group"
        aria="Previous quote"
        onClick={previousQuote}
      >
        <Undo className="h-4 w-4 md:h-6 md:w-6 transition-transform duration-300 group-active:-rotate-z-180" />
      </Button>
    </QuoteCard>
  );
}
export default RandomQuote;
