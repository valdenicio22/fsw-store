import { ProductItem } from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";
import Link from "next/link";
interface ProductListProps {
  products: Product[];
}
export const SliderProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <Link
          href={`/product/${product.slug}`}
          key={product.id}
          className="w-[170px] max-w-[170px]"
        >
          <ProductItem product={computeProductTotalPrice(product)} />
        </Link>
      ))}
    </div>
  );
};
