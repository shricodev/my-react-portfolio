import JARVIS from "../../assets/jarvis.jpg";
import NEPSE from "../../assets/portfolio1.jpg";
import COVID from "../../assets/covid.jpg";

const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Works</h5>
            <h2>Portfolio</h2>

            <div className="portfolio__container container grid grid-cols-3 gap-[2.5rem] max-md:grid-cols-2 max-md:gap-[1.2rem] max-sm:grid-cols-1 max-sm:gap-[1rem]">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={COVID} alt="" />
                    </div>
                    <h3>Portfolio Item Title</h3>
                    <div className="portfolio__item-cta">
                        <button className="btn rounded-2xl outline-none transition duration-400 ease-in hover:text-white">
                            Github
                        </button>
                        <button
                            className="btn btn-primary rounded-2xl disabled:cursor-not-allowed disabled:opacity-50"
                            disabled={true}
                        >
                            Live Demo
                        </button>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={JARVIS} alt="" />
                    </div>
                    <h3>Portfolio Item Title</h3>
                    <div className="portfolio__item-cta">
                        <button className="btn rounded-2xl outline-none transition duration-400 ease-in hover:text-white">
                            Github
                        </button>
                        <button
                            className="btn btn-primary rounded-2xl disabled:cursor-not-allowed disabled:opacity-50"
                            disabled={true}
                        >
                            Live Demo
                        </button>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={NEPSE} alt="" />
                    </div>
                    <h3>Portfolio Item Title</h3>
                    <div className="portfolio__item-cta">
                        <button className="btn rounded-2xl outline-none transition duration-400 ease-in hover:text-white">
                            Github
                        </button>
                        <button
                            className="btn btn-primary rounded-2xl disabled:cursor-not-allowed disabled:opacity-50"
                            disabled={true}
                        >
                            Live Demo
                        </button>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;
