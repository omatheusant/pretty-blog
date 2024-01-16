import Image from "next/image";
import { NavBar } from "./nav-bar";

export const Header = () => {
  return (
    <header>
      <div className="flex justify-center items-center">
        <Image
          className="mt-6"
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          priority
         />
      </div>
      <NavBar/>
    </header>
  );
};
