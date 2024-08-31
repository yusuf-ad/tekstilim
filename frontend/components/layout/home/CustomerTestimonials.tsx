"use client";

import SliderButton from "@/components/SliderButton";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

type Testimonial = {
  id: number;
  rating: number;
  content: string;
  customer: {
    name: string;
    job: string;
  };
};

function TestimonialItem({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col justify-between h-full gap-2 rounded-lg bg-white-500 px-4 py-6 shadow-lg">
      <div>
        <div className="mb-3 flex gap-[2px]">
          {Array.from({ length: 5 }, (_, index) => (
            <span className="text-xl text-[#fab005]" key={index}>
              {index < testimonial.rating ? <Star fill="#fab005" /> : <Star />}
            </span>
          ))}
        </div>
        <p className="mb-4 text-lg font-medium text-primary-600">
          {testimonial.content}
        </p>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex h-16 w-16 items-center overflow-hidden rounded-full bg-gray-500">
          <img
            src="/assets/man.png"
            className="h-full w-full object-cover"
            alt="user image"
          />
        </div>

        <div>
          <p className="text-lg font-semibold">{testimonial.customer.name}</p>
          <p className="font-medium text-primary-400">
            {testimonial.customer.job}
          </p>
        </div>
      </div>
    </div>
  );
}

const testimonials = [
  {
    id: 1,
    rating: 5,
    content:
      "Ürünlerin kalitesi mükemmel, kumaşlar yumuşacık ve çok rahat. Siparişim çok hızlı bir şekilde elime ulaştı ve paketleme de oldukça özenliydi.",
    customer: {
      name: "John Doe",
      job: "Model",
    },
  },
  {
    id: 2,
    rating: 4,
    content:
      "Ürünler beklediğimden daha iyi çıktı. Renkler çok canlı ve kumaş kalitesi harika. Kargo biraz gecikti ama genel olarak memnunum.",
    customer: {
      name: "Jane Smith",
      job: "Moda Tasarımcısı",
    },
  },
  {
    id: 3,
    rating: 5,
    content:
      "Harika bir alışveriş deneyimi yaşadım. Ürünler tam istediğim gibi ve çok kaliteli. Kesinlikle tekrar alışveriş yapacağım.",
    customer: {
      name: "Ali Haydar",
      job: "Tekstil Mühendisi",
    },
  },
];

function CustomerTestimonials() {
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
    <div className="my-16 bg-gray-5">
      <div className="custom-container px-8 py-16">
        <div className="mb-8 sm:mb-12 flex items-center justify-between">
          <h2 className="text-lg font-medium sm:text-3xl">
            Popüler Kategoriler
          </h2>

          <div className="flex gap-4">
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
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                <TestimonialItem
                  testimonial={testimonial}
                  key={testimonial.customer.name}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}

export default CustomerTestimonials;
