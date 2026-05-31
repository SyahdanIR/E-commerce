import { useProduct } from "@/hooks/useProduct";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const { products, loading } = useProduct();
  return (
    <div>
      {loading && <p>Loading...</p>}
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}
