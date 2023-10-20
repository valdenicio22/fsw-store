import { Badge } from "@/components/ui/badge";
import { ProductItem } from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import Link from "next/link";

const SalesProducts = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <div className="my-8 px-5">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base"
        variant="outline"
      >
        Ofertas
      </Badge>
      <div className="mt-8 grid grid-cols-2 gap-4">
        {deals.map((product) => (
          <Link href={`/product/${product.slug}`} key={product.id}>
            <ProductItem product={computeProductTotalPrice(product)} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SalesProducts;
