import React, { useContext } from "react";
import { UserContext } from "../../lib/context";

const LandingPage = () => {
  const { theme } = useContext(UserContext);
  const bgURL = theme ? "src/assets/dark_bg.jpg" : "src/assets/light_bg.jpg";
        console.log("called landing");

    return (
    <main
      style={{ backgroundImage: `url(${bgURL})` }}
      className="w-screen h-screen bg-cover snap-y"
    ></main>
  );
};

export default LandingPage;
