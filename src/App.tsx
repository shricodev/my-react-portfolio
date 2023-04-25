import { useState } from "react";
import {
    About,
    Experience,
    Header,
    Navbar,
    Portfolio,
    Testimonials,
    Services,
    Contact,
    Footer,
} from "./index";

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
