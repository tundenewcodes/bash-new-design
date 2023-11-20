import { Container, Row, Col } from "react-bootstrap";

import Left from "./components/Left";
import { useExternalMedia } from "../../../../hooks/useExternalMedia";
import { useTheme } from "../../../../context/ThemeContext";
import styled from "styled-components";

export default function Header() {
  const { lightModeBash, darkModeBash } = useExternalMedia();

  const { isDarkMode } = useTheme();

  return (
    
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "30px 0px",
        }}
      >
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
