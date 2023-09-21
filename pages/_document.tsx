import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <Main />
        <NextScript />
      </body>
      <Script strategy="beforeInteractive" src="./moveCircle.js" />
    </Html>
  );
}
