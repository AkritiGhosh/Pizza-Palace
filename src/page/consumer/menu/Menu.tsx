import React, { useEffect, useState } from "react";
import PageLayout from "../../../layout/PageLayout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const tabs = [
  { name: "Today's Deals", path: "offer" },
  { name: "Veg Pizza", path: "veg" },
  { name: "Non-veg Pizza", path: "non-veg" },
  { name: "Side dishes", path: "sides" },
  { name: "Combos", path: "combos" },
];

const Menu = () => {
  const loc = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    if (loc?.pathname?.split("/").at(-1) == "menu") nav("offer");
  }, [loc.pathname]);

  const tabOpen = loc?.pathname?.split("/").at(-1);

  return (
    <PageLayout className="flex-col">
      <div className="w-full h-12 top-0 flex flex-row">
        {tabs?.map((tab) => (
          <button
            onClick={() => nav( tab?.path)}
            className={
              tabOpen == tab?.path
                ? "w-full border-b-2 border-amber-400 hover:border-amber-200  text-black dark:text-white"
                : "w-full border-b-2 border-transparent hover:border-slate-200/50  text-black dark:text-white"
            }
          >
            {tab?.name}
          </button>
        ))}
      </div>
      <Outlet />
    </PageLayout>
  );
};

export default Menu;
