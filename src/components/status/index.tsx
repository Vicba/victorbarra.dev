import { useState, useEffect } from 'react';

export default function Status() {
  const [time, setTime] = useState('00:00:00 p.m.');
  const [awake, setAwake] = useState(true);

  const updateTime = () => {
    const currentTime = new Date().toLocaleString('en-US', { timeZone: 'Europe/Brussels', hour12: true });
    const formattedTime = `${currentTime.slice(-11, -6)}${currentTime.slice(-3, -1)}.M.`;
    setTime(formattedTime);

    console.log(currentTime, "currentTime")
    console.log(formattedTime, 'formattedTime')
    console.log(new Date().getHours(), "hours now")

    if (new Date().getHours() < 7 || new Date().getHours() >= 23) {
      setAwake(false);
    }
  };

  useEffect(() => {
    const timerId = setTimeout(updateTime, 60 * 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  useEffect(() => {
    updateTime();
  }, []);

  return (
    <p className="w-5/6 text-white/50 text-sm mb-10 text-center">
      The time is <span className="font-bold text-white/70">{time}</span> for me, so I'm probably{' '}
      <span className="font-bold text-white/70">{awake ? 'up and available' : 'sleeping'}</span>. I'll respond as
      soon as possible.
    </p>
  );
}
