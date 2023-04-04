import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";

const HeaderSocials = () => {
    return (
        <div className="header__socials after:content-'' absolute bottom-[2rem] left-0 flex flex-col items-center gap-[0.9rem] text-xl after:h-[3rem] after:w-[3px] after:bg-[#4bb5f5] max-768:hidden">
            <a
                href="https://github.com/OctoPie23"
                target="_blank"
                className="transition duration-400"
            >
                <FiGithub />
            </a>
            <a
                href="https://linkedin.com/in/shrijal007"
                target="_blank"
                className="transition duration-400"
            >
                <BsLinkedin />
            </a>
            <a
                href="https://shricodev.hashnode.dev"
                target="_blank"
                className="transition duration-400"
            >
                <SiHashnode />
            </a>
        </div>
    );
};

export default HeaderSocials;
