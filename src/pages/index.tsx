import { type NextPage } from "next";

import { LinkedinIcon, Twitter } from "lucide-react";
import Head from "next/head";
import { Slider } from "~/components/Slider";

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
        <main className="m-auto flex h-[calc(100vh_-_4rem)] max-w-screen-2xl items-center justify-between px-20">
          <div className="max-w-sm">
            <p className="text-xl font-light">Olá, Eu sou o Guilherme,</p>
            <h2 className="mt-2 text-6xl font-bold">Engenheiro de Software</h2>
            <p className="mt-2 text-xl font-light">trabalhando do Brasil.</p>
            <button className="mt-5 rounded-lg bg-amber-200 px-8 py-4 font-semibold text-indigo-900 transition-colors hover:bg-amber-300">
              Currículo
            </button>
          </div>
          <div>
            <div className="h-96 w-96 rounded-3xl bg-amber-100"></div>
          </div>
        </main>
        <section className="bg-indigo-950">
          <div className="m-auto max-w-screen-2xl">
            <div className="w-4/5 max-w-5xl px-20 py-20">
              <h3 className="text-5xl font-bold">sobre</h3>
              <p className="mt-2 text-lg font-light">
                Muito prazer! sou o Guilherme, engenheiro de software com mais
                de 5 anos de experiência profissional na área de desenvolvimento
                de aplicações web. Sou formado em Ciência da computação e possuo
                curso de técnico em informática. Sou brasileiro, tenho 23 anos e
                estudo programação desde os meus 15 anos.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-32 px-20">
          <h3 className="text-center text-5xl font-bold">trabalhos</h3>
          <p className="mt-2 text-center text-lg font-light">
            Essas são algumas das empresas que já tive a oportunidade de
            trabalhar
          </p>
          <div className="mt-12">
            <Slider items={["1", "1", "1", "1", "1", "1"]} />
          </div>
        </section>
        <section className="h-72"></section>
      </div>
    </>
  );
};

export default Home;
