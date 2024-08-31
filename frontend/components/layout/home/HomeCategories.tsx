import { CarouselItem } from "@/components/ui/carousel";
import CategoryCard from "@/components/CategoryCard";
import CustomCarousel from "@/components/CustomCarousel";

const categoriesList = [
  { title: "Günlük Giyim", image: "./assets/hero-img.webp" },
  { title: "Batı Tarzı Giyim", image: "./assets/man.png" },
  { title: "Etnik Giyim", image: "./assets/man.png" },
  { title: "Çocuk Giyimi", image: "./assets/man.png" },
];

export default function HomeCategories() {
  return (
    <section className="custom-container px-8 py-12">
      <CustomCarousel title="Popüler Kategoriler">
        {[...categoriesList, ...categoriesList].map((category, index) => (
          <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/4">
            <CategoryCard title={category.title} image={category.image} />
          </CarouselItem>
        ))}
      </CustomCarousel>
    </section>
  );
}
