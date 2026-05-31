import ProductForm from "@/components/ProductForm";
import ProductList from "@/components/ProductList";

export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl">Tambah Product</h1>
      <div>
        <ProductForm />
      </div>
      <ProductList />
    </div>
  );
}