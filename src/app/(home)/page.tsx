import { SectionTitle } from "@/components/ui/SectionTitle";
import { prismaClient } from "@/lib/prisma";
import Categories from "./components/categories";
import { PromoBanner } from "./components/promo-banner";
import { SliderProductList } from "./components/slider-product-list";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
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
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });
  return (
    <div className="flex flex-col gap-8 py-8">
      <div className="px-5">
        <PromoBanner
          src="/banner-home-01.png"
          alt="Até 55% de desconto esse mês!"
        />
      </div>

      <div className="px-5">
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <SliderProductList products={deals} />
      </div>
      <div className="px-5">
        <PromoBanner
          src="/banner-home-02.png"
          alt="Até 55% de desconto em mouses!"
        />
      </div>

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <SliderProductList products={keyboards} />
      </div>

      <div className="px-5">
        <PromoBanner
          src="/banner-home-03.png"
          alt="Até 55% de desconto em mouses!"
        />
      </div>

      <div>
        <SectionTitle>Mouses</SectionTitle>
        <SliderProductList products={mouses} />
      </div>
    </div>
  );
}
