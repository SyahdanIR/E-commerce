import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "@/service/api";

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(
    null,
  );
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <h1 className="mb-4 p-3 mt-2 font-semibold text-2xl text-center bg-white dark:bg-slate-900 border">
        PRODUCTS
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {loading && <p>Loading...</p>}
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-slate-900 rounded-lg shadow-sm overflow-hidden flex flex-col"
          >
            <div className="p-3 flex flex-col flex-1">
              <img
                src={product.image}
                alt="image"
                className="w-full h-48 object-cover"
              />
              <h2 className="font-medium line-clamp-2 min-h-12">
                {product.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Price: {product.price}
              </p>
              <ButtonGroup>
                <Button asChild variant="ghost">
                  <Link to={product.id.toString()} className="text-blue-500">
                    View Details
                  </Link>
                </Button>
              </ButtonGroup>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}
