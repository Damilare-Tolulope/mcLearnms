import { useState } from "react";
import Heading from "../../components/Heading"
import { faqs } from "../../data";
import { caretDown, caretRight, rev } from "../../data/images";
import Button from "../../components/Button";


const Faq = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const toggle = (index: number | null) => {
      if (selected === index) {
          return setSelected(null);
      }
      setSelected(index);
  };

  return (
    <div className="md:px-20 px-5 max-w-full mx-auto w-full">
      <Heading 
        preText="FAQ’s"
        headText="Frequently asked questions"
      />

      <div data-aos='fade-up' className={styles.accordion}>
          {faqs.map(({ question, answer }, index) => (
              <div className={styles.accordionItem} key={question}>
                  <div className={`${selected === index && "bg-[#F5F7FC]"} ${styles.accordionContainer}`} onClick={() => toggle(index)}>
                      <span className={styles.accordionIcon}>
                          {selected === index ? <img src={caretDown} alt="collapse" /> : <img src={caretRight} alt="expand" />}
                      </span>
                      <h2 className={styles.accordionTitle}> {question} </h2>
                  </div>
                  <div className={ selected === index ? "accordion-show" : "accordion-close" }>
                      <p className={styles.accordionBody}> {answer} </p>
                  </div>
              </div>
          ))}
      <button className="text-primary cursor-pointer">Learn more &rsaquo;</button>
      </div>

      <div className="relative mt-10">
        <Heading 
          headText="Beat the competition with Seamless Online Learning - Join the League of Leading Institutions Today!"
        />
        <p data-aos='fade-up' className="text-secondary text-base md:text-xl mt-5 mb-14 text-center">Sign up now and experience a new level of education</p>
        <div data-aos='fade-up' className="w-full text-center mx-auto">
          <Button className="relative z-10">Get Started now, it’s free!</Button>
        </div>
        <img src={rev} className="absolute right-0 -bottom-28 z-0 w-4/5 md:w-1/2 lg:w-auto" alt="mcLearnms" />
      </div>
    </div>
  )
}

const styles = {
  accordion: "accordion bg-transparent md:mt-20",
  accordionItem: "accordion-item my-5 md:py-0 py-3 ",
  accordionContainer: "accordion-title md:px-5 accordion-button rounded-full cursor-pointer relative flex gap-4 items-center md:py-4 py-1 text-left border-0 transition outline-none focus:outline-none",
  accordionTitle: "md:text-md text-sm font-bold",
  accordionIcon: "accordion-icon md:text-md text-sm font-bold transition duration-300 linear",
  accordionBody: "accordion-body p-5 mt-5 border rounded-xl border-1 border-[#D4DFF1] transition duration-300 linear",
}

export default Faq