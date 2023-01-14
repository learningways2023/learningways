import { Poppins } from "@next/font/google";

import "../styles/globals.css";

const inter = Poppins({weight: '600', subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className="tracking-wide ">
      <Component {...pageProps} />
    </main>
  );
}
