
const Heading = ({ preText, headText }: { preText: string, headText: string }) => {
  return (
    <div className="text-center">
        <span className="text-primary bg-[#F5F7FC] rounded-full !w-auto px-6 py-3">{preText}</span>
        <h1 className="text-secondary text-5xl font-extrabold md:leading-[60px] mt-14">{headText}</h1>
    </div>
  )
}

export default Heading