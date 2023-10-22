"use client";

import { ProductWithTotalPrice } from "@/helpers/product";
import { ReactNode, createContext, useState } from "react";

export interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  totalPrice: number;
  subTotal: number;
  totalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
}

export const CartContext = createContext({} as ICartContext);

interface CartContextProviderProps {
  children: ReactNode;
}
export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addProductToCart = (product: CartProduct) => {
    const productExists = cart.some((cp) => cp.id === product.id);

    if (productExists) {
      const upadatedCartList = cart.map((cp) =>
        cp.id === product.id
          ? { ...cp, quantity: cp.quantity + product.quantity }
          : cp,
      );

      setCart(upadatedCartList);
      return;
    }
    setCart((prev) => [...prev, product]);
  };
  return (
    <CartContext.Provider
      value={{
        products: cart,
        addProductToCart,
        totalPrice: 0,
        subTotal: 0,
        totalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
