
const Heading = ({ preText, headText }: { preText?: string, headText: string }) => {
  return (
    <div data-aos="slide-up" className="text-center">
        {preText ? <span className="text-primary bg-[#F5F7FC] rounded-full w-full text-sm md:text-base md:w-auto md:px-8 md:py-3 px-4 py-2 font-bold">{preText}</span> : <></>}
        <h1 className="text-secondary text-2xl md:text-[32px] lg:text-[43px] font-extrabold lg:leading-[65px] md:leading-[45px] mt-6 md:mt-14">{headText}</h1>
    </div>
  )
}

export default Heading