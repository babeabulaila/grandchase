import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
  chain,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { infuraProvider } from "wagmi/providers/infura";
// import { useState, useEffect } from "react";

const infuraId = process.env.INFURA_ENDPOINT;

const { chains, provider } = configureChains(
  [chain.mainnet, chain.rinkeby, chain.goerli],
  [infuraProvider({ infuraId })]
);

const connectors = [
  new InjectedConnector({
    chains,
    options: { shimDisconnect: true },
  }),
  new WalletConnectConnector({
    options: {
      infuraId,
      qrcode: true,
    },
  }),
];

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
});


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
      <Analytics />
    </WagmiConfig>
  );
}

export default MyApp;