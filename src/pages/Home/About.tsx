import Heading from "../../components/Heading"
import { features } from "../../data"
import { aboutImg } from "../../data/images"

const About = () => {
  return (
    <div className="md:px-20 px-5 py-5 md:py-20 max-w-full mx-auto w-full">
      <Heading
        preText="Why Mclearnms?"
        headText="Equipping Lecturers and Students with Cutting-Edge Tools to Create, Collaborate, and Connect Like Never Before"
      />

      <div className="my-20 md:grid grid-cols-2 justify-between items-center gap-20">
        <div>
          {
            features.map(({ img, title, desc}) => (
              <div data-aos="slide-up" key={title} className="text-dark flex items-start gap-5 md:gap-10 p-5 rounded-lg border border-t-0 mb-5 drop-shadow-lg">
                <img className="w-10 md:w-auto" src={img} alt={title} />
                <div>
                  <h3 className="font-bold md:mb-5 mb-3 text-base md:text-lg">{title}</h3>
                  <p className="text-sm md:text-base">{desc}</p>
                </div>
              </div>
            ))
          }
        </div>

        <img data-aos="slide-left" className="hidden md:block w-3/4" src={aboutImg} alt="mclearnms" />
      </div>
    </div>
  )
}

export default About