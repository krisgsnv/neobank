import HomeBanner from "@/components/containers/banners/HomeBanner";
import Features from "@/components/containers/sections/Features";
import Exchange from "@/components/containers/sections//Exchange";
import Geography from "@/components/containers/sections/Geography";
import News from "@/components/containers/sections/News";
import Support from "@/components/containers/sections/Support";
import Prescoring from "@/components/containers/forms/Prescoring";

const Home = () => (
  <>
    <Prescoring />
    <HomeBanner />
    <Features />
    <Exchange />
    <Geography />
    <News />
    <Support />
  </>
);

export default Home;
