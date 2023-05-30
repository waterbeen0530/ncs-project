import Head from "next/head";
import { ReactNode } from "react";

export default function Layouts({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Are you got it?</title>
        <meta
          property="og:description"
          content="박정애선생님 존경합니다."
        ></meta>
      </Head>
      <div>{children}</div>
    </>
  );
}
