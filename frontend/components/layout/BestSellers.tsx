import { Product } from "@/lib/types";
import ProductCard from "../ProductCard";

const bestProducts = [
  {
    id: 1,
    title: "English Home",
    model: "Air Plus Mikrofiber Yastık Beyaz-gold",
    curPrice: 59.99,
    oldPrice: 99.99,
  },
  {
    id: 2,
    title: "Madame Coco",
    model: "Pamuklu Çift Kişilik Nevresim Takımı",
    curPrice: 149.99,
    oldPrice: 199.99,
  },
  {
    id: 3,
    title: "Karaca Home",
    model: "Bambu Yorgan",
    curPrice: 299.99,
    oldPrice: 399.99,
  },
  {
    id: 4,
    title: "Taç",
    model: "Saten Çift Kişilik Nevresim Takımı",
    curPrice: 249.99,
    oldPrice: 349.99,
  },
  {
    id: 5,
    title: "Yataş",
    model: "Visco Yastık",
    curPrice: 79.99,
    oldPrice: 129.99,
  },
  {
    id: 6,
    title: "Özdilek",
    model: "Pamuklu Tek Kişilik Nevresim Takımı",
    curPrice: 119.99,
    oldPrice: 169.99,
  },
  {
    id: 7,
    title: "Linens",
    model: "Çift Kişilik Pike Takımı",
    curPrice: 89.99,
    oldPrice: 139.99,
  },
  {
    id: 8,
    title: "Sarar",
    model: "Pamuklu Yorgan",
    curPrice: 199.99,
    oldPrice: 299.99,
  },
];

function BestSellers() {
  return (
    <section className="custom-container px-8 py-12">
      <h2 className="mb-8 sm:mb-12 text-center text-lg font-medium sm:text-3xl">
        En Çok Satanlar
      </h2>

      <div className="grid grid-cols-2 gap-4 gap-y-8 md:gap-y-12 md:gap-8 md:grid-cols-3 lg:grid-cols-4">
        {bestProducts.map((product: Product, index: number) => (
          <div
            key={product.id}
            className={`${index >= 6 ? "hidden lg:block" : ""}`}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSellers;
