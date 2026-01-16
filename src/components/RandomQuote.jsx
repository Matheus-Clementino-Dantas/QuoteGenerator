import { useEffect, useState } from "react";
import { Dices, Copy, Check, X } from "lucide-react";
import Button from "./Button";
import XIcon from "../assets/XIcon";
function RandomQuote() {
  const [quote, setQuote] = useState(null);
  const [isloading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    getRandomQuote();
  }, []);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 1500);
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
      setCopied(false);
    } catch (err) {
      console.error(err);
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
  function PostOnX() {
    const postContent = `"${quote?.quote}" - ${quote?.author}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      postContent,
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <article
      className={`shadow-sm min-w-60 w-[50dvw] max-w-2xl bg-bg rounded-lg py-4 px-6 ${
        isloading ? "animate-pulse" : ""
      }`}
    >
      <figure className="space-y-1 sm:space-y-2.5">
        <blockquote className="text-text-light font-quote text-lg md:text-2xl lg:text-3xl">
          "{quote?.quote}"
        </blockquote>
        <figcaption className="text-end font-semibold font-site text-text-dark text-sm md:text-xl lg:text-2xl">
          - {quote?.author}
        </figcaption>
      </figure>
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
        onClick={PostOnX}
      >
        <XIcon className="h-4 w-4 md:h-6 md:w-6 transition-transform duration-300 group-active:fill-white" />
      </Button>
    </article>
  );
}
export default RandomQuote;
