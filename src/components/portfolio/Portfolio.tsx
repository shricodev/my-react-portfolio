import { data } from "./PortfolioData";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="portfolio__container container grid grid-cols-3 gap-[2.5rem] max-md:grid-cols-2 max-md:gap-[1.2rem] max-sm:grid-cols-1 max-sm:gap-[1rem]">
                {data.map((item) => {
                    let liveUrl: string;
                    if ("liveUrl" in item && typeof item.liveUrl === "string") {
                        liveUrl = item.liveUrl;
                    } else {
                        liveUrl = "";
                    }

                    return (
                        <article key={item.id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <h3>{item.title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={item.github} target="_blank">
                                    <button className="btn rounded-2xl outline-none transition duration-400 ease-in hover:text-white">
                                        Github
                                    </button>
                                </a>
                                <a href={liveUrl} target="_blank">
                                    <button
                                        className="btn btn-primary rounded-2xl disabled:cursor-not-allowed disabled:opacity-50"
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
        </section>
    );
};

export default Portfolio;
