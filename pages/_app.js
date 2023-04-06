/* pages/_app.js */
import "../styles/globals.css";
import "../styles/App.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className="nav">
      <nav className="border-b p-6">
        <p className="headline"> Block Marketplace </p>{" "}
        <ul>
          <li>
            <a href="/"> Home </a>{" "}
          </li>{" "}
          <li>
            <a href="/create-nft"> Sell NFT </a>{" "}
          </li>{" "}
          <li>
            <a href="/my-nfts"> My NFTs </a>{" "}
          </li>{" "}
          <li>
            <a href="/dashboard"> Dashboard </a>{" "}
          </li>{" "}
        </ul>{" "}
      </nav>{" "}
      <Component {...pageProps} />{" "}
    </div>
  );
}

export default MyApp;
