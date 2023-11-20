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
    < >
      <Row
        style={{
          backgroundColor: isDarkMode ? darkBgColor : lightGreenColor,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
          padding:"30px 0px"

        }}
      >
        <div style={{
           display: "flex",
           justifyContent: "space-between",
           alignItems: "center",
        }}>
  <P>
          Copyright © {new Date().getFullYear()} Bashirat Are | Designed by
          BACFInc
        </P>
        <FooterImgs>
          <Img src={footerX} alt="light twitter icon" className="icon" />
          <Img src={footerFacebook} alt="light twitter icon" className="icon" />
          <Img src={footerInsta} alt="light twitter icon" className="icon" />
          <Img src={footerLinkedln} alt="light twitter icon" className="icon" />
        </FooterImgs>
        </div>
      
      </Row>
    </>
  );
}

const P = styled.p`
  color: var(--white-color);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width:400px;
  @media (min-width: 600px) {
    font-size: 20px;
    max-width:auto;
  }
`;

const Img = styled.img`
height: 15px;
width: 15px;
@media (min-width: 600px) {
  height: 30px;
  width: 30px;
}
`;

const FooterImgs = styled.div`
  display: flex;
  flex-wrap:wrap;
  gap: 12px;
  padding-right:10px
  

`;
