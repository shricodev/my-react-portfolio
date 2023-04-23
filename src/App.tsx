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
    return (
        <>
            <Header />
            <Navbar />
            <About />
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
