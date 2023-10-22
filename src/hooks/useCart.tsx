import { CartContext } from "@/providers/cart";
import { useContext } from "react";

export const useCart = () => {
  return useContext(CartContext);
};
