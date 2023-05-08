import { Header } from "~/components/Header";
import { Main } from "./home/components/Main";
import { About } from "./home/components/About";
import { Companies } from "./home/components/Companies";

export default function Home() {
  return (
    <>
      <div className="bg-indigo-900 text-amber-100">
        <Header />
        <Main />
        <About />
        <Companies />
        <section className="bg-indigo-950">
          <div className="m-auto max-w-screen-2xl p-20">
            <h3 className="text-5xl font-bold">timeline</h3>
            <div className="mt-8 flex flex-wrap gap-8">
              <div className="mt-16 flex h-fit w-72 flex-col rounded-2xl bg-indigo-900">
                <div className="rounded-t-2xl bg-amber-200 px-4 pb-2 pt-3 text-indigo-900">
                  <span className="font-semibold">2018 - iSolutions</span>
                  <p className="font-semibold">Desenvolvedor fullstack</p>
                </div>
                <div className="p-4">
                  <p>
                    Primeira atuação profissional em uma fábrica de software,
                    desenvolvi sistemas ERP de gestão de estoque.
                  </p>
                  <p className="mt-4">Tecnologias:</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                      <div>Java</div>
                    </li>
                    <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                      <div>Grails</div>
                    </li>
                    <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                      <div>SQL</div>
                    </li>
                    <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                      <div>Vue.js</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex h-fit w-72 flex-col rounded-2xl bg-indigo-900 p-4">
                <span className="font-semibold">2019 - Enext</span>
                <p className="font-semibold">Desenvolvedor frontend</p>
                <p className="mt-4">
                  Atuei como líder de squad e desenvolvedor frontend,
                  responsável por coordenar e entregar sites de e-commerce.
                  Principais clientes: Yamaha, Boticário, Armázem Paraíba.
                </p>
                <span className="mt-4">Tecnologias:</span>
                <ul className="mt-2 flex flex-wrap gap-2">
                  <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                    <div>HTML</div>
                  </li>
                  <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                    <div>CSS</div>
                  </li>
                  <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                    <div>React</div>
                  </li>
                  <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                    <div>Javascript</div>
                  </li>
                  <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                    <div>VTEX</div>
                  </li>
                  <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                    <div>OCC</div>
                  </li>
                </ul>
              </div>
              <div className="mt-16 flex h-fit w-72 flex-col rounded-2xl bg-indigo-900">
                <div className="rounded-t-2xl bg-amber-200 px-4 pb-2 pt-3 text-indigo-900">
                  <span className="font-semibold">2020 à 2021 - PagSeguro</span>
                  <p className="font-semibold">Engenheiro de software</p>
                </div>
                <div className="p-4">
                  <p>
                    Atuei no planejamento e desenvolvimento do aplicativo de
                    delivery Pedefácil, responsável por criar novas
                    funcionalidades, testes, e acompanhar erros e métricas em
                    produção.
                  </p>
                  <p className="mt-4">Tecnologias:</p>
                  <ul className="mt-2 flex gap-2">
                    <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                      <div>React</div>
                    </li>
                    <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                      <div>CSS</div>
                    </li>
                    <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                      <div>Jest</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex h-fit w-72 flex-col rounded-2xl bg-indigo-900 p-4">
                <span className="font-semibold">2021/Atualmente - Ifood</span>
                <p className="font-semibold">Engenheiro de software</p>
                <p className="mt-4">
                  Atuo em um time de tecnologia, mantendo uma plataforma
                  utilizada por operadores e internos com arquitetura de micro
                  frontend, auxiliando na integração de novos times e definindo
                  a arquitetura.
                </p>
                <span className="mt-4">Tecnologias:</span>
                <ul className="mt-2 flex flex-wrap gap-2">
                  <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                    <div>React</div>
                  </li>
                  <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                    <div>Node JS</div>
                  </li>
                  <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                    <div>Apollo</div>
                  </li>
                  <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                    <div>GraphQL</div>
                  </li>
                  <li className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-indigo-900">
                    <div>NestJS</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
