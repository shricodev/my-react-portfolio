import { useContext } from "react";
import { BsFolderCheck } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { AppContext } from "../../App";
import aboutImage from "../../assets/about-image.webp";

const About = () => {
  const context = useContext(AppContext);

  const { setActiveNav } = context as {
    setActiveNav: React.Dispatch<React.SetStateAction<string>>;
  };

  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="about__container grid-cols-35-50 container grid gap-[13%] max-md:grid-cols-1 max-md:place-items-center max-md:gap-0">
        <div className="about__myself linear-grad-45 grid aspect-square w-full place-items-center rounded-2rem max-md:m-[2.5rem] max-md:w-[50%] max-sm:mx-auto max-sm:mb-[3rem] max-sm:mt-0 max-sm:w-[65%]">
          <div className="about__image w-100 rotate-10 overflow-hidden rounded-2rem hover:rotate-0 hover:duration-600">
            <img
              src={aboutImage}
              alt="About Me Image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="about__content max-sm:text-center">
          <div className="about__cards grid grid-cols-3 gap-[1.3rem] max-md:mt-3 max-sm:grid-cols-2 max-sm:gap-[1rem]">
            <article className="flex flex-col">
              <div className="about__card h-full flex-1">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>3+ Years of Experience</small>
              </div>
            </article>
            <article className="flex flex-col">
              <div className="about__card h-full flex-1">
                <HiOutlineUsers className="about__icon flex justify-center" />
                <h5>Worked With</h5>
                <small>20+ Clients Globally</small>
              </div>
            </article>
            <article className="flex flex-col">
              <div className="about__card h-full flex-1">
                <BsFolderCheck className="about__icon" />
                <h5>Projects</h5>
                <small>40+ Finished Projects</small>
              </div>
            </article>
          </div>
          <p className="my-[2rem] ml-0 mr-[2.6rem] text-[#9b969d] max-md:mx-0 max-md:mb-[1.5rem] max-md:mt-[1rem] max-sm:mx-0 max-sm:my-[1.5rem]">
            As a full-stack engineer, I enjoy contributing to open-source
            projects and building scalable web applications. Moreover, my basic
            knowledge of cybersecurity enables me to secure web applications.
            Through contributing to open-source projects, I strive to enhance my
            skills while also giving back to the community.
          </p>
          <a
            href="#contact"
            className="btn btn-primary rounded-2xl"
            onClick={() => {
              setActiveNav("#contact");
            }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
