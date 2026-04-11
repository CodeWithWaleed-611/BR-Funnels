import Navbar from "../components/layout/Navbar.jsx";
import Hero from "../sections/hero/Hero.jsx";
import Integrations from "../sections/integrations/Integrations.jsx";
import CTA from "../sections/cta/CTA.jsx";
import Services from "../sections/services/Services.jsx";
import PortfolioShowcase from "../sections/portfolio/PortfolioShowcase.jsx";
import Performance from "../sections/performance/Performance.jsx";
import TrustedBrands from "../sections/trustedbrands/TrustedBrands.jsx";
import Guarantee from "../sections/guarantee/Guarantee.jsx";
import SuccessStories from "../sections/successsstories/SuccessStories.jsx";
import Testimonials from "../sections/testimonials/Testimonials.jsx";
import MobileFirst from "../sections/mobilefirst/MobileFirst.jsx";
import Framework from "../sections/framework/Framework.jsx";
import Footer from "../sections/footer/Footer.jsx";
import StrategyCall from "../sections/strategy-call/StrategyCall.jsx";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Integrations />
      <PortfolioShowcase />
      <Performance />
      <TrustedBrands />
      <Guarantee />
      <Services />
      <SuccessStories />
      <Testimonials />
      <MobileFirst />
      <Framework />
      <StrategyCall />

      <Footer />
    </>
  );
};

export default LandingPage;
