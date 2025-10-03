import Combo from "./components/Combo"
import EndSection from "./components/EndSection"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Section from "./components/SecondFooter"
import Supermarket from "./components/Supermarket"

function App() {

  return (
    <>
    <div className="container-fluid">
      <Navbar/>
      <Hero/>
      <Supermarket/>
      <Combo/>
      <EndSection/>
      <Section/>
      <Footer/>
    </div>
    </>
  )
}

export default App
