function HeroSection() {
  return (
    <header className="h-screen flex items-center justify-center w-screen">
      <section className="space-y-2 flex flex-col items-center justify-center">
        <h1 className="text-text-light text-5xl font-site sm:text-6xl md:text-8xl tracking-tighter font-semibold">
          “All roads lead to <br />
          QuoteGenerator.”
        </h1>
        <p className="text-text-dark text-lg md:text-3xl font-site text-center">
          Explore a collection of over a thousand quotes.
        </p>
        <div className="flex items-center justify-center gap-2 w-full">
          <a
            href="#RandomQuote"
            className="p-3 bg-bg-light/90 text-white rounded-md font-semibold font-site shadow-sm text-xl leading-none"
          >
            Random Quote
          </a>
          <a
            href="#Explore"
            className="p-3 bg-white/80 text-black/90 rounded-md font-semibold font-site shadow-sm text-xl leading-none"
          >
            Explore Quotes
          </a>
        </div>
      </section>
    </header>
  );
}
export default HeroSection;
