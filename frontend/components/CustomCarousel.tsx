"use client";

import SliderButton from "@/components/SliderButton";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
} from "@/components/ui/carousel";
import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ReactNode, useCallback, useEffect, useState } from "react";

function CustomCarousel({
  title,
  centeredTitle = false,
  children,
}: {
  title: string;
  centeredTitle?: boolean;
  children: ReactNode;
}) {
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

  useEffect(() => {
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
    <>
      <div className="mb-8 sm:mb-12 flex items-center justify-between">
        <h2
          className={clsx("text-lg font-medium sm:text-3xl", {
            "text-center flex-grow": centeredTitle,
          })}
        >
          {title}
        </h2>
        <div className="flex gap-2 md:gap-4">
          <SliderButton
            onClick={scrollPrev}
            disabled={current === 0}
            icon={<ArrowLeft size={20} />}
          />
          <SliderButton
            onClick={scrollNext}
            disabled={current === count - 1}
            icon={<ArrowRight size={20} />}
            active={true}
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
        <CarouselContent>{children}</CarouselContent>
      </Carousel>
    </>
  );
}

export default CustomCarousel;
