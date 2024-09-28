import React, { useState } from "react";
import FloatingLabelInput from "../../../layout/FloatingLabelInput";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  return (
    <div className="w-full flex flex-col gap-4">
      <FloatingLabelInput
        type="email"
        label="Enter your email"
        name="email"
        id="email"
        value={email}
        setValue={setEmail}
      />
      <FloatingLabelInput
        type="password"
        label="Enter your password"
        name="password"
        id="password"
        value={pwd}
        setValue={setPwd}
      />
      <button className="w-auto h-12 py-2 px-4 rounded-md text-base bg-amber-800 text-white font-bold hover:bg-amber-700">
        Log in
      </button>
    </div>
  );
};

export default Login;
