import BestSellers from "@/components/layout/BestSellers";
import Hero from "@/components/layout/home/Hero";
import HomeCategories from "@/components/layout/home/HomeCategories";

function Home() {
  return (
    <>
      <Hero />

      <HomeCategories />

      <BestSellers />
    </>
  );
}

export default Home;
