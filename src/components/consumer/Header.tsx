import React, { Children } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    {
      path: "/",
      name: "Home",
      id: "home",
    },
    {
      path: "/menu",
      name: "Menu",
      id: "menu",
    },
    {
      path: "/build-custom-pizza",
      name: "Build your own pizza",
      id: "build",
    },
    {
      path: "/menu/offer",
      name: "Offers and Vouchers",
      id: "offer",
    },
  ];
  return (
    <header className="w-full fixed top-0 h-20 md:px-[5%] px-4 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 flex items-center justify-end gap-5">
      {navLinks?.map((link) => (
        <Link
          className="h-full w-auto px-2 text-lg font-medium text-black dark:text-white leading-[5rem] hover:drop-shadow-[0_0_rgba(255,0,10)] 
 hover:border-black border-b-2 border-transparent dark:hover:border-white"
          to={link?.path}
          key={link?.id}
        >
          {link?.name}
        </Link>
      ))}
    </header>
  );
};

export default Header;
