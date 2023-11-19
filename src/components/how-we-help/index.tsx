import { Container } from "react-bootstrap";
import BioCards from "./bio-card";
import HorizontalLine from "./horizontal-line";

export default function BioLinkCards() {
  return (
    <Container  className="mx-auto"
      style={{
        marginTop: "60px",
      }}
    >
      
      <HorizontalLine />
      <BioCards />
    </Container>
  );
}
