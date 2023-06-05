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
            <a href="">Blog</a>
          </li>
          <li className="transition-colors hover:text-amber-200">
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
      <nav className="place-self-end">
        <ul className="flex gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/guilherme-nunes-a666a514b/"
              target="_blank"
              aria-label="Linkedin profile"
            >
              <LinkedinIcon className="fill-amber-100 transition-colors hover:fill-amber-200"></LinkedinIcon>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/gnunesdev"
              target="_blank"
              aria-label="Twitter profile"
            >
              <Twitter className="fill-amber-100 transition-colors hover:fill-amber-200"></Twitter>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
