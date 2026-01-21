import { UserStar, Flame } from "lucide-react";
import aristotle from "../assets/Aristotle.png";

function AboutSection() {
  return (
    <section className="w-screen max-w-5xl flex justify-center h-screen p-2">
      <div className="bento-grid w-full h-[clamp(20rem,70vh,40rem)]">
        <article className="bento-hero bento-card flex flex-col justify-between p-4 lg:p-6 relative transition-transform duration-300 hover:scale-95">
          <div className="z-10 bento-container-icon">
            <UserStar className="bento-icon" />
          </div>
          <img
            src={aristotle}
            alt="Aristotle"
            className="absolute opacity-50 inset-0 h-2/3 w-auto z-0 object-cover object-top"
            style={{
              maskImage:
                "radial-gradient(circle at center, black 40%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 40%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div className="space-y-2 z-10">
            <h3 className="text-text-light font-site font-semibold text-xl md:text-3xl">
              Wisdom across ages
            </h3>
            <p className="text-text-dark font-site text-base md:text-lg lg:text-2xl leading-relaxed">
              Explore quotes from all eras and places — from Ancient Greek
              philosophers like Plato to today’s most influential figures.
            </p>
          </div>
        </article>
        <article className="bento-top bento-card transition-transform duration-300 hover:scale-95 p-4 lg:p-6 space-y-2">
          <div className="flex items-center gap-4">
            <div className="bento-container-icon ">
              <Flame className="bento-icon" />
            </div>
            <h3 className="text-text-light font-site font-semibold text-xl md:text-3xl">
              Endless Voices, Timeless Words
            </h3>
          </div>
          <p className="text-text-dark font-site text-base md:text-lg lg:text-2xl leading-relaxed">
            Each click brings something new — an ever-flowing stream of ideas.
          </p>
          <dl className="flex justify-around w-full items-center h-1/2">
            <div className="flex flex-col justify-center items-center">
              <dd className="text-xl md:text-4xl font-semibold font-site text-text-light">
                1000+
              </dd>
              <dt className="text-text-dark font-site text-lg md:text-2xl pr-1">
                Quotes
              </dt>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
              <dd className="text-xl md:text-4xl font-semibold font-site text-text-light">
                30+
              </dd>
              <dt className="text-text-dark font-site text-lg md:text-2xl pr-1">
                Authors
              </dt>
            </div>
          </dl>
        </article>
        <article className="bento-center bento-card transition-transform duration-300 hover:scale-95 p-4 lg:p-6"></article>
        <article className="bento-bottom bento-card transition-transform duration-300 hover:scale-95 p-4 lg:p-6"></article>
      </div>
    </section>
  );
}
export default AboutSection;
