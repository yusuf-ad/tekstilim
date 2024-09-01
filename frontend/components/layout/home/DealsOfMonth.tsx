import Button from "@/components/Button";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import ProductImg from "@/public/assets/hero-img.webp";
import Countdown from "@/components/Countdown";

function DealsOfMonth() {
  // Set your target date here
  // 27 days later from now
  const targetDate = new Date(
    Date.now() + 1000 * 60 * 60 * 24 * 27
  ).toISOString();

  return (
    <section className="custom-container my-20 flex max-h-[512px] gap-6 px-8">
      <div className="w-full flex-1">
        <div className="flex h-full flex-col items-center sm:items-start justify-center">
          <h2 className="mb-6 text-4xl md:text-5xl font-medium text-dark-500 text-center sm:text-start">
            Ayın Fırsatları
          </h2>
          <p className="mb-8 text-lg md:text-xl font-medium text-center sm:text-start text-primary-600">
            En trend tekstil ürünlerimizi uygun fiyatlarla keşfedin ve tarzınızı
            yenileyin. Fırsatlar sınırlı ve süreli, acele edin!
          </p>

          <Countdown targetDate={targetDate} />

          <Button className="flex items-center gap-4 font-medium">
            <p>Ürünleri incele</p>
            <MoveRight absoluteStrokeWidth />
          </Button>
        </div>
      </div>

      <div className="hidden sm:block relative aspect-square w-full flex-1 bg-gray-5">
        <Image
          src={ProductImg}
          className="object-cover w-full h-full"
          fill
          alt="deals of the month image"
        />
      </div>
    </section>
  );
}

export default DealsOfMonth;
