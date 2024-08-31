"use client";

import React, { useCallback, useState, useEffect } from "react";
import Label from "@/components/Label";
import SliderButton from "@/components/SliderButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

const categoriesList = [
  { title: "Günlük Giyim", image: "./assets/hero-img.webp" },
  { title: "Batı Tarzı Giyim", image: "./assets/man.png" },
  { title: "Etnik Giyim", image: "./assets/man.png" },
  { title: "Çocuk Giyimi", image: "./assets/man.png" },
];

function CategoryCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="relative col-span-1 mb-8 aspect-[9/11] overflow-hidden bg-gray-200 hover:border-tertiary-600 border transition-colors duration-100 cursor-pointer group">
      <div className="relative h-full w-full">
        <img className="h-full w-full object-cover" src={image} alt={title} />
      </div>
      <Label title={title} />
    </div>
  );
}

function HomeCategories() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  return (
    <section className="custom-container px-8 py-12">
      <div className="mb-8 sm:mb-12 flex items-center justify-between">
        <h2 className="text-lg font-medium sm:text-3xl">Popüler Kategoriler</h2>

        <div className="flex gap-2 md:gap-4">
          <SliderButton
            onClick={scrollPrev}
            icon={<ArrowLeft size={20} />}
            active={current !== 1}
          />
          <SliderButton
            onClick={scrollNext}
            icon={<ArrowRight size={20} />}
            active={current !== count}
          />
        </div>
      </div>

      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {categoriesList.map((category, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <CategoryCard title={category.title} image={category.image} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}

export default HomeCategories;
