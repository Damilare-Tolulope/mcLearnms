import Aos from 'aos'
import { useEffect } from 'react';

const App = () => {

  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
    Aos.refresh()
  }, [])

  return (
    <>
      <p className="text-primary">McLearnms</p>
    </>
  )
}

export default App
