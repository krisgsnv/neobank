import PageLayout from "@/components/layout/PageLayout";
import HomeBanner from "@/components/containers/HomeBanner";
import Features from "@/components/containers/Features";
import Exchange from "@/components/containers/Exchange";
import Geography from "@/components/containers/Geography";
import News from "@/components/containers/News";
import Support from "@/components/containers/Support";

const Home = () => (
  <PageLayout>
    <HomeBanner />
    <Features />
    <Exchange />
    <Geography />
    <News />
    <Support />
  </PageLayout>
);

export default Home;
