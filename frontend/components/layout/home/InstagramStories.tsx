import SliderButton from "@/components/SliderButton";
import clsx from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import ProductImg from "@/public/assets/hero-img.webp";

const instagramStories = [
  "/assets/man.png",
  "/assets/man.png",
  "/assets/man.png",
  "/assets/man.png",
];

function InstagramStories() {
  return (
    <div className="custom-container px-8 py-12 ">
      <div className="flex items-center mb-8 sm:mb-12">
        <h2 className="flex-grow text-center text-lg font-medium sm:text-3xl">
          Instagram Hikayelerimiz
        </h2>

        <div className="flex gap-4 ml-auto">
          <SliderButton icon={<ArrowLeft size={20} />} />
          <SliderButton icon={<ArrowRight size={20} />} active={true} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">
        {instagramStories.map((story, index) => (
          <Link
            href="/"
            key={index}
            className={clsx(
              `col-span-1 relative aspect-square bg-gray-5 border hover:border-tertiary-600 group overflow-hidden group`,
              {
                "hidden lg:block": index >= 2,
              }
            )}
          >
            <Image
              src={ProductImg}
              className="object-cover w-full h-full"
              fill
              alt="deals of the month image"
            />

            <div className="flex items-center justify-center h-14 w-14 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white-500">
              <span className="text-3xl group-hover:scale-105 transition-transform duration-300">
                <FaInstagram />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default InstagramStories;
