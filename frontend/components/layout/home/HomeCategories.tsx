import Label from "@/components/Label";
import SliderButton from "@/components/SliderButton";
import { ArrowLeft, ArrowRight } from "lucide-react";

const categoriesList = [
  { title: "Günlük Giyim", image: "./assets/hero-img.webp" },
  { title: "Batı Tarzı Giyim", image: "./assets/man.png" },
  { title: "Etnik Giyim", image: "./assets/man.png" },
  { title: "Çocuk Giyimi", image: "./assets/man.png" },
];

function CategoryCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="relative col-span-1 mb-8 aspect-[9/11] overflow-hidden bg-gray-200 hover:border-tertiary-600 border-2 transition-colors duration-100 cursor-pointer group ">
      {/* category name */}
      {/* <div className="absolute right-0 top-4 z-10">
        <p className="text-7xl font-bold text-dark-80/50">
        {title.split(" ")[0]}
        </p>
        </div> */}

      {/* image */}
      <div className="h-full w-full ">
        <img
          className="relative h-full w-full object-cover"
          src={image}
          alt="man"
        />
      </div>

      <Label title={title} />
    </div>
  );
}

function HomeCategories() {
  return (
    <section className="custom-container px-8 py-12">
      <div className="mb-12 flex items-center justify-between">
        <h2 className="text-lg font-medium sm:text-3xl">Popüler Kategoriler</h2>

        <div className="flex gap-2 md:gap-4">
          <SliderButton icon={<ArrowLeft size={20} />} />
          <SliderButton icon={<ArrowRight size={20} />} active={true} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-8 lg:grid-cols-4">
        {categoriesList.map((category, index) => (
          <div
            key={category.title}
            className={`${index >= 2 ? "hidden lg:block" : ""} `}
          >
            <CategoryCard title={category.title} image={category.image} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeCategories;
