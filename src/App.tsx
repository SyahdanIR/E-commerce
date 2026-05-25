import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import { AuthProvider } from "./context/AuthProvider";
import { useAuth } from "./hooks/useAuth";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./lib/privateRoute";
import ThemeToggle from "./components/ui/ThemeToggle";

function Header() {
  const { token, logout } = useAuth();
  return (
    <div className="w-full flex gap-4 p-4 justify-center border-b mb-8 shadow-md bg-white dark:bg-slate-900">
      {token && (
      <Button asChild variant="ghost">
        <Link to="/dashboard">Dashboard</Link>
      </Button>
      )}
      <Button asChild variant="ghost">
        <Link to="/">Home</Link>
      </Button>
      <Button asChild variant="ghost">
        <Link to="/products">Products</Link>
      </Button>
      <Button asChild variant="ghost">
        <Link to="/cart">Cart</Link>
      </Button>

      {token ? (
        <Button asChild variant="destructive" onClick={logout}>
          <Link to="/login">Logout</Link>
        </Button>
      ) : (
        <Button asChild variant="ghost">
          <Link to="/login">Login</Link>
        </Button>
      )
      }
      <ThemeToggle />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-slate-700">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/dashboard" element={
              <PrivateRoute>
              <Dashboard />
              </PrivateRoute>
              } />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />}>
              <Route path=":productId" element={<ProductDetail />} />
            </Route>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
