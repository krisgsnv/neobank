import Header from "@/components/containers/sections/Header";
import Footer from "@/components/containers/sections/Footer";

type PageLayoutPropsType = {
  children?: React.ReactNode;
};

const PageLayout = ({ children }: PageLayoutPropsType) => {
  return (
    <>
      <Header />
      <main>
        <div className="container">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
