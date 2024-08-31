import BestSellers from "@/components/layout/BestSellers";
import CustomerTestimonials from "@/components/layout/home/CustomerTestimonials";
import DealsOfMonth from "@/components/layout/home/DealsOfMonth";
import Hero from "@/components/layout/home/Hero";
import HomeCategories from "@/components/layout/home/HomeCategories";
import InstagramStories from "@/components/layout/home/InstagramStories";
import SiteBenefits from "@/components/SiteBenefits";

function Home() {
  return (
    <>
      <Hero />

      <HomeCategories />

      <BestSellers />

      {/* <DealsOfMonth /> */}

      <CustomerTestimonials />

      <InstagramStories />

      <SiteBenefits />
    </>
  );
}

export default Home;
