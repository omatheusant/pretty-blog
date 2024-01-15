"use client";

import { useState } from "react";

export const NavBar = () => {
  const [selected, setSelected] = useState("galery");
  return (
    <nav className="w-full bg-primary-content mt-12 flex uppercase font-extrabold text-secondary">
      <ul className="menu menu-horizontal w-full flex justify-around">
        <li>
          <a onClick={() => setSelected("galery")} className={selected === 'galery' ? "active text-white" : ''}>
            Galeria
          </a>
        </li>
        <li>
          <a onClick={() => setSelected("about")} className={selected === 'about' ? "active" : ''}>
            Sobre
          </a>
        </li>
        <li>
          <a onClick={() => setSelected("services")} className={selected === 'services' ? "active" : ''}>
            Serviços
          </a>
        </li>
      </ul>
    </nav>
  );
};
