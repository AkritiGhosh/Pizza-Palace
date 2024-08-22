import { useContext } from "react";
import { UserContext } from "../../lib/context";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { theme } = useContext(UserContext);
  const bgURL = theme ? "src/assets/dark_bg.jpg" : "src/assets/light_bg.jpg";

  return (
    <main
      style={{ backgroundImage: `url(${bgURL})` }}
      className="w-full h-screen bg-cover snap-y snap-mandatory overflow-auto"
    >
      <div className="w-2/5 h-full ml-4 md:ml-[5%] flex flex-col gap-5 justify-center text-right">
        <h1>
          Fall in love with <br /> Delicious Pizza
        </h1>
        <button>
          <Link to={"/place-order"}>Place your order</Link>
        </button>
      </div>
    </main>
  );
};

export default LandingPage;
