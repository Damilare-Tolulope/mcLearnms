import { heroImg, play } from "../../data/images"
import Button from "../../components/Button"

const Hero = () => {
  return (
    <div className="md:px-20 px-5 max-w-full mx-auto w-full">
      <div className="lg:grid grid-cols-2 items-center pt-10 pb-20">
        <div data-aos="slide-right" className="">
          <h1 className="text-dark text-2xl md:text-[32px] lg:text-[43px] lg:leading-[65px] md:leading-[45px] font-extrabold">Unlock a new learning experience</h1>
          <p className="text-dark mb-10 mt-5">The future of education is here, re-event traditional learning and gain access to seamless learning and management experience. The best eLearning solutions for intuitions of all sizes. Everything you need in-one-place.</p>
          <div className="mb-10 flex md:justify-start justify-center items-center gap-5">
            <Button>Get Started</Button>
            <Button className="flex items-center" isSecondary><img className="mr-2" src={play} alt="play-btn" /> See in action</Button>
          </div>

          <div className="hidden md:flex gap-3 md:gap-10 mt-16">
            <div className="text-neutral/80">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">50+</h2>
              <p className="text-sm md:text-base">Active Schools</p>
            </div>
            <div className="text-neutral/80">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">500+</h2>
              <p className="text-sm md:text-base">Satisfied Lecturers</p>
            </div>
            <div className="text-neutral/80">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">1000+</h2>
              <p className="text-sm md:text-base">Happy Students</p>
            </div>
          </div>
        </div>

        <div data-aos="slide-left" className="md:w-2/4 md:mt-10 lg:mt-0 lg:w-4/5 text-center mx-auto">
          <img src={heroImg} alt="mclearnms" />
          <div className="text-left flex gap-3 md:gap-10 mt-16 md:hidden">
            <div className="text-neutral/80">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">50+</h2>
              <p className="text-sm md:text-base">Active Schools</p>
            </div>
            <div className="text-neutral/80">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">500+</h2>
              <p className="text-sm md:text-base">Satisfied Lecturers</p>
            </div>
            <div className="text-neutral/80">
              <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">1000+</h2>
              <p className="text-sm md:text-base">Happy Students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero