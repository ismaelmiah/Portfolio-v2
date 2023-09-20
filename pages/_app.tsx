import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./layout";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    let focus = document.getElementById("pointer-events");
    window.addEventListener("mousemove", function (e) {
      if (focus != null) {
        focus.style.background = `radial-gradient(400px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.25), transparent 80%)`;
      }
    });
  }, []);

  return (
    <>
      <div
        id="pointer-events"
        className="pointer-events-none fixed inset-0 z-300 transition duration-300"
        style={{
          background:
            "radial-gradient(400px at 750px 505px, rgba(29, 78, 216, 0.25), transparent 80%)",
        }}
      ></div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
