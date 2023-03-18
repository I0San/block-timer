import { useState, useEffect } from "react";

interface Props {
  blocks: number;
}

export interface TimeObject {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function useBlockCountdownTimer({ blocks }: Props) {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  function tick(timespan: number) {
    const currentTime = Date.now();
    const timeLeft = Math.max(0, timespan - currentTime);
    setTimeRemaining(timeLeft);
  }

  useEffect(() => {
    const BLOCK_TIME = 60000; // TODO - Check for chain connected and get block time
    const timespan = blocks * BLOCK_TIME + Date.now();
    tick(timespan);
    const intervalId = setInterval(() => {
      tick(timespan);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [blocks]);

  const formatTime = (time: number): TimeObject => {
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000) % 60;
    const hours = Math.floor(time / 3600000) % 24;
    const days = Math.floor(time / 86400000);
    return { days, hours, minutes, seconds };
  };

  return formatTime(timeRemaining);
}

export default useBlockCountdownTimer;
