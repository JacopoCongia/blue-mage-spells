import "@/styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

import { SpellsDataProvider } from "@/context/spellsData";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width"
        />
      </Head>
      <ThemeProvider>
        <SpellsDataProvider attribute="class">
          <Component {...pageProps} />
        </SpellsDataProvider>
      </ThemeProvider>
    </>
  );
}
