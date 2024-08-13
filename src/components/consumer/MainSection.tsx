import React, { useContext } from "react";
import { UserContext } from "../../lib/context";

const MainSection = () => {
  const { theme } = useContext(UserContext);
  const bgURL = theme ? "src/assets/dark_bg.jpg" : "src/assets/light_bg.jpg";

  return (
    <section
      style={{ backgroundImage: `url(${bgURL})` }}
      className="w-full h-[calc(100vh-40px)] bg-cover"
    ></section>
  );
};

export default MainSection;
