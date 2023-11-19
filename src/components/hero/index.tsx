import styled from "styled-components";
import Header from "./components/header";
import "./Hero.css";

export default function Hero() {
  return (
    <Section id="hero" className="hero  ">
      <Header />
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;
