import "./HowWeHelp.css";
import BioCards from "./bio-card";
import HorizontalLine from "./horizontal-line";

export default function HowWeHelp() {
  return (
    <section
      id="how-we-help"
      className="how-we-help"
      style={{
        marginTop: "40px",
      }}
    >
      <HorizontalLine />
      <BioCards />
    </section>
  );
}
