import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css';

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

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

export const BitTorrentChainDonau = {
  id: 1029,
  name: 'BitTorrent Chain Donau',
  network: 'BitTorrent',
  nativeCurrency: {
    decimals: 18,
    name: 'BitTorrent',
    symbol: 'BTT',
  },
  rpcUrls: {
    default: { http: ['https://pre-rpc.bt.io/'] },
  },
  blockExplorers: {
    default: { name: 'BttcScan', url: 'https://testnet.bttcscan.com' },
  }
}


const { chains, provider } = configureChains(
  [
    BitTorrentChainDonau],
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
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>

  )
}

export default MyApp
