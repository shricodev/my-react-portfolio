import { portData } from "../../index";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__container container grid grid-cols-3 gap-[2.5rem] max-xl:grid-cols-2 max-md:gap-[1.2rem] max-sm:grid-cols-1 max-sm:gap-[1rem]">
        {portData.map((item) => {
          let liveUrl: string;
          if ("liveUrl" in item && typeof item.liveUrl === "string") {
            liveUrl = item.liveUrl;
          } else {
            liveUrl = "#";
          }

          return (
            <article
              key={item.id}
              className="portfolio__item flex flex-col items-center justify-between p-2"
            >
              <h3 className="m-0 text-lg font-bold text-zinc-100">
                {item.title}
              </h3>
              <p className="mb-4 max-w-[300px] text-center text-sm text-zinc-400">
                {item.subtitle}
              </p>
              <div className="portfolio__item-cta">
                <a href={item.github} target="_blank">
                  <button className="btn gap-1 rounded-2xl p-3 outline-none transition duration-400 ease-in hover:text-white max-md:p-2 md:gap-2">
                    Source Code
                  </button>
                </a>
                <a href={liveUrl} target="_blank">
                  <button
                    className="btn btn-primary rounded-2xl disabled:cursor-not-allowed disabled:opacity-50 max-md:p-2"
                    disabled={item.noLive}
                  >
                    Live Demo
                  </button>
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-[3.5rem] flex justify-center">
        <p className="text-[#ffffffb8]">
          For more visit{" "}
          <a href="https://github.com/shricodev" target="_blank" rel="noopener">
            <span className="cursor-pointer font-bold text-primary">
              My Github Profile✌️
            </span>
          </a>
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
