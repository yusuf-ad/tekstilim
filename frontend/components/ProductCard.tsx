import { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import ProductImg from "@/public/assets/hero-img.webp";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="col-span-1">
      <Link className="group" href={"/"}>
        <div className="relative bg-gray-200 aspect-square border hover:border-tertiary-600 group overflow-hidden">
          <div className="h-full w-full overflow-hidden">
            <Image
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              src={ProductImg}
              fill
              alt="product image"
            />
          </div>
        </div>

        <div className="mt-4">
          <h3 className="group-hover:underline underline-offset-4 mb-1 text-xl font-medium text-primary-900">
            {product.title}{" "}
          </h3>
          <p className="mb-2 font-medium text-primary-600">{product.model}</p>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <p className="text-lg font-medium">₺ {product.price} </p>
            <p className="ml-2 font-medium text-gray-500 line-through">
              ₺ {product.oldPrice}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
