import { prismaClient } from "@/lib/prisma";
import ProductImage from "../components/product-images";

type ProductDetailsPageProps = {
  params: {
    slug: string;
  };
};

const ProductDetailsPage = async ({ params }: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: { slug: params.slug },
  });

  if (!product) return <h1>Carregando...</h1>;

  return (
    <div>
      <ProductImage imageUrls={product.imageUrls} name={product.name} />
    </div>
  );
};

export default ProductDetailsPage;
