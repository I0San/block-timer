# block-timer

A multichain counter. A React component library.

V1 - Counts down to a future time defined in number of blocks on a specific Blockchain network.

## Install

```bash
npm install @i0san/block-timer
```

## Usage

```js
import { useBlockCountdown } from "@i0san/block-timer";

function MyApp() {
  // Set target date 100 blocks ahead from now (Bitcoin network)
  const { days, hours, minutes, seconds } = useBlockCountdown(100, "bitcoin");
  return (
    <>
      {days}days {hours}hours {minutes}minutes {seconds}seconds
    </>
  );
}
```

## Supported networks

```js
"bitcoin"
"ethereum"
"goerli"
"polygon"
"mumbai"
"bsc"
"bsc-testnet"
"cardano"
"cardano-testnet"
"solana"
"dogecoin"
"fantom"
"harmony"
"avalanche"
"avalanche-testnet"
"arbitrum"
"arbitrum-testnet"
"optimism"
"optimism-testnet"
// add more blockchain networks and their average block times as needed
```

## Reference
[The complete guide to publish React hook as NPM package](https://igorluczko.medium.com/the-complete-guide-to-publish-react-hook-as-npm-package-880049829e89)