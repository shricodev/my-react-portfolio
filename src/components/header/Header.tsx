import ME from "../../assets/my-image.webp";
import { HeaderButtons, HeaderSocials } from "../../index";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

type NavbarProps = {
    setActiveNav: (value: string) => void;
};

const Header = ({ setActiveNav }: NavbarProps) => {
    return (
        <header className="layer-big max-sm:layer-sm h-screen overflow-hidden pt-[5rem] max-md:h-[72vh] max-sm:h-[100vh] max-sm:pt-[2rem]">
            <div className="header__container container h-[100%] text-center">
                <h5>Hello I'm</h5>
                <h1>
                    Shrijal <span className="text-[#54b6f4]">Acharya</span>
                </h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <HeaderButtons setActiveNav={setActiveNav} />
                {/* 
                    TODO: HeaderSocials and BsFillArrowDownCircleFill icons go far away in the viewport when zooming out. Fix this!!
                 */}
                <HeaderSocials />
                <div className="me absolute mt-[4rem] h-[40rem] w-[23rem] overflow-hidden rounded-t-full max-sm:h-[36rem]">
                    <img
                        src={ME}
                        alt="Shrijal Acharya"
                        className="my__image relative bottom-[2.5rem] left-[-4] h-[98%] w-full max-md:bottom-[2rem] max-md:h-[95%] "
                    />
                </div>
                <a
                    href="#contact"
                    className="scroll__down max-768:hidden"
                    onClick={() => {
                        setActiveNav("#contact");
                    }}
                >
                    Scroll Down
                </a>
                <a
                    href="#contact"
                    className="absolute bottom-[2rem] right-[-2.3rem] animate-bounce text-5xl max-768:hidden"
                >
                    <BsFillArrowDownCircleFill
                        className="relative right-[1.95rem] top-[0.6rem] text-[2.5rem]"
                        onClick={() => {
                            setActiveNav("#contact");
                        }}
                    />
                </a>
            </div>
        </header>
    );
};

export default Header;
