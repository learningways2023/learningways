import { Poppins } from "@next/font/google";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/globals.css";

const inter = Poppins({ weight: "600", subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <ParallaxProvider scrollAxis="horizontal">
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}
