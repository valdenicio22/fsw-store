import { useCart } from "@/hooks/useCart";
import { Badge } from "./badge";
import { ProductItem } from "./product-item";

export const Cart = () => {
  const { products } = useCart();

  return (
    <div className="flex flex-col gap-8 p-8">
      <Badge>Carrinho</Badge>

      {!products.length && <p>Empty cart!</p>}
      <div className="flex flex-col gap-6">
        {products.map((product) => (
          <div key={product.id} className="flex justify-between">
            <ProductItem product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};
