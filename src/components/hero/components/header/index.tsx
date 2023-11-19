import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Left from "./components/Left";
import { useExternalMedia } from "../../../../hooks/useExternalMedia";
import { useTheme } from "../../../../context/ThemeContext";
import styled from "styled-components";

export default function Header() {
  const { lightModeBash, darkModeBash } = useExternalMedia();

  const { isDarkMode } = useTheme();
  const backgroundStyle = {
    backgroundImage: `url(${isDarkMode ? darkModeBash : lightModeBash})`,
    backgroundSize: "cover",
    backgroundPosition: "left left",
    backgroundRepeat: "no-repeat",
    // minHeight: "300px",
    // minWidth: "300px",
    height: "auto",
    // maxHeight: "450px",
    border: "2px solid red",
  };
  return (
    <Container className="mx-auto">
      <Row>
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: 12, order: 2 }}
          lg={{ span: 6, order: 1 }}
        >
          <Left />
        </Col>
        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: 12, order: 1 }}
          lg={{ span: 6, order: 2 }}
        >
          <ImgDiv>
            <Img src={isDarkMode ? darkModeBash : lightModeBash} alt="" />
          </ImgDiv>
        </Col>
      </Row>
    </Container>
  );
}

const Img = styled.img`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-width: 588px;
  object-fit: cover;
  overflow-x: hidden;
  height: 100%;
`;

const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
`;
