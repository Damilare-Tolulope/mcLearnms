import Heading from "../../components/Heading"
import { features } from "../../data"
import { aboutImg } from "../../data/images"

const About = () => {
  return (
    <div className="md:px-20 px-10 py-10 md:py-20 max-w-full mx-auto w-full">
      <Heading
        preText="Why Mclearnms?"
        headText="Equipping Lecturers and Students with Cutting-Edge Tools to Create, Collaborate, and Connect Like Never Before"
      />

      <div className="my-20 md:grid grid-cols-2 justify-between items-center gap-20">
        <div>
          {
            features.map(({ img, title, desc}) => (
              <div data-aos="slide-up" key={title} className="text-dark flex items-start gap-10 p-5 rounded-lg border border-t-0 mb-5 drop-shadow-lg">
                <img src={img} alt={title} />
                <div>
                  <h3 className="font-bold mb-5">{title}</h3>
                  <p>{desc}</p>
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