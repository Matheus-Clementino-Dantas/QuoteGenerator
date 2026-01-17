import { useState, useEffect } from "react";
import Button from "./Button";
import { Copy, Check } from "lucide-react";

function CopyButton({ quote, isloading }) {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [copied]);
  async function copyQuote() {
    try {
      await navigator.clipboard.writeText(`"${quote.quote}" - ${quote.author}`);
      setCopied(true);
    } catch (err) {
      console.error(err);
    }
  }
  return (
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
  );
}
export default CopyButton;
