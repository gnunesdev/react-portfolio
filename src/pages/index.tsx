import { type NextPage } from "next";

import { LinkedinIcon, Twitter } from "lucide-react";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>gnunes.dev</title>
      </Head>
      <div className="bg-indigo-900 text-amber-100">
        <header className="flex justify-between px-8 py-4">
          <h1 className="bold text-2xl">gnunes.dev</h1>
          <nav>
            <ul className="flex gap-6">
              <li>Home</li>
              <li>Trabalhos</li>
              <li>Contato</li>
            </ul>
          </nav>
          <nav>
            <ul className="flex gap-4">
              <li>
                <button>
                  <LinkedinIcon fill="#ffedd5"></LinkedinIcon>
                </button>
              </li>
              <li>
                <button>
                  <Twitter fill="#ffedd5"></Twitter>
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex h-[calc(100vh_-_4rem)] items-center justify-between px-20">
          <div className="max-w-sm">
            <p className="text-xl font-light">Olá, Eu sou o Guilherme,</p>
            <h2 className="mt-2 text-6xl font-bold">Engenheiro de Software</h2>
            <p className="mt-2 text-xl font-light">trabalhando do Brasil.</p>
            <button className="mt-5 rounded-lg bg-amber-200 px-8 py-4 font-semibold text-indigo-900 transition-colors hover:bg-amber-300">
              Currículo
            </button>
          </div>
          <div>
            <div className="h-44 w-44 rounded-3xl bg-amber-100"></div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
