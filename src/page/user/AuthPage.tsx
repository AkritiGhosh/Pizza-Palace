import { useMemo, useState } from "react";
import PageLayout from "../../layout/PageLayout";
import Login from "../../components/user/authPage/Login";
import Register from "../../components/user/authPage/Register";

type authAction = "login" | "register";
const AuthPage = () => {
  const [action, setAction] = useState<authAction>("login");

  const form = useMemo(() => {
    switch (action) {
      case "register": {
        return <Register />;
      }
      default: {
        return <Login />;
      }
    }
  }, [action]);

  return (
    <PageLayout
      className="flex items-center justify-center p-4 bg-white dark:bg-slate-900"
      withHeader={false}
    >
      <div className="relative flex flex-col gap-6 w-full md:w-1/2 lg:w-3/5 xl:w-1/2 p-4 border border-slate-400 rounded-md">
        <div className="w-full h-12 top-0 flex flex-row">
          <button
            onClick={() => setAction("login")}
            className={
              action == "login"
                ? "w-full border-b-2 border-amber-400 hover:border-amber-200  text-black dark:text-white"
                : "w-full border-b-2 border-transparent hover:border-slate-200/50  text-black dark:text-white"
            }
          >
            Login
          </button>
          <button
            onClick={() => setAction("register")}
            className={
              action == "register"
                ? "w-full border-b-2 border-amber-400 hover:border-amber-200  text-black dark:text-white"
                : "w-full border-b-2 border-transparent hover:border-slate-200/50  text-black dark:text-white"
            }
          >
            Sign up
          </button>
        </div>
        {form}
      </div>
    </PageLayout>
  );
};

export default AuthPage;
