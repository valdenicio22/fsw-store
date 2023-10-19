import { Banner } from "@/components/ui/banner";
import { prismaClient } from "@/lib/prisma";
import Categories from "./components/categories";
import { SliderProductList } from "./components/slider-product-list";

export default async function Home() {
  const offers = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <div className="max-w-[390px]">
      <div className="my-8 px-5">
        <Banner src="/banner-home-01.png" alt="discount banner" />
      </div>
      <div className="px-5">
        <Categories />
      </div>
      <div className="mt-8">
        <SliderProductList products={offers} />
      </div>
    </div>
  );
}
