import Button from "@/components/Button";
import { MoveRight } from "lucide-react";

function CountdownItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center rounded-lg border-2 border-gray-20 p-3 shadow-sm">
      <span className="text-4xl font-bold text-dark-500">{value}</span>
      <span className="font-medium text-primary-600">{label}</span>
    </div>
  );
}

function DealsOfMonth() {
  return (
    <section className="custom-container mb-16 flex max-h-[512px] gap-6 px-8">
      <div className="w-full flex-1">
        <div className="flex h-full flex-col items-start justify-center">
          <h2 className="mb-6 text-5xl font-medium text-dark-500">
            Ayın Fırsatları
          </h2>
          <p className="mb-8 text-xl font-medium text-primary-600">
            En trend tekstil ürünlerimizi uygun fiyatlarla keşfedin ve tarzınızı
            yenileyin. Fırsatlar sınırlı ve süreli, acele edin!
          </p>

          <div className="mb-12 flex gap-6">
            <CountdownItem value="120" label="Days" />
            <CountdownItem value="18" label="Hours" />
            <CountdownItem value="15" label="Mins" />
            <CountdownItem value="10" label="Secs" />
          </div>

          <Button className="flex items-center gap-4 font-medium">
            <p>Ürünleri incele</p>
            <MoveRight absoluteStrokeWidth />
          </Button>
        </div>
      </div>
      <div className="aspect-square w-full flex-1 bg-gray-5 bg-[url('/assets/man.png')] bg-cover bg-center"></div>
    </section>
  );
}

export default DealsOfMonth;
