import { useState } from "react";
import PageLayout from "../../layout/PageLayout";

type authAction = "login" | "register";
const AuthPage = () => {
  const [action, setAction] = useState<authAction>("login");

  return (
    <PageLayout
      className="flex items-center justify-center p-4"
      withHeader={false}
    >
      <div className="relative flex flex-col w-full md:w-1/2 lg:w-3/5 p-4 border border-slate-400 rounded-md">
        <div className="w-full h-12 top-0 flex flex-row">
          <button
            onClick={() => setAction("login")}
            className={
              action == "login"
                ? "w-full border-b-2 border-amber-400 hover:border-slate-200/50 "
                : "w-full border-b-2 border-transparent hover:border-slate-200/50 "
            }
          >
            Login
          </button>
          <button
            onClick={() => setAction("register")}
            className={
              action == "register"
                ? "w-full border-b-2 border-amber-400 hover:border-slate-200/50 "
                : "w-full border-b-2 border-transparent hover:border-slate-200/50 "
            }
          >
            Sign up
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

export default AuthPage;
