import Header from "@/components/containers/sections/Header";
import Footer from "@/components/containers/sections/Footer";

type PageLayoutPropsType = {
  children?: React.ReactNode
};

const PageLayout = (props:PageLayoutPropsType) => {
  return (
    <>
      <Header />
      <main>
        <div className="container">{props.children}</div>
      </main>
      <Footer />
    </>
  );
};

export default PageLayout;
