import { SectionTitle } from "@/components/ui/SectionTitle";
import { prismaClient } from "@/lib/prisma";
import Categories from "./components/categories";
import { PromoBanner } from "./components/promo-banner";
import { SliderProductList } from "./components/slider-product-list";

export default async function Home() {
  const offers = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });
  return (
    <div className="max-w-[390px]">
      <div className="flex flex-col gap-8">
        <div className="px-5">
          <PromoBanner src="/banner-home-01.png" alt="discount banner" />
        </div>
        <div className="px-5">
          <Categories />
        </div>

        <div>
          <SectionTitle>Ofertas</SectionTitle>
          <SliderProductList products={offers} />
        </div>

        <div className="px-5">
          <PromoBanner src="/banner-home-02.png" alt="discount banner" />
        </div>

        <div>
          <SectionTitle>Teclados</SectionTitle>
          <SliderProductList products={keyboards} />
        </div>
      </div>
    </div>
  );
}
