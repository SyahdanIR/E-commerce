import type { Product } from "@/types/Product";
import { useState } from "react";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children } : {children: React.ReactNode}) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [idCounter, setIdCounter] = useState(1);

    const createProduct = (title: string, price: number, description: string) => {
        setLoading(true);
        const newProduct: Product = {
            id: idCounter,
            title: title,
            price: price,
            description: description,
        };
        setProducts([...products, newProduct]);
        setIdCounter((prev) => prev + 1);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }
    const updateProduct = (id: number, title: string, price: number, description: string) => {
        setLoading(true);
        setProducts((prev) => prev.map((products) => (products.id === id ? 
        {...products, title, price, description} : products)));
        setTimeout(() => {
            setLoading(false);
        }, 1000);

    }
    const deleteProduct = (id: number) => {
        setProducts((prev) => prev.filter((product) => product.id !== id));

    }

    return (
        <ProductContext.Provider value={{
            products,
            createProduct,
            updateProduct,
            deleteProduct,
            loading
        }}>
            {children}
        </ProductContext.Provider>
    );

}