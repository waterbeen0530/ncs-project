import Head from "next/head";
import { ReactNode } from "react";

export default function Layouts({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>chaneat</title>
        <meta
          property="og:description"
          content="좌찬익선생님 존경합니다."
        ></meta>
      </Head>
      <div>{children}</div>
    </>
  );
}
