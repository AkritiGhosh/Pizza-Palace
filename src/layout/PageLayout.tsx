import { ReactNode } from "react";
import Header from "../components/consumer/header/Header";

type LayoutProps = {
  children: ReactNode;
};

const PageLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default PageLayout;
