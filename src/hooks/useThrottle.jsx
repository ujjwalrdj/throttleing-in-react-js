import { useEffect, useRef, useState } from 'react';

const useThrottle = (value, delay) => {
  const [throttleValue, setTrottleValue] = useState();

  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      const now = Date.now();
      const timeElasped = now - lastExecuted.current;

      if (timeElasped >= delay) {
        setTrottleValue(value);
        lastExecuted.current = now;
      }
    }, delay - (Date.now() - lastExecuted.current));

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);
  return throttleValue;
};
export default useThrottle;
