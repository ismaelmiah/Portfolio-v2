import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          property="og:description"
          content="Ismael Miah is a software engineer who builds accessible,
  inclusive products and digital experiences for the web."
        />
        <meta property="og:image" content="/images/Thumbnail.jpeg" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Summary Image" />
        <meta property="og:title" content="Ismael Miah" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IE" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Ismael's Portfolio" />
        <meta name="twitter:image:alt" content="Backend Engineer" />
        <link rel="shortcut icon" href="/favicon/apple-touch-icon.png" />
        <link
          rel="favicon-16x16"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="favicon-32x32"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="android-chrome-192x192"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="android-chrome-512x512"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
      </Head>
      <body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <Main />
        <NextScript />
      </body>
      <Script strategy="beforeInteractive" src="./moveCircle.js" />
    </Html>
  );
}
