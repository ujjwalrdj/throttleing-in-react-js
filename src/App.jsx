import './App.css';
import { useState, useEffect } from 'react';
import useThrottle from './hooks/useThrottle';
function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  const throttledHanldeResize = useThrottle(handleResize, 500);

  useEffect(() => {
    window.addEventListener('resize', throttledHanldeResize);
    return () => {
      window.removeEventListener('resize', throttledHanldeResize);
    };
  }, []);

  return (
    <>
      window size : {windowSize.width} x {windowSize.height}
    </>
  );
}

export default App;
