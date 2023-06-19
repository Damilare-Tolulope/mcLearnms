import { services } from "../../data"
import Heading from "../../components/Heading"
import Button from "../../components/Button"

const Services = () => {
  return (
    <div data-aos="fade-up" className="md:px-20 px-5 max-w-full mx-auto w-full py-20">
      <Heading 
        preText="Who & who benefits from Mclearnms?"
        headText="Transform your institution, by delivering high quality education"
      />

      <div className="mt-20">
        {
          services.map(({title, desc, duties, img}, index) => (
            <div key={title} data-aos="slide-up" className={`mt-5 md:mt-10 md:flex flex-col ${index === 1 ? "md:flex-row-reverse" : "md:flex-row" } justify-between items-center gap-5 md:gap-10`}>
              <div className="text-secondary text-lg flex-1">
                <h2 className="font-bold text-xl md:text-2xl mb-5">{title}</h2>
                <p className="mb-5 text-base md:text-lg">{desc}</p>
                <div className="hidden md:block text-sm md:text-base">
                  {duties.map(duty => <p key={duty} className="text-dark p-2 px-4 drop-shadow-lg rounded-lg mb-3 border border-t-0">{duty}</p>)}
                  <button className="mt-5 text-primary cursor-pointer">Learn more &rsaquo;</button>
                </div>
              </div>
              <div className="flex-1">
                <img className="w-full lg:w-3/5 mx-auto" src={img} alt={title} />
                <div className="md:hidden block text-sm md:text-base">
                  {duties.map(duty => <p key={duty} className="text-dark p-2 px-4 drop-shadow-lg rounded-lg mb-3 border border-t-0">{duty}</p>)}
                  <button className="mt-3 mb-10 text-primary cursor-pointer">Learn more &rsaquo;</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div data-aos="slide-up" className="w-full text-center mx-auto">
        <Button>Get Started now, it’s free!</Button>
      </div>
    </div>
  )
}

export default Services