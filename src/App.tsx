import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";
import {
  About,
  // Testimonials,
  Contact,
  Experience,
  Footer,
  Header,
  HeaderBanner,
  Navbar,
  Portfolio,
  Services,
} from "./index";

interface AppContextValue {
  activeNav: string;
  setActiveNav: React.Dispatch<React.SetStateAction<string>>;
}

// using createContext to prevent from passing {activeNav, setActiveNav} to each child component.
export const AppContext = createContext<AppContextValue | null>(null);

function App() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <AppContext.Provider value={{ activeNav, setActiveNav }}>
      <div className="overflow-hidden bg-site bg-cover bg-no-repeat">
        <Header />
        <HeaderBanner />
        <Navbar />
        <About />
        <Experience />
        <Services />
        <Portfolio />

        {/* TODO: uncomment the following testimonials after receiving some. */}
        {/* <Testimonials /> */}
        <Contact />
        <Footer />

        {/* Toast provider for react-hot-toast */}
        <Toaster />
      </div>
    </AppContext.Provider>
  );
}

export default App;
