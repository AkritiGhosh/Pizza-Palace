import React, { useState } from "react";
import PageLayout from "../../../layout/PageLayout";
import { Outlet } from "react-router-dom";

const Menu = () => {
  const [tab, setTab] = useState("");
  return (
    <PageLayout className="flex-col">
      <div className="w-full h-12 top-0 flex flex-row">
        <button
          onClick={() => setTab("login")}
          className={
            tab == "login"
              ? "w-full border-b-2 border-amber-400 hover:border-amber-200  text-black dark:text-white"
              : "w-full border-b-2 border-transparent hover:border-slate-200/50  text-black dark:text-white"
          }
        >
          Login
        </button>
        <button
          onClick={() => setTab("register")}
          className={
            tab == "register"
              ? "w-full border-b-2 border-amber-400 hover:border-amber-200  text-black dark:text-white"
              : "w-full border-b-2 border-transparent hover:border-slate-200/50  text-black dark:text-white"
          }
        >
          Sign up
        </button>
      </div>
      <Outlet/>
    </PageLayout>
  );
};

export default Menu;
