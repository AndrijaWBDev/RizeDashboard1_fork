import Header from "../Component/rizeheader";

import Footer from "../Component/footer";
import WalletComponent from "../Component/walletComponent";
export default function Wallet() {
  return (
    <section className="rize-main select-wallet-bg" >
      {/*  ||--------------------------------------------------------------------------------|| */}
      {/*  || RIZE HEADER || */}
      {/*  ||--------------------------------------------------------------------------------|| */}
      <Header validator={false}/>

      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                    SERVICES                                    || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <WalletComponent />

      {/* ||--------------------------------------------------------------------------------|| */}
      {/* ||                                     FOOTER                                     || */}
      {/* ||--------------------------------------------------------------------------------|| */}
      <Footer />
    </section>
  );
}
