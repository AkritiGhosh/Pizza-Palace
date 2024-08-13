import MainSection from "../../components/consumer/MainSection";

const LandingPage = () => {
  const sections = [
    {
      heading: "Welcome to Pizza Palace",
      section: <MainSection />,
    },
    {
      heading: "Select your pizza",
      section: <></>,
    },
    {
      heading: "Build your own pizza",
      section: <></>,
    },
  ];

  return (
    <main className="w-full h-screen bg-cover snap-y snap-mandatory overflow-auto">
      {sections?.map((section, idx) => (
        <section
          key={"section" + idx}
          className="snap-start w-full h-screen flex flex-col gap-4 snap-always"
        >
          <h1>{section?.heading}</h1>
          <div>{section?.section}</div>
        </section>
      ))}
    </main>
  );
};

export default LandingPage;
