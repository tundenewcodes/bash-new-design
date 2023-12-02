import { useExport } from "../../hooks/useExport";
import styled from "styled-components";
import { Colors } from "../../utils/colors/colors";
import { useTheme } from "../../context/ThemeContext";
import { Container, Row } from "react-bootstrap";

export default function Footer() {
  const { footerX, footerFacebook, footerInsta, footerLinkedln } = useExport();
  const { isDarkMode } = useTheme();
  const { darkBgColor, lightGreenColor } = Colors();

  return (
  <Row>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "40px",
            padding: "20px 10px",
       
            backgroundColor: isDarkMode ? darkBgColor : lightGreenColor,
          }}
        >
          <P>
            Copyright © {new Date().getFullYear()} Bashirat Are | Designed by
            BACFInc
          </P>
          <FooterImgs>
            <Img src={footerX} alt="light twitter icon" className="icon" />
            <Img
              src={footerFacebook}
              alt="light twitter icon"
              className="icon"
            />
            <Img src={footerInsta} alt="light twitter icon" className="icon" />
            <Img
              src={footerLinkedln}
              alt="light twitter icon"
              className="icon"
            />
          </FooterImgs>
        </div>
  </Row>
    

    
  );
}

const P = styled.p`
  color: var(--white-color);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 600px) {
    font-size: 20px;
  }
`;

const Img = styled.img`
  height: 30px;
  width: 30px;
`;

const FooterImgs = styled.div`
  display: flex;
  gap: 12px;
  margin-right: 25px;

  @media (min-width: 600px) {
    margin-right: 0px;
  }
`;
