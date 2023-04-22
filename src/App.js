import React,{useState,useEffect} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard';
import Resume from './Components/Resume';


function App() {
  const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    function scrollToTop()
    {
      window.scrollTo({ top: 0, behavior: 'smooth' });

    }
    
  return (
    <div className="container">
      <Dashboard/>
      <Resume/>
      {offset > 150 && <img onClick={scrollToTop} className="scroll-to-top" src={require('./images/arrow.png')} alt="" />}
    </div>
  );
}

export default App;
