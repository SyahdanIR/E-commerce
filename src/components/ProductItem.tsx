import { useProduct } from "@/hooks/useProduct";
import type { Product } from "@/types/Product";
import { useState } from "react";
import { Button } from "./ui/button";

const ProductItem = ({ product }: { product: Product }) => {
  const { updateProduct, deleteProduct, loading } = useProduct();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const handleUpdate = () => {
    updateProduct(product.id, title, price, description);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div className="flex flex-col">
          <p className="text-sm text-gray-300 mt-4">Title</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border"
            disabled={loading}
          />
          <p className="text-sm text-gray-300 mt-4">Price</p>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="border"
            disabled={loading}
          />
          <p className="text-sm text-gray-300 mt-4">Description</p>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border"
            disabled={loading}
          />
          <Button onClick={handleUpdate} disabled={loading} className="mt-4">
            Update
          </Button>
          <Button onClick={() => deleteProduct(product.id)} className="mt-4">Delete</Button>
        </div>
      ) : (
        <div className="grid grid-cols-3 mt-4">
          <div  
            key={product.id}
            className="bg-white dark:bg-slate-900 rounded-lg shadow-sm"
          >
            <div className="p-3 flex flex-col flex-1">
              <h2 className="font-medium line-clamp-2 min-h-12 text-center">
                {product.title}
              </h2>
              <p className="text-sm text-gray-300 mt-1">
                Price: Rp.{product.price}
              </p>
              <p className="text-sm text-gray-200 mt-1">
                {product.description}
              </p>
              <Button onClick={() => setIsEditing(true)} disabled={loading} className="mt-4">Edit</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
