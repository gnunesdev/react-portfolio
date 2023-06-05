import { Header } from "~/components/Header";
import { Main } from "./home/components/Main";
import { About } from "./home/components/About";
import { Companies } from "./home/components/Companies";
import { Timeline } from "./home/components/Timeline";
import { Footer } from "~/components/Footer";
import { Contact } from "./home/components/Contact";

export default function Home() {
  return (
    <>
      <div className="bg-indigo-900 text-amber-100">
        <Header />
        <Main />
        <About />
        <Companies />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
