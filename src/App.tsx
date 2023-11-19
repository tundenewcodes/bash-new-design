import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "./context/ThemeContext";
import { Colors } from "./utils/colors/colors";
import { FaSun, FaMoon } from "react-icons/fa";

import Hero from "./components/hero";
import BioLinkCards from "./components/how-we-help";
import Footer from "./components/footer";


function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const { darkBgColor, whiteColor, lightGreenColor } = Colors();

  useEffect(() => {
    AOS.init({
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? darkBgColor : whiteColor,
      }}
    >
      
      
        {isDarkMode ? (
          <FaSun className="toggle-icon" onClick={toggleTheme} />
        ) : (
          <FaMoon className="toggle-icon" onClick={toggleTheme} style={{
            color:lightGreenColor
          }} />
        )}
        <Hero />

        <BioLinkCards />

        <Footer />
      
    </div>
  );
}

export default App;
