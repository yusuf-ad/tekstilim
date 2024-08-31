import CustomCarousel from "@/components/CustomCarousel";
import { CarouselItem } from "@/components/ui/carousel";
import InstagramStory from "./InstagramStory";

const instagramStories = [
  "/assets/man.png",
  "/assets/man.png",
  "/assets/man.png",
  "/assets/man.png",
];

function InstagramStories() {
  return (
    <div className="custom-container px-8 py-12 ">
      <CustomCarousel title="Instagram Hikayelerimiz" centeredTitle={true}>
        {[...instagramStories, ...instagramStories].map((story, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <InstagramStory />
          </CarouselItem>
        ))}
      </CustomCarousel>
    </div>
  );
}

export default InstagramStories;
