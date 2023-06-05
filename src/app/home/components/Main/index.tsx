import { Button } from "~/components/Button";

export const Main = () => {
  return (
    <main className="m-auto flex h-[calc(100vh_-_4rem)] max-w-screen-2xl items-center justify-between px-20">
      <div className="max-w-sm">
        <p className="text-xl font-light">Olá, Eu sou o Guilherme,</p>
        <h2 className="mt-2 text-6xl font-bold">Engenheiro de Software</h2>
        <p className="mt-2 text-xl font-light">trabalhando do Brasil.</p>
        <Button type="button" className="mt-4">
          Currículo
        </Button>
      </div>
      <div>
        <div className="h-96 w-96 rounded-3xl bg-amber-100"></div>
      </div>
    </main>
  );
};
