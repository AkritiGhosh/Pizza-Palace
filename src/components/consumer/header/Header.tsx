import { Link } from "react-router-dom";
import Dropdown from "../../../layout/Dropdown";

type NavLinksTypes = {
  path: string;
  name: string;
  id: string;
};
const Header = () => {
  const navLinks: NavLinksTypes[] = [
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

  const menuLinks: NavLinksTypes[] = [
    {
      name: "Settings",
      path: "/settings",
      id: "settings",
    },
    {
      name: "Order history",
      path: "/profile/orders",
      id: "orders",
    },
    {
      name: "Rewards and claims",
      path: "/profile/rewards",
      id: "rewards",
    },
  ];

  return (
    <header className="w-full fixed top-0 h-20 md:px-[5%] px-4 bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 text-black dark:text-white flex items-center justify-end gap-5">
      {navLinks?.map((link) => (
        <Link
          className="h-full w-auto px-2 text-lg font-medium leading-[5rem] hover:drop-shadow-[0_0_#fffbeb] 
 hover:border-black border-b-2 border-transparent dark:hover:border-amber-100"
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
            className="size-6 hover:stroke-2 hover:stroke-amber-50 mt-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        }
      >
        {false ? (
          <li className="w-full py-2 px-4  text-sm text-amber-500 hover:bg-red-200/20 hover:font-bold cursor-pointer">
            Login
          </li>
        ) : (
          <>
            <li className="relative w-full flex flex-row items-center h-16  py-2 px-4 gap-4">
              <span className="w-10 h-10 rounded-full bg-purple-600 text-white text-xl font-bold flex items-center justify-center">
                U
              </span>
              <span className="text-xl font-medium">User name</span>
            </li>
            {menuLinks?.map((menuItem) => (
              <li
                id={menuItem?.id}
                className="w-full py-2 px-4  text-sm hover:bg-amber-200/20 hover:font-bold"
              >
                <Link to={menuItem?.path}>{menuItem?.name}</Link>
              </li>
            ))}
            <li className="w-full py-2 px-4  text-sm text-red-500 hover:bg-red-200/20 hover:font-bold cursor-pointer">
              Log out
            </li>
          </>
        )}
      </Dropdown>
    </header>
  );
};

export default Header;
