import React, { Children } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

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
    <header className="w-full fixed top-0 h-20 md:px-[5%] px-4 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 text-black dark:text-white flex items-center justify-end gap-5">
      {navLinks?.map((link) => (
        <Link
          className="h-full w-auto px-2 text-lg font-medium leading-[5rem] hover:drop-shadow-[0_0_rgba(255,0,10)] 
 hover:border-black border-b-2 border-transparent dark:hover:border-white"
          to={link?.path}
          key={link?.id}
        >
          {link?.name}
        </Link>
      ))}
      <Dropdown
        btnChild={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        }
      >
        <li className="relative w-full flex flex-row h-16">
          <span className="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center">
            U
          </span>
          <span>User name</span>
        </li>
        <li>Settings</li>
        <li>Order History</li>
        <li>Rewards and claims</li>
        <li>Log out</li>
      </Dropdown>
    </header>
  );
};

export default Header;
