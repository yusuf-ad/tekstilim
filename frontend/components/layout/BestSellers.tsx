import { Product } from "@/lib/types";
import ProductCard from "../ProductCard";

const bestProducts = [
  {
    id: 1,
    title: "English Home",
    model: "Air Plus Mikrofiber Yastık Beyaz-gold",
    price: 59.99,
    oldPrice: 99.99,
  },
  {
    id: 2,
    title: "Madame Coco",
    model: "Pamuklu Çift Kişilik Nevresim Takımı",
    price: 149.99,
    oldPrice: 199.99,
  },
  {
    id: 3,
    title: "Karaca Home",
    model: "Bambu Yorgan",
    price: 299.99,
    oldPrice: 399.99,
  },
  {
    id: 4,
    title: "Taç",
    model: "Saten Çift Kişilik Nevresim Takımı",
    price: 249.99,
    oldPrice: 349.99,
  },
  {
    id: 5,
    title: "Yataş",
    model: "Visco Yastık",
    price: 79.99,
    oldPrice: 129.99,
  },
  {
    id: 6,
    title: "Özdilek",
    model: "Pamuklu Tek Kişilik Nevresim Takımı",
    price: 119.99,
    oldPrice: 169.99,
  },
  {
    id: 7,
    title: "Linens",
    model: "Çift Kişilik Pike Takımı",
    price: 89.99,
    oldPrice: 139.99,
  },
  {
    id: 8,
    title: "Sarar",
    model: "Pamuklu Yorgan",
    price: 199.99,
    oldPrice: 299.99,
  },
];

function BestSellers() {
  return (
    <section className="custom-container mb-12 px-8 py-12">
      <h2 className="mb-12 text-center text-lg font-medium sm:text-3xl">
        En Çok Satanlar
      </h2>

      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {bestProducts.map((product: Product, index: number) => (
          <div
            key={product.id}
            className={`${index >= 4 ? "hidden lg:block" : ""}`}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default BestSellers;
