import { portData } from "../../index";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="portfolio__container container grid grid-cols-3 gap-[2.5rem] max-md:grid-cols-2 max-md:gap-[1.2rem] max-sm:grid-cols-1 max-sm:gap-[1rem]">
                {portData.map((item) => {
                    let liveUrl: string;
                    if ("liveUrl" in item && typeof item.liveUrl === "string") {
                        liveUrl = item.liveUrl;
                    } else {
                        liveUrl = "#";
                    }

                    return (
                        <article key={item.id} className="portfolio__item">
                            <div className="portfolio__item-image">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </div>
                            <h3>{item.title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={item.github} target="_blank">
                                    <button className="btn rounded-2xl outline-none transition duration-400 ease-in hover:text-white">
                                        Source Code
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
            <div className="mt-[3.5rem] flex justify-center">
                <p className="text-[#ffffffb8]">
                    For more visit{" "}
                    <a href="https://github.com/OctoPie23" target="_blank">
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
