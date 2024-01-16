import { ActiveLink } from "./utils/active-link";

export const NavBar = () => {
  return (
    <nav className="w-full z-20 bg-card h-12 mt-12 flex uppercase items-center font-bold text-secondary">
      <ul className="menu menu-horizontal w-full flex justify-around">
        <li>
          <ActiveLink href={"/"}>Galeria</ActiveLink>
        </li>
        <li>
          <ActiveLink href={"/about"}>Sobre</ActiveLink>
        </li>
        <li>
          <ActiveLink href={"/services"}>Services</ActiveLink>
        </li>
      </ul>
    </nav>
  );
};


