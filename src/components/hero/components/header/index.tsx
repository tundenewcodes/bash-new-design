import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Left from "./components/Left";
import { useExternalMedia } from "../../../../hooks/useExternalMedia";
import { useTheme } from "../../../../context/ThemeContext";

export default function Header() {
  const { lightModeBash, darkModeBash } = useExternalMedia();

  const { isDarkMode } = useTheme();
  const backgroundStyle = {
    backgroundImage: `url(${isDarkMode ? darkModeBash : lightModeBash})`,
    backgroundSize: "cover",
    backgroundPosition: "left",
    backgroundRepeat: "no-repeat",
    minHeight: "300px",
    minWidth: "300px",
    height: "450px",
    maxHeight: "450px",
  };
  return (
    <Container>
      <Row>
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 12, order: 2 }}
          lg={{ span: 7, order: 1 }}
        >
          <Left />
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 12, order: 1 }}
          lg={{ span: 5, order: 2 }}
          style={{
            ...backgroundStyle,
          }}
        >
          <div></div>
        </Col>
      </Row>
    </Container>
  );
}
