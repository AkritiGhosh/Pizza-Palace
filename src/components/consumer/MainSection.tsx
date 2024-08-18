import { useContext } from "react";
import { UserContext } from "../../lib/context";

const MainSection = () => {
  const { theme } = useContext(UserContext);
  const bgURL = theme ? "src/assets/dark_bg.jpg" : "src/assets/light_bg.jpg";

  return (
    <section
      style={{ backgroundImage: `url(${bgURL})` }}
      className="w-full h-[calc(100vh-40px)] bg-cover"
    >
      <div className="w-2/5 h-full ml-4 md:ml-[5%] flex flex-col gap-5 justify-center text-right">
        <h1>Fall in love with <br/> Delicious Pizza</h1>

      </div>
    </section>
  );
};

export default MainSection;
