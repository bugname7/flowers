"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

type LikeContextType = {
  likes: Product[];
  toggleLike: (product: Product) => void;
};

const LikeContext = createContext<LikeContextType | undefined>(undefined);

export function LikeProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState<Product[]>([]);

  const toggleLike = (product: Product) => {
    setLikes((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  return (
    <LikeContext.Provider value={{ likes, toggleLike }}>
      {children}
    </LikeContext.Provider>
  );
}

export function useLike() {
  const context = useContext(LikeContext);
  if (!context) throw new Error("useLike must be used within LikeProvider");
  return context;
}
