
import "./footer.css";


import { useExport } from "../../hooks/useExport";
import styled from "styled-components";
import { Colors } from "../../utils/colors/colors";
import { useTheme } from "../../context/ThemeContext";

export default function Footer() {
  const { footerX, footerFacebook, footerInsta, footerLinkedln } = useExport();
  const { isDarkMode } = useTheme();
  const { darkBgColor, lightGreenColor } = Colors();

  return (
    <>
      <footer>
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "40px",
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
        </section>
      </footer>
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
  min-width: 200px;
`;
