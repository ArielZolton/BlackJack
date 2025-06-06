import "./App.css";
import Home from "./pages/Home";
import LoginSignup from "./pages/LoginSignup";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  const path = window.location.pathname;

  return (
    <>
      <Navbar />
      {path === "/" && <Home />}
      {path === "/dashboard" && <Dashboard />}
      {path === "/login" && <LoginSignup />}
    </>
  );
}

export default App;
