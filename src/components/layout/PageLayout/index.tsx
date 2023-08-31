import Header from "@/components/containers/sections/Header";
import Footer from "@/components/containers/sections/Footer";
import { Outlet } from "react-router";

const PageLayout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
