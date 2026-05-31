import type { Product } from "@/types/Product";
import { createContext } from "react";

export type ProductContextType = {
    products: Product[];
    createProduct: (title: string, price: number, description: string) => void;
    updateProduct: (id: number, title: string, price: number, description: string) => void;
    deleteProduct: (id: number) => void;
    loading: boolean;
}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);