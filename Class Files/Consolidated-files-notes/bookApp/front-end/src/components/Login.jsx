import { useState } from "react";
import { loginUser } from "../utils/api.js";

function Login({ setMessage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(email, password);

    if (response.error) {
      setMessage(response.error);
    } else {
      localStorage.setItem("user", JSON.stringify({ loggedIn: true, id: response.userId }));
      window.location.pathname = "/dashboard";
    }

    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Login
      </button>
    </form>
  );
}

export default Login;