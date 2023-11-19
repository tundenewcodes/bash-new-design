import { useExport } from "../../hooks/useExport";
import styled from "styled-components";
import { Colors } from "../../utils/colors/colors";
import { useTheme } from "../../context/ThemeContext";
import { Container } from "react-bootstrap";

export default function Footer() {
  const { footerX, footerFacebook, footerInsta, footerLinkedln } = useExport();
  const { isDarkMode } = useTheme();
  const { darkBgColor, lightGreenColor } = Colors();

  return (
    <Container className="mx-auto">
      <FooterWrapper
        style={{
          backgroundColor: isDarkMode ? darkBgColor : lightGreenColor,
        }}
      >
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
      </FooterWrapper>
    </Container>
  );
}

const P = styled.p`
  color: var(--white-color);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width:400px

  @media (min-width: 600px) {
    font-size: 20px;
    max-width:auto
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
  padding-right:40px
  @media (min-width: 600px) {
    margin-right:0
  }

`;

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  overflow:visible
`;
