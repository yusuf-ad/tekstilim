import Button from "@/components/Button";
import { MoveRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative mb-12 flex h-[calc(100vh-64px)] md:h-auto md:min-h-[70vh] items-center bg-[url('/assets/hero-img.webp')] bg-cover bg-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-65"></div>
      {/* content */}
      <div className="item custom-container relative px-8">
        <div className="max-w-2xl p-4 md:p-8 text-white-500">
          <h3 className="mb-6 text-2xl md:text-3xl font-semibold text-white-500">
            Özel İndirim
          </h3>

          <h1 className="mb-5 text-5xl md:text-6xl font-bold text-white-500 leading-tight">
            Yatak Odası Ürünleri
          </h1>

          <p className="mb-12 text-xl md:text-2xl font-medium text-white-500">
            %40&apos;A VARAN İNDİRİM
          </p>

          <p className="mb-12 text-lg md:text-xl font-medium leading-8 text-gray-20">
            Yatak odası ürünlerimizde harika indirimler keşfedin. Yatak odanızı
            lüks bir kaçış noktasına dönüştürmek için premium koleksiyonumuzu
            inceleyin.
          </p>

          <Button className="flex items-center gap-4 bg-white-500 font-medium">
            <p className="text-dark-500 ">Şimdi Alışveriş Yap</p>
            <MoveRight className="text-dark-500" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
