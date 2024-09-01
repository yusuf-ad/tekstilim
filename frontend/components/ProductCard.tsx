"use client";

import { Product } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import ProductImg from "@/public/assets/hero-img.webp";
import Label from "./Label";
import { FaRegHeart } from "react-icons/fa";

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="col-span-1">
      <Link href={"/"}>
        <div className="relative bg-gray-200 aspect-[9/10] border hover:border-tertiary-600 group/image overflow-hidden">
          <div className="h-full w-full overflow-hidden">
            <Image
              className="h-full w-full object-cover group-hover/image:scale-105 transition-transform duration-300"
              src={ProductImg}
              fill
              alt="product image"
            />
          </div>

          <div className="hidden group-hover/image:block">
            <button className="p-2 md:p-3 absolute top-2 right-2 text-xl text-primary-400 hover:text-primary-900 bg-white-500 rounded-full text-center">
              <FaRegHeart className="ml-[2px]" />
            </button>

            <button
              onClick={(e) => {
                e.preventDefault();
                alert("Sepete eklendi");
              }}
              className="hidden group-hover/image:block group/button"
            >
              <Label
                className="group-hover/button:underline"
                title="Sepete ekle"
              />
            </button>
          </div>
        </div>

        <div className="group/product mt-4">
          <h3 className="group-hover/product:underline group-hover/product:underline-offset-4 mb-1 text-xl font-medium text-primary-900">
            {product.title}{" "}
          </h3>
          <p className="mb-2 font-medium text-primary-600">{product.model}</p>

          <div className="flex flex-col sm:flex-row sm:items-center">
            <p className="text-lg font-medium">₺ {product.curPrice} </p>
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
