import Image from "next/image";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between px-24 h-full ">
        <div className="w-full h-full">
          <NavBar />
          <Content />
        </div>

        <Footer />
      </main>
    </>
  );
}
