import About from "./About"
import Faq from "./Faq"
import Hero from "./Hero"
import Services from "./Services"
import Testimonials from "./Testimonials"
import withScrollToTop from "../../components/WithScrollToTop"


const Index = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Faq />
    </div>
  )
}

export default withScrollToTop(Index)