
const Heading = ({ preText, headText }: { preText?: string, headText: string }) => {
  return (
    <div data-aos="slide-up" className="text-center">
        {preText ? <span className="text-primary bg-[#F5F7FC] rounded-full !w-auto px-8 py-3 font-bold">{preText}</span> : <></>}
        <h1 className="text-secondary text-[43px] font-extrabold md:leading-[65px] mt-14">{headText}</h1>
    </div>
  )
}

export default Heading