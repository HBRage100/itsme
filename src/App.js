import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Check if the value exists in localStorage; use false if it doesn't.
  const savedChangeMode =
    localStorage.getItem("changeMode") === "true" || false;
  const [changeMode, setMode] = useState(savedChangeMode);

  const handleClick = () => {
    setMode((prevMode) => !prevMode);
  };

  // Use a useEffect to update localStorage whenever changeMode changes
  useEffect(() => {
    localStorage.setItem("changeMode", changeMode);
  }, [changeMode]);
  return (
    <>
      <Navbar mode={changeMode} togleBtn={handleClick} />
      <Home mode={changeMode} />
      <About />
      <Experience mode={changeMode} />
      <Services mode={changeMode} />
      <Portfolio />
      <Contact mode={changeMode} />
      <Footer />
    </>
  );
}

export default App;
