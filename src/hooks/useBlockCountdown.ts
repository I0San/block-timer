import { useState, useEffect } from "react";

export interface TimeObject {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Average block time in seconds
 */
const BlockTimes: Record<string, number> = {
  "bitcoin": 600000,
  "ethereum": 15000,
  "goerli": 15000,
  "polygon": 2000,
  "mumbai": 5000,
  "bsc": 3000,
  "bsc-testnet": 3000,
  "cardano": 20000,
  "cardano-testnet": 20000,
  "solana": 8000,
  "dogecoin": 60000,
  "fantom": 1000,
  "harmony": 8000,
  "avalanche": 5000,
  "avalanche-testnet": 5000,
  "arbitrum": 5000,
  "arbitrum-testnet": 5000,
  "optimism": 15000,
  "optimism-testnet": 15000,
  // add more blockchain networks and their average block times as needed
}

/**
 * Usage
 * const { days, hours, minutes, seconds } = useBlockCountdown(100, "bitcoin")
 * 
 * @param blocks 
 * @param network 
 * @returns { days, hours, minutes, seconds }: TimeObject
 */
function useBlockCountdown(blocks: number, network: string): TimeObject {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  function tick(timespan: number) {
    const currentTime = Date.now();
    const timeLeft = Math.max(0, timespan - currentTime);
    setTimeRemaining(timeLeft);
  }

  useEffect(() => {
    const BLOCK_TIME = BlockTimes[network]; // TODO - Find a free api and get current average block time for the chain
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

export default useBlockCountdown;
