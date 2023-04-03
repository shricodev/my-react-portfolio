import ME from "../../assets/my-image.png";
import HeaderButtons from "./HeaderButtons";
import HeaderSocials from "./HeaderSocials";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const Header = () => {
    return (
        <header className="h-screen overflow-hidden pt-[5rem] max-1024:h-[68vh] max-md:h-screen max-sm:h-screen">
            <div className="header__container container relative h-[100%] text-center">
                <h5>Hello I'm</h5>
                <h1>
                    Shrijal <span className="text-[#54b6f4]">Acharya</span>
                </h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <HeaderButtons />
                <HeaderSocials />
                <div className="me absolute mt-[5rem] h-[38rem] w-[23rem] overflow-hidden rounded-t-full">
                    <img
                        src={ME}
                        alt="Shrijal Acharya"
                        className="relative bottom-[-1rem] left-[-5] h-[94%] w-full"
                    />
                </div>
                <a
                    href="#contact"
                    className="scroll__down absolute bottom-[2rem] right-[-2.3rem] animate-bounce text-5xl max-[700px]:hidden"
                >
                    <BsFillArrowDownCircleFill />
                </a>
            </div>
        </header>
    );
};

export default Header;
