import { Halant, Lato } from "@next/font/google";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/globals.css";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

// Kommunicate.init(process.env.NEXT_PUBLIC_KOMMUNICATE_ID);

import Head from "next/head";
const inter = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Learning Ways</title>
        <meta name="description" content="learning ways" />
        <link rel="icon" href="/tablogo.png" />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
