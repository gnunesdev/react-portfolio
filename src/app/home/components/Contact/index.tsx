import { Button } from "~/components/Button";

export const Contact = () => {
  return (
    <section>
      <div className="m-auto max-w-screen-2xl p-20">
        <h3 className="text-center text-5xl font-bold">contato</h3>
        <div className="mx-auto max-w-2xl">
          <p className="mt-2 text-center text-lg font-light">
            Gostaria de fazer um projeto comigo? por favor, entre em contato:
          </p>
          <form action="" className="mt-12 flex w-full flex-col">
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm font-semibold">
                Nome completo:
              </label>
              <input
                type="text"
                className="relative border-b-2 border-amber-100 bg-indigo-900 px-0 pb-1 pt-2 outline-none after:absolute after:h-10 after:w-10 after:bg-red-600 after:content-['']"
              />
            </div>
            <div className="mt-6 flex flex-col">
              <label htmlFor="" className="text-sm font-semibold">
                Email:
              </label>
              <input
                type="text"
                className="border-b-2 border-amber-100 bg-indigo-900 px-0 pb-1 pt-2 outline-none"
              />
            </div>
            <div className="mt-6 flex flex-col">
              <label htmlFor="" className="text-sm font-semibold">
                Assunto:
              </label>
              <select className="border-b-2 border-amber-100 bg-indigo-900 px-0 pb-1 pt-2 outline-none">
                <option value="">Quero contratar um serviço</option>
                <option value="">Quero uma consultoria</option>
                <option value="">Quero deixar um feedback</option>
                <option value="">Outro</option>
              </select>
            </div>
            <div className="mt-6 flex flex-col">
              <label htmlFor="" className="text-sm font-semibold">
                Email:
              </label>
              <textarea
                className="h-44 resize-none border-b-2 border-amber-100 bg-indigo-900 px-0 pb-1 pt-2 outline-none"
                placeholder="Escreva o motivo do seu contato..."
              />
            </div>
            <Button className="mx-auto mt-6">Enviar mensagem</Button>
          </form>
        </div>
      </div>
    </section>
  );
};
