import { Button } from "@/components/ui/button";
import { products } from "@/data/ProductDummy";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-10">
        {products.map((product) =>(
            <div key={product.id} className="bg-white rounded-2xl shadow-sm overflow-hidden p-3 m-6">
              <div className="flex flex-row gap-8">
                <div className="overflow-hidden rounded-xl bg-gray-100 w-1/3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col w-2/3">
                  <h1 className="text-2xl font-bold leading-tight">{product.name}</h1>
                  <p className="text-1xl font-semibold text-blue-600 mt-4">
                    Rp{product.price}
                  </p>
                  <Button className="mt-8 w-full md:w-fit">
                    <Link to="#">Checkout</Link>
                  </Button>
                </div>
              </div>
            </div>
        ))}
    </div>
  );
}