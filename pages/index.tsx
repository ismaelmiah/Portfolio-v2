import Head from "next/head";
import About from "./about";
import Certifications from "./certifications";
import Experience from "./experience";
import Project from "./projects";
import Education from "./education";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Ismael Miah - Portfolio</title>
          <meta property="og:description" content="Welcome to my portfolio! I am a software engineer who builds accessible, inclusive products and digital experiences for the web." />
          <meta name="keywords" content="portfolio, web developer, Asp dot net developer, dot net developer, software engineer" />
          <meta name="author" content="Ismael Miah" />
          <meta property="og:image" content="https://devismael.com/images/Thumbnail.jpeg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:alt" content="Summary Image" />
          <meta property="og:site_name" content="Ismael's Portfolio" />
          <meta property="og:url" content="https://devismael.com" />
          <meta property="og:title" content="Ismael Miah - Portfolio" />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="en_IE" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image:alt" content="Backend Engineer" />
          <meta name="twitter:description" content="Welcome to my portfolio! I am a software engineer who builds accessible, inclusive products and digital experiences for the web." />
          <meta name="twitter:image" content="https://devismael.com/images/Thumbnail.jpeg" />
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
      </div>
      <About />
      <Experience />
      <Project />
      <Education />
      <Certifications />
      <Contact />
      <div className="mt-20">
        © {new Date().getFullYear()} Ismael Miah. Made with ♥ in England, United Kingdom.
      </div>
    </>
  );
}
