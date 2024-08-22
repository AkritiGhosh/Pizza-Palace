import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main
      className={`w-full h-screen bg-cover overflow-auto bg-[url("src/assets/light_bg.jpg")] dark:bg-[url("src/assets/dark_bg.jpg")]`}
    >
      <div className="w-2/5 h-full ml-4 md:ml-[5%] flex flex-col gap-5 justify-center text-right text-black dark:text-white">
        <h1 className="text-7xl font-serif font-semibold dark:drop-shadow-light drop-shadow-dark">
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
