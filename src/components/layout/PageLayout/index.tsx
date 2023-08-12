import Header from "@/components/containers/Header";
import Footer from "@/components/containers/Footer";

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
