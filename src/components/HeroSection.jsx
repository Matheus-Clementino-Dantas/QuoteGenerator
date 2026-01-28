import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  const textToType = "“All roads lead to\nQuoteGenerator”";

  return (
    <header className="h-screen flex items-center justify-center w-screen overflow-hidden">
      <section className="space-y-2 flex flex-col items-center justify-center">
        <h1 className="grid place-items-center text-text-light text-5xl font-site sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter font-semibold">
          <span className="col-start-1 row-start-1 invisible whitespace-pre-line text-center">
            {textToType}
          </span>

          <TypeAnimation
            sequence={[textToType]}
            wrapper="span"
            speed={56}
            cursor={false}
            repeat={0}
            className="col-start-1 row-start-1 whitespace-pre-line text-center"
          />
        </h1>

        <p className="text-text-dark text-lg md:text-3xl font-site text-center">
          Explore a collection of over a thousand quotes.
        </p>

        <div className="flex items-center justify-center gap-2 w-full pt-4">
          <a
            href="#RandomQuote"
            className="p-2.5 bg-bg-light/90 text-text-light rounded-md font-semibold font-site shadow-sm text-lg transition-transform duration-300 leading-none sm:text-xl sm:p-3 hover:scale-95"
          >
            Random Quote
          </a>
          <a
            href="#Explore"
            className="p-2.5 bg-secondary text-text-secondary rounded-md font-semibold font-site shadow-sm text-lg leading-none sm:text-xl sm:p-3 transition-transform duration-300 hover:scale-95"
          >
            Explore Quotes
          </a>
        </div>
      </section>
    </header>
  );
}

export default HeroSection;
