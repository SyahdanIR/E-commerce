import { useState } from "react";
import { Input } from "./ui/input";
import { useProduct } from "@/hooks/useProduct";
import { Button } from "./ui/button";

export default function ProductForm() {
const [title, setTitle] = useState("");
const [price, setPrice] = useState("");
const [description, setDescription] = useState("");
const {createProduct, loading} = useProduct();

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if(!title.trim() || !price.trim() || !description.trim()) {
          alert("Please fill in all fields");
          return;
      }
      createProduct(title, parseFloat(price), description);
      setTitle("");
      setPrice("");
      setDescription("");
    }
  return (
    <form onSubmit={handleSubmit}>
        <Input 
        type="text"
        value={title}
        id="title" 
        placeholder="Name"
        disabled={loading}
        onChange={(e) => setTitle(e.target.value)}
        className="mt-4 border rounded p-2"
         />
         <Input 
        type="number"
        value={price}
        id="price" 
        placeholder="Price"
        disabled={loading}
        onChange={(e) => setPrice(e.target.value)}
        className="mt-4 border rounded p-2"
         />
         <Input 
        type="description" 
        value={description}
        id="description"
        placeholder="Description"
        disabled={loading}
        onChange={(e) => setDescription(e.target.value)}
        className="mt-4 border rounded p-2"
         />
         <Button type="submit" className="mt-4 bg-blue-500 dark:bg-slate-900 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full">Submit</Button>
    </form>
  );
}