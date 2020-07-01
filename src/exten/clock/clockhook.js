import { useState, useEffect } from 'react';
import moment from 'moment-timezone';

const useClockTicker = (timezone) => {
  const [date, setDate] = useState(moment().tz(timezone.value));

  useEffect(() => {
    const tickClock = () => {
      // console.log(moment().tz(timezone.value));
      setDate(moment().tz(timezone.value));
    };
    setInterval(() => tickClock(), 1000);
    // let clockTickerId = setInterval(() => tickClock(), 1000);
    // return () => clearInterval(clockTickerId);
  }, [timezone]);

  return date;
};

export default useClockTicker;
