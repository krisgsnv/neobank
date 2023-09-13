import Header from "@/components/containers/sections/Header";
import Footer from "@/components/containers/sections/Footer";
import { Outlet } from "react-router";
import "./style.scss";

const PageLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
