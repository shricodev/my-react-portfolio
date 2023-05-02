import { useState } from "react";
import {
    Navbar,
    Header,
    HeaderBanner,
    About,
    Experience,
    Portfolio,
    Services,
    Testimonials,
    Contact,
    Footer,
} from "./index";

function App() {
    const [activeNav, setActiveNav] = useState("#");
    return (
        <div className="overflow-hidden bg-site bg-cover bg-no-repeat">
            <Header setActiveNav={setActiveNav} />
            <HeaderBanner setActiveNav={setActiveNav} />
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
        </div>
    );
}

export default App;
