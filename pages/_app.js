import { Roboto } from "@next/font/google";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/globals.css";
import Head from "next/head";
const inter = Roboto({ weight: "400", subsets: ["latin"] });

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
