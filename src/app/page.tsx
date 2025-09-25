import AnimatedWords from "@/components/page/homepage/AnimatedWords";
import CallToAction from "@/components/page/homepage/CallToAction";
import Introduction from "@/components/page/homepage/Introduction";
import MainHeading from "@/components/page/homepage/MainHeading";
import TechAndTools from "@/components/page/homepage/TechAndTools";
import Testimonials from "@/components/page/homepage/Testimonials";
import PageWrapper from "@/components/wrappers/PageWrapper";


const Home = () => {
  return (
    <PageWrapper>
      <MainHeading />
      <Introduction />
      <TechAndTools />
      <AnimatedWords />
      <Testimonials />
      <CallToAction />
    </PageWrapper>
  );
};

export default Home;
