import Header from "@/components/common/header";
import Layouts from "@/components/layouts";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Header />
      <Component {...pageProps} />
    </Layouts>
  );
}
