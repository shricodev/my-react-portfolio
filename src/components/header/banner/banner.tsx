// import Resume from "../../assets/my-resume.pdf";
import { motion } from "framer-motion";
import { useContext } from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { AppContext } from "../../../App";
import { fadeIn } from "../../../variants";
import myImage from "../../../assets/my-logo.webp";

const HeaderBanner = () => {
  const context = useContext(AppContext);

  const { setActiveNav } = context as {
    setActiveNav: React.Dispatch<React.SetStateAction<string>>;
  };

  return (
    <div id="home" className="flex min-h-[85vh] items-center lg:min-h-[78vh]">
      <div className="container">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-10">
          {/* this div handles displaying header image in md screen size */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="mx-auto mb-[1.8rem] w-[330px] flex-1 max-sm:hidden lg:hidden"
          >
            {/* the image for the header banner section */}
            <img src={myImage} alt="Shrijal Acharya" />
          </motion.div>
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[1] lg:text-[100px]"
            >
              Shrijal <span>Acharya</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] font-semibold uppercase leading-[1] lg:text-[60px]"
            >
              <span className="mr-4 text-white">I am a</span>
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "Cloud Developer",
                  2000,
                  "DevOps Engineer",
                  2000,
                ]}
                speed={40}
                className="text-[#B809C3]"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto mb-8 max-w-lg lg:mx-0"
            >
              I contribute to open-source projects, build secure & scalable web
              apps, and aim to enhance my skills while giving back to the
              community as a full-stack engineer.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto mb-10 flex max-w-max items-center gap-x-6 lg:mx-0"
            >
              <a
                href="#portfolio"
                onClick={() => {
                  setActiveNav("#portfolio");
                }}
              >
                <button className="btn-header h-[50px] rounded-full px-6 font-secondary text-sm font-medium text-white">
                  My Portfolio
                </button>
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto flex max-w-max gap-x-6 text-[20px] lg:mx-0"
            >
              <a
                href="https://github.com/shricodev"
                target="_blank"
                rel="noopener"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/iamshrijal"
                target="_blank"
                rel="noopener"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://twitter.com/shricodev"
                target="_blank"
                rel="noopener"
              >
                <FaTwitter />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden w-[550px] max-w-[320px] flex-1 lg:flex lg:max-w-[485px]"
          >
            {/* the image for the header banner section */}
            <img src={myImage} alt="Shrijal Acharya" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
