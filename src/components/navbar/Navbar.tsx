import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { RiBook2Line } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <nav className="align-center container fixed bottom-5 left-0 right-0 flex w-max gap-[3px] rounded-full bg-black bg-opacity-[0.4] p-3 px-[1.7] py-[0.2] backdrop-blur-lg">
            <a
                href="#"
                onClick={() => {
                    setActiveNav("#");
                }}
                className={activeNav === "#" ? "active" : ""}
            >
                <HiOutlineHome />
            </a>
            <a
                href="#about"
                onClick={() => {
                    setActiveNav("#about");
                }}
                className={activeNav === "#about" ? "active" : ""}
            >
                <AiOutlineUser />
            </a>
            <a
                href="#experience"
                onClick={() => {
                    setActiveNav("#experience");
                }}
                className={activeNav === "#experience" ? "active" : ""}
            >
                <RiBook2Line />
            </a>
            <a
                href="#services"
                onClick={() => {
                    setActiveNav("#services");
                }}
                className={activeNav === "#services" ? "active" : ""}
            >
                <RiServiceLine />
            </a>
            <a
                href="#portfolio"
                onClick={() => {
                    setActiveNav("#portfolio");
                }}
                className={activeNav === "#portfolio" ? "active" : ""}
            >
                <BsPersonWorkspace />
            </a>
            <a
                href="#contact"
                onClick={() => {
                    setActiveNav("#contact");
                }}
                className={activeNav === "#contact" ? "active" : ""}
            >
                <AiOutlineMessage />
            </a>
        </nav>
    );
};

export default Navbar;
