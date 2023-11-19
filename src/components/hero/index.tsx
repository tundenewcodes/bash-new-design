
import Header from './components/header'
import './Hero.css';




export default function Hero() {
  return (
    <section
      id="hero"
      className="hero  "
      style={{
         display:"flex", justifyContent:"center", alignItems:"center", paddingTop:"40px"
      }}
    >

      <Header />
    </section>
  )
}
