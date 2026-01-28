import { TypeAnimation } from "react-type-animation";
function QuoteCard({
  isloading,
  className,
  quote,
  children,
  typeAnimation = false,
}) {
  return (
    <article
      className={`shadow-sm bg-bg rounded-lg py-4 px-4 sm:px-6 ${
        isloading ? "animate-pulse" : ""
      } ${className}`}
    >
      <figure className="space-y-1 sm:space-y-2.5">
        <blockquote className="text-text-light font-quote text-lg md:text-2xl lg:text-3xl">
          {typeAnimation && quote?.quote ? (
            <TypeAnimation
              key={quote.id}
              sequence={[`“${quote.quote}”`]}
              wrapper="span"
              speed={70}
              cursor={false}
              repeat={0}
            />
          ) : (
            `“${quote?.quote}”`
          )}
        </blockquote>
        <figcaption className="text-end font-semibold font-site text-text-dark text-sm md:text-xl lg:text-2xl">
          - {quote?.author}
        </figcaption>
      </figure>
      {children}
    </article>
  );
}
export default QuoteCard;
