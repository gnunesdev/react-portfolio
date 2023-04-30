import { type NextPage } from "next";

import Head from "next/head";
import { Header } from "~/components/Header";
import { Main } from "./home/components/Main";
import { About } from "./home/components/About";
import { Companies } from "./home/components/Companies";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>gnunes.dev</title>
      </Head>
      <div className="bg-indigo-900 text-amber-100">
        <Header />
        <Main />
        <About />
        <Companies />
      </div>
    </>
  );
};

export default Home;
