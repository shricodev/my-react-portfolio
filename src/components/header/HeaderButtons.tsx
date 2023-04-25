// import Resume from "../../assets/my-resume.pdf";

type NavbarProps = {
    setActiveNav: (value: string) => void;
};

const HeaderButtons = ({ setActiveNav }: NavbarProps) => {
    return (
        <div className="header__buttons mt-[2.5rem] flex justify-center gap-[1.2rem]">
            {/* TODO: place my resume here when it is ready */}
            {/* <a href={Resume} download>
                Download Resume
            </a> */}

            <a
                href="#download"
                className="btn outline-none transition duration-400 ease-in hover:text-white"
            >
                Download Resume
            </a>
            <a
                href="#contact"
                className="btn btn-primary transition duration-500 ease-in"
                onClick={() => {
                    setActiveNav("#contact");
                }}
            >
                Let's Connect
            </a>
        </div>
    );
};

export default HeaderButtons;
