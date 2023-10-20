import { SliderProductList } from "@/components/ui/slider-product-list";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";
import { ProductImage } from "./components/product-images";
import { ProductInfo } from "./components/product-info";
import { SectionTitle } from "@/components/ui/SectionTitle";

type ProductDetailsPageProps = {
  params: {
    slug: string;
  };
};

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: { slug: params.slug },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: params.slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return <h1>Carregando...</h1>;

  return (
    <div className="flex flex-col gap-8">
      <ProductImage imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />

      <div>
        <SectionTitle>Produtos Recomendados</SectionTitle>
        <SliderProductList products={product.category.products} />
      </div>
    </div>
  );
};

export default ProductDetailsPage;
