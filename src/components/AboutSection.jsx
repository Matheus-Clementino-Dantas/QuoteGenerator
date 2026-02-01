import { UserStar, Flame } from "lucide-react";
import aristotle from "../assets/Aristotle.png";
import albert from "../assets/albert_Einstein.jpg";
import nietzsche from "../assets/Nietzsche.webp";
import Counter from "./Counter";

function AboutSection() {
  return (
    <section className="w-screen max-w-5xl flex justify-center h-screen p-2">
      <div className="bento-grid w-full h-[clamp(35rem,90vh,40rem)]">
        <article className="bento-hero bento-card flex flex-col justify-between relative overflow-hidden">
          <div className="z-10 bento-container-icon">
            <UserStar className="bento-icon" />
          </div>
          <img
            src={aristotle}
            alt="Aristotle"
            className="absolute top-0 left-3/4 -translate-x-1/2 h-3/4 sm:h-2/3 w-auto z-0 opacity-70 sm:left-1/2 object-cover"
            style={{
              maskImage:
                "radial-gradient(circle at center, black 40%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 40%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="space-y-2 z-10">
            <h2 className="text-text-light font-site font-semibold text-xl md:text-3xl">
              Wisdom across ages
            </h2>
            <p className="text-text-dark font-site text-base md:text-lg lg:text-2xl leading-relaxed">
              Explore quotes from all eras and places — from Ancient Greek
              philosophers like Plato to today’s most influential figures.
            </p>
          </div>
        </article>
        <article className="bento-top bento-card space-y-2">
          <div className="flex items-center gap-4">
            <div className="bento-container-icon ">
              <Flame className="bento-icon" />
            </div>
            <h3 className="text-text-light font-site font-semibold text-xl md:text-3xl">
              Endless Voices, Timeless Words
            </h3>
          </div>
          <p className="text-text-dark font-site text-base sm:text-lg lg:text-2xl leading-relaxed">
            Each click brings something new — an ever-flowing stream of ideas.
          </p>
          <dl className="flex justify-around w-full items-start sm:items-center h-1/2">
            <div className="flex flex-col justify-center items-center">
              <dd className="text-xl sm:text-2xl md:text-4xl font-semibold font-site text-text-light">
                <Counter end={1000} threshold={0.5} />
              </dd>
              <dt className="text-text-dark font-site text-lg md:text-2xl pr-1">
                Quotes
              </dt>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
              <dd className="text-xl sm:text-2xl md:text-4xl font-semibold font-site text-text-light">
                <Counter end={30} threshold={0.5} />
              </dd>
              <dt className="text-text-dark font-site text-lg md:text-2xl pr-1">
                Authors
              </dt>
            </div>
          </dl>
        </article>
        <article className="bento-center bento-card relative overflow-hidden">
          <img
            src={albert}
            alt="Albert Einstein"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            aria-hidden="true"
          />
        </article>

        <article className="bento-bottom bento-card relative overflow-hidden">
          <img
            src={nietzsche}
            alt="Friedrich Nietzsche"
            className="absolute inset-0 w-full h-full object-cover opacity-90 object-top"
            aria-hidden="true"
          />
        </article>
      </div>
    </section>
  );
}
export default AboutSection;
