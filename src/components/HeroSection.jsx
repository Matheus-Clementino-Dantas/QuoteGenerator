function HeroSection() {
  return (
    <header className="h-screen flex items-center justify-center w-screen">
      <section className="space-y-2 flex flex-col items-center justify-center">
        <h1 className="text-text-light text-5xl font-site sm:text-6xl md:text-8xl lg:text-9xl tracking-tighter font-semibold">
          “All roads lead to <br />
          QuoteGenerator.”
        </h1>
        <p className="text-text-dark text-lg md:text-3xl font-site text-center">
          Explore a collection of over a thousand quotes.
        </p>
        <div className="flex items-center justify-center gap-2 w-full">
          <a
            href="#RandomQuote"
            className="p-2.5 bg-bg-light/90 text-text-light rounded-md font-semibold font-site shadow-sm text-lg transition-transform duration-300 leading-none sm:text-xl sm:p-3 hover:scale-95"
          >
            Random Quote
          </a>
          <a
            href="#Explore"
            className="p-2.5 bg-white/80 text-black/90 rounded-md font-semibold font-site shadow-sm text-lg leading-none sm:text-xl sm:p-3 transition-transform duration-300 hover:scale-95"
          >
            Explore Quotes
          </a>
        </div>
      </section>
    </header>
  );
}
export default HeroSection;
