"use client";

import React, { useCallback, useState } from "react";
import SliderButton from "@/components/SliderButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CategoryCard from "@/components/CategoryCard";

const categoriesList = [
  { title: "Günlük Giyim", image: "./assets/hero-img.webp" },
  { title: "Batı Tarzı Giyim", image: "./assets/man.png" },
  { title: "Etnik Giyim", image: "./assets/man.png" },
  { title: "Çocuk Giyimi", image: "./assets/man.png" },
];

export default function HomeCategories() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const scrollPrev = useCallback(() => api && api.scrollPrev(), [api]);
  const scrollNext = useCallback(() => api && api.scrollNext(), [api]);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    setCount(api.scrollSnapList().length);
  }, [api]);

  React.useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="custom-container px-8 py-12">
      <div className="mb-8 sm:mb-12 flex items-center justify-between">
        <h2 className="text-lg font-medium sm:text-3xl">Popüler Kategoriler</h2>

        <div className="flex gap-2 md:gap-4">
          <SliderButton
            icon={<ArrowLeft size={20} />}
            onClick={scrollPrev}
            disabled={current === 0}
          />
          <SliderButton
            icon={<ArrowRight size={20} />}
            onClick={scrollNext}
            disabled={current === count - 1}
          />
        </div>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
        setApi={setApi}
      >
        <CarouselContent>
          {[...categoriesList, ...categoriesList].map((category, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <CategoryCard title={category.title} image={category.image} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
