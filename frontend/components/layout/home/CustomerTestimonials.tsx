import CustomCarousel from "@/components/CustomCarousel";
import { CarouselItem } from "@/components/ui/carousel";
import TestimonialItem from "./TestimonialItem";

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
  return (
    <section className="my-16 bg-gray-5">
      <div className="custom-container px-8 py-16">
        <CustomCarousel title="Müşteri Yorumları">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 pb-6 select-none"
            >
              <TestimonialItem
                testimonial={testimonial}
                key={testimonial.customer.name}
              />
            </CarouselItem>
          ))}
        </CustomCarousel>
      </div>
    </section>
  );
}

export default CustomerTestimonials;
