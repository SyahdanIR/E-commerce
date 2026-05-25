import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      username === "syahdan" &&
      email === "syahdan@gmail.com" &&
      password === "password"
    ) {
      login("token_123");
      navigate("/products");
    } else {
        return setErrorMsg("Username atau Password salah");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white shadow-md rounded-lg p-8 dark:bg-slate-900"
      >
        <h1 className="text-2xl text-center font-bold mb-4">Login</h1>
        <Label htmlFor="username" className="mt-4">
          Username
        </Label>
        <Input
          type="text"
          id="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="mt-2 p-2 border-2 rounded-md"
        />
        <Label htmlFor="email" className="mt-4">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-2 p-2 border-2 rounded-md"
        />
        <Label htmlFor="password" className="mt-4">
          Password
        </Label>
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-2 p-2 border-2 rounded-md"
        />
        {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}
        <Button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full"
        >
          Login
        </Button>
      </form>
    </div>
  );
}
