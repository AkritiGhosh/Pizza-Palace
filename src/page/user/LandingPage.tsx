import { Link } from "react-router-dom";
import LoaderGif from "../../components/user/LoaderGif";

const LandingPage = () => {
  return (
    <main
      className={`w-full h-screen bg-cover bg-right bg-fixed overflow-auto bg-[url("src/assets/light_bg.jpg")] dark:bg-[url("src/assets/dark_bg.jpg")]`}
    >
      <div className="md:w-3/5 lg:w-2/5  h-full pl-4 md:pl-[5%] px-4 flex flex-col gap-5 justify-center text-right text-black dark:text-white">
        <h1 className="md:text-7xl text-5xl font-serif font-semibold dark:drop-shadow-light drop-shadow-dark">
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
