import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { UploaderProvider } from '@w3ui/react-uploader'

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [
    chain.goerli,],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'PhotoSafe',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});


function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider showRecentTransactions={true} chains={chains} initialChain={chain.goerli}>
        <UploaderProvider>
          <Component {...pageProps} />
        </UploaderProvider>
      </RainbowKitProvider>
    </WagmiConfig>

  )
}

export default MyApp