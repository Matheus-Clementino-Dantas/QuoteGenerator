import { useEffect, useState } from "react";
import { Dices } from "lucide-react";

function RandomQuote() {
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        if (!response.ok) throw new Error("Error in the response");
        const data = await response.json();
        console.log(data);
        setQuote(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchQuote();
  }, []);
  const [quote, setQuote] = useState("");
  return (
    <article className="shadow-sm min-w-60 w-[50dvw] max-w-2xl bg-bg rounded-lg py-4 px-6">
      <figure className="space-y-2.5">
        <blockquote className="text-text-light font-quote text-lg md:text-2xl lg:text-3xl">
          "{quote.quote}"
        </blockquote>
        <figcaption className="text-end font-semibold font-site text-text-dark text-sm md:text-xl lg:text-2xl">
          - {quote.author}
        </figcaption>
      </figure>
      <button className="text-text-light bg-bg-light p-2 rounded-lg shadow-sm">
        <Dices />
      </button>
    </article>
  );
}
export default RandomQuote;
