import { useState, useEffect } from "react";

interface Props {
  blocks: number;
  network: string
}

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
  "Bitcoin": 600000,
  "Ethereum": 15000,
  "Binance Smart Chain": 3000,
  "Cardano": 20000,
  "Solana": 8000,
  "Polygon": 2000,
  "Dogecoin": 60000,
  "Bitcoin Testnet": 600000,
  "Binance Smart Chain Testnet": 3000,
  "Cardano Testnet": 20000,
  "Polygon Mumbai": 5000,
  "Fantom": 1000,
  "Harmony": 8000,
  "Avalanche": 5000,
  "Avalanche Testnet": 5000,
  "Arbitrum": 5000,
  "Arbitrum Testnet": 5000,
  "Optimism": 15000,
  "Optimism Testnet": 15000,
  "Goerli": 15000,
  // add more blockchain networks and their average block times as needed
}

function useBlockCountdownTimer({ blocks, network }: Props) {
  const [timeRemaining, setTimeRemaining] = useState<number>(0);

  function tick(timespan: number) {
    const currentTime = Date.now();
    const timeLeft = Math.max(0, timespan - currentTime);
    setTimeRemaining(timeLeft);
  }

  useEffect(() => {
    const BLOCK_TIME = BlockTimes[network]; // TODO - Check for chain connected and get current average block time
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
