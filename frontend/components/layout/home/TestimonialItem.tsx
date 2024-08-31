import { Testimonial } from "@/lib/types";
import { Star } from "lucide-react";

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

export default TestimonialItem;
