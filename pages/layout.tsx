import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
import Archive from "./archive";

export default function Layout({ children }: any) {
  const router = useRouter();
  return (
    <>
      {router.pathname == "/archive" ? (
        <Archive />
      ) : (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <Sidebar />
            <main className="pt-24 lg:w-1/2 lg:py-24">{children}</main>
          </div>
        </div>
      )}
    </>
  );
}
