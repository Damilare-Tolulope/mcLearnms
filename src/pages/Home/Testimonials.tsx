import Heading from "../../components/Heading"
import Carousel from "../../components/Carousel"
import { testimonials } from "../../data"
import { SwiperSlide } from 'swiper/react';
import { quote } from "../../data/images";


const Testimonials = () => {
  return (
    <div className="bg-white py-20">
      <div className="md:px-20 px-5 max-w-full mx-auto w-full">
        <Heading 
          preText="Testimonials"
          headText="See how we are making a difference"
        />

        <div className="md:mt-10 relative md:p-10">
          <img className='ml-40 mb-5' src={quote} alt="quote" />
          <Carousel>
          {
            testimonials.map(({ testimony, user, role }, index) => <SwiperSlide key={index} className="py-10 pb-20">
              <div className='text-center text-sm md:text-base p-5 bg-white md:h-60 h-80 drop-shadow-xl w-4/5 mx-auto border border-3'>
                <p className="">{testimony}</p>
                <h4 className="text-neutral mt-5 mb-2">{user}</h4>
                <p className="text-dark font-bold">{role}</p>
              </div>
            </SwiperSlide>)
          }
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonials