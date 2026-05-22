import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-100">
      <BrowserRouter>
      <div className="w-full flex gap-4 p-4 justify-center border-b mb-8 shadow-md bg-white">
        <Button asChild variant="ghost">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/products">Products</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/cart">Cart</Link>
        </Button>
      </div>
      
      <Routes>  
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />}>
          <Route path=':productId' element={<ProductDetail />} />
        </Route>
        <Route path='/cart' element={<Cart />} />

      </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
