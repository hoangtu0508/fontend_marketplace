import '@/styles/globals.css'

//INTERNAL IMPORT
import { Footer, NavBar } from '@/components/componentsindex';
import { NFTMarketplaceProvider } from '@/Context/NFTMarketplaceContext';

const App = ({ Component, pageProps }) => (
    <div>
        <NFTMarketplaceProvider>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </NFTMarketplaceProvider>
        
    </div>
);

export default App;