"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Flower = {
  id: number;
  name: string;
  slug: string;
  image: string;
};

type LikeContextType = {
  likes: Flower[];
  toggleLike: (flower: Flower) => void;
};

const LikeContext = createContext<LikeContextType | undefined>(undefined);

export function LikeProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState<Flower[]>([]);

  useEffect(() => {
    const storedLikes = localStorage.getItem("likes");
    if (storedLikes) {
      setLikes(JSON.parse(storedLikes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  const toggleLike = (flower: Flower) => {
    setLikes((prev) =>
      prev.some((item) => item.id === flower.id)
        ? prev.filter((item) => item.id !== flower.id)
        : [...prev, flower]
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
