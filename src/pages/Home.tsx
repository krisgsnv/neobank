import HomeBanner from "@/components/containers/banners/HomeBanner";
import Features from "@/components/containers/sections/Features";
import Exchange from "@/components/containers/sections//Exchange";
import Geography from "@/components/containers/sections/Geography";
import News from "@/components/containers/sections/News";
import Support from "@/components/containers/sections/Support";

const Home = (): JSX.Element => (
  <>
    <HomeBanner />
    <Features />
    <Exchange />
    <Geography />
    <News />
    <Support />
  </>
);

export default Home;
