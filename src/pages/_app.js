import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

import { SpellsDataProvider } from "@/context/spellsData";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <SpellsDataProvider attribute="class">
        <Component {...pageProps} />
      </SpellsDataProvider>
    </ThemeProvider>
  );
}
