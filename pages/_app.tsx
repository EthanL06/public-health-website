import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The Health Education Project</title>
        <meta name="title" content="The Health Education Project" />
        <meta
          name="description"
          content="Empowering communities and teaching life-saving skills through public health outreach"
        />

        <link rel="icon" href="/logo.webp" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="The Health Education Project" />
        <meta
          property="og:description"
          content="Empowering communities and teaching life-saving skills through public health outreach"
        />
        <meta property="og:image" content="logo.webp" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
