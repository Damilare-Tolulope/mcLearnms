import Aos from 'aos'
import { useEffect } from 'react';
import RouteComponent from './routes/route';

const App = () => {

  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
    Aos.refresh()
  }, [])

  return <RouteComponent />
  
}

export default App
