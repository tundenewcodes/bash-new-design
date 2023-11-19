import React, { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "./context/ThemeContext";
import { Colors } from "./utils/colors/colors";
import { FaSun, FaMoon } from "react-icons/fa";
import { Container } from "react-bootstrap";
import Hero from "./components/hero";
import HowWeHelp from "./components/how-we-help";
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
      <Container>
        {isDarkMode ? (
          <FaSun className="toggle-icon" onClick={toggleTheme} />
        ) : (
          <FaMoon className="toggle-icon" onClick={toggleTheme} style={{
            color:lightGreenColor
          }} />
        )}
        <Hero />

        <HowWeHelp />

        <Footer />
      </Container>
    </div>
  );
}

export default App;
