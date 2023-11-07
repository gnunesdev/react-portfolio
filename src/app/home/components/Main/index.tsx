import { Button } from "~/components/Button";

import Image from "next/image";
import profilePicture from "/public/profile-picture.jpg";

export const Main = () => {
  return (
    <main className="m-auto flex h-[calc(100vh_-_4rem)] max-w-screen-2xl items-center justify-between px-32">
      <div className="max-w-sm">
        <p className="text-xl font-light">Olá, Eu sou o Guilherme,</p>
        <h2 className="mt-2 text-6xl font-bold">Engenheiro de Software</h2>
        <p className="mt-2 text-xl font-light">trabalhando do Brasil.</p>
        <Button type="button" className="mt-4">
          Currículo
        </Button>
      </div>
      <div>
        <Image
          className="h-96 w-96 rounded-3xl object-cover object-bottom"
          src={profilePicture}
          alt="Picture of Guilherme Nunes"
        />
      </div>
    </main>
  );
};
