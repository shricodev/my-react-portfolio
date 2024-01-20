import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { FaDev } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodingninjas } from "react-icons/si";

const Footer = () => {
  return (
    <footer id="footer">
      <a
        href="#"
        className="footer__logo mb-[2rem] text-[2rem] hover:text-[#ebecf1]"
      >
        SHRICODEV
      </a>

      <ul className="permalinks max-sm:gap-1.5rem mb-[3rem] mt-0 flex flex-wrap justify-center gap-[2rem] max-sm:flex-col">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li>
          <a href="#services">SERVICES</a>
        </li>
        <li>
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        {/* TODO: Uncomment this line when I receive testimonials */}
        {/* <li>
          <a href="#testimonials">TESTIMONIALS</a>
        </li> */}
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>

      <div className="footer__socials mb-[2rem] flex justify-center gap-[1rem] max-sm:mb-[2.2rem]">
        <a href="https://twitter.com/shricodev" target="_blank" rel="noopener">
          <FiTwitter />
        </a>
        <a
          href="https://instagram.com/iampiyush.ach"
          target="_blank"
          rel="noopener"
        >
          <FiInstagram />
        </a>
        <a
          href="https://linkedin.com/in/iamshrijal"
          target="_blank"
          rel="noopener"
        >
          <GrLinkedinOption />
        </a>
        <a href="https://dev.to/shricodev" target="_blank" rel="noopener">
          <FaDev />
        </a>
      </div>

      <h3 className="coding__profiles-tag">CODING PROFILES</h3>
      <div className="code__profiles mb-[2rem] flex justify-center gap-[1rem]">
        <a href="https://leetcode.com/shricodev" target="_blank" rel="noopener">
          <SiLeetcode />
        </a>
        {/* my old username which i couldn't change for GFG */}
        <a
          href="https://auth.geeksforgeeks.org/user/octopie23"
          target="_blank"
          rel="noopener"
        >
          <SiGeeksforgeeks />
        </a>
        <a
          href="https://www.codingninjas.com/codestudio/profile/6d2f4a1b-5461-4e51-92fa-90f00f70f309"
          target="_blank"
          rel="noopener"
        >
          <SiCodingninjas />
        </a>
      </div>

      <div className="footer__copyright mb-[4rem]">
        <small>&copy; SHRICODEV. All rights reserved!</small>
      </div>
    </footer>
  );
};

export default Footer;
