import BestSellers from "@/components/layout/BestSellers";
import DealsOfMonth from "@/components/layout/home/DealsOfMonth";
import Hero from "@/components/layout/home/Hero";
import HomeCategories from "@/components/layout/home/HomeCategories";

function Home() {
  return (
    <>
      <Hero />

      <HomeCategories />

      <BestSellers />

      <DealsOfMonth />
    </>
  );
}

export default Home;
