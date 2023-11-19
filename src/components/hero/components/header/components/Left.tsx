import React from "react";
import Title from "../../../../../utils/title/Title";
import { Colors } from "../../../../../utils/colors/colors";
import { HeaderType } from "../../../../../types/title";
import { useTheme } from "../../../../../context/ThemeContext";
import styled from "styled-components";
import Icons from "./Icons";

export default function Left() {
  const {
    whiteColor,

    darkOrangeColor,
    lightGreenColor,
    darkGrayColor,
    lightBlackColor,
  } = Colors();

  const { isDarkMode } = useTheme();

  return (
    <>
      <>
        <Title
          textColor={whiteColor}
          text={"HI, I AM "}
          style={{
            color: isDarkMode ? darkOrangeColor : lightGreenColor,
          }}
          type={HeaderType.h1}
        />
        <Title
          textColor={whiteColor}
          text={"BASHIRAT ARE"}
          style={{
            color: isDarkMode ? darkOrangeColor : lightGreenColor,
          }}
          type={HeaderType.h1}
        />
      </>

      <P
       data-aos="fade-up"
       data-aos-once="true"
        style={{
          color: isDarkMode ? darkGrayColor : lightBlackColor,
        }}
      >
        A dedicated HR Technologist known for my expertise in HR Tech Solutions
        architecture. My commitment to transforming HR practices and business
        process through digitization. I invite you to explore my work through
        these key links
      </P>

      <Icons />
    </>
  );
}

const P = styled.p`
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%;
  margin: 2.4rem auto;

`;
