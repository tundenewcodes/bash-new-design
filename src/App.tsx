import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "./context/ThemeContext";
import { Colors } from "./utils/colors/colors";
import { FaSun, FaMoon } from "react-icons/fa";

import Hero from "./components/hero";
import BioLinkCards from "./components/how-we-help";
import Footer from "./components/footer";
import Header from "./components/hero/components/header";
import { Container } from "react-bootstrap";

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
    
    <Container
      style={{
        backgroundColor: isDarkMode ? darkBgColor : whiteColor,
      }}
    >
      {isDarkMode ? (
        <FaSun className="toggle-icon" onClick={toggleTheme} />
      ) : (
        <FaMoon
          className="toggle-icon"
          onClick={toggleTheme}
          style={{
            color: lightGreenColor,
          }}
        />
      )}
      <Header />

      <BioLinkCards />

      <Footer />
    </Container>
  );
}

export default App;
