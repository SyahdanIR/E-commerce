import { Link, useParams } from "react-router-dom";
import { products } from "@/data/ProductDummy";
import { Button } from "@/components/ui/button";

export default function productDetail() {
  const { productId } = useParams();
  const product = products.find((item) => item.id === Number(productId));
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-10">
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="overflow-hidden rounded-xl bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-100 object-cover"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-sm text-gray-500 mb-2">Product</p>

            <h1 className="text-3xl font-bold leading-tight">{product.name}</h1>

            <p className="text-2xl font-semibold text-blue-600 mt-4">
              Rp{product.price}
            </p>

            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Description</h2>

              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <Button className="mt-8 w-full md:w-fit">
              <Link to="#">Add to Cart</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
