import { useState } from "react";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/myservices/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <>
            <Header setActiveNav={setActiveNav} />
            <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />
            <About setActiveNav={setActiveNav} />
            <Experience />
            <Services />
            <Portfolio />
            {/* 
             TODO: uncomment the following testimonials after receiving some. 
            */}
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </>
    );
}

export default App;
