import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  }

  console.log("product", product);

  const totalDiscount =
    Number(product.basePrice) * (product.discountPercentage / 100);

  console.log("totalDiscount", totalDiscount);

  return {
    ...product,
    totalPrice: Number(product.basePrice) - totalDiscount,
  };
};
