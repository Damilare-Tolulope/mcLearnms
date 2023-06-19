import { services } from "../../data"
import Heading from "../../components/Heading"
import Button from "../../components/Button"

const Services = () => {
  return (
    <div data-aos="fade-up" className="md:px-20 px-10 max-w-full mx-auto w-full py-20">
      <Heading 
        preText="Who & who benefits from Mclearnms?"
        headText="Transform your institution, by delivering high quality education"
      />

      <div className="mt-20">
        {
          services.map(({title, desc, duties, img}, index) => (
            <div data-aos="slide-up" className={`my-10 md:flex flex-col ${index === 1 ? "md:flex-row-reverse" : "md:flex-row" } justify-between items-center gap-5 md:gap-10`}>
              <div className="text-secondary text-md flex-1">
                <h2 className="font-bold text-2xl mb-5">{title}</h2>
                <p className="mb-5">{desc}</p>
                <div className="text-base">
                  {duties.map(duty => <p key={duty} className="text-dark p-2 px-4 drop-shadow-lg rounded-lg mb-3 border border-t-0">{duty}</p>)}
                  <button className="mt-5 text-primary cursor-pointer">Learn more &rsaquo;</button>
                </div>
              </div>
              <div className="flex-1">
                <img className="w-3/5 mx-auto" src={img} alt={title} />
              </div>
            </div>
          ))
        }
      </div>

      <div className="w-full text-center mx-auto">
        <Button>Get Started now, it’s free!</Button>
      </div>
    </div>
  )
}

export default Services