import { LinkedinIcon, Twitter } from "lucide-react";

export const Header = () => {
  return (
    <header className="grid grid-cols-3 px-8 py-4">
      <h1 className="bold text-2xl">gnunes.dev</h1>
      <nav className="place-self-center">
        <ul className="flex gap-6">
          <li className="transition-colors hover:text-amber-200">
            <a href="">Home</a>
          </li>
          <li className="transition-colors hover:text-amber-200">
            <a href="">Trabalhos</a>
          </li>
          <li className="transition-colors hover:text-amber-200">
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
      <nav className="place-self-end">
        <ul className="flex gap-4">
          <li>
            <button>
              <LinkedinIcon className="fill-amber-100 transition-colors hover:fill-amber-200"></LinkedinIcon>
            </button>
          </li>
          <li>
            <button>
              <Twitter className="fill-amber-100 transition-colors hover:fill-amber-200"></Twitter>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
