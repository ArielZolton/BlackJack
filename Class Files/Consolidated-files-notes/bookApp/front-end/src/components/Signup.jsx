import { useState } from "react";
import { signupUser } from "../utils/api.js";

function Signup({ setMessage, setIsLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await signupUser(username, email, password);

    if (response.error) {
      setMessage(response.error);
    } else {
      setMessage("Signup successful! Please log in.");
      setIsLogin(true);
    }

    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="p-2 border rounded"
      />
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
        Sign Up
      </button>
    </form>
  );
}

export default Signup;