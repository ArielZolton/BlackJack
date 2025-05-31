import { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState("");

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-xl font-bold text-center">
        {isLogin ? "Login" : "Sign Up"}
      </h2>
      {isLogin ? <Login setMessage={setMessage} /> : <Signup setMessage={setMessage} setIsLogin={setIsLogin} />}
      <p className="text-red-500 text-center mt-2">{message}</p>
      <button
        onClick={() => setIsLogin(!isLogin)}
        className="text-sm text-blue-500 mt-3 block text-center"
      >
        {isLogin ? "Don't have an account? Sign up!" : "Already have an account? Login!"}
      </button>
    </div>
  );
}

export default LoginSignup;