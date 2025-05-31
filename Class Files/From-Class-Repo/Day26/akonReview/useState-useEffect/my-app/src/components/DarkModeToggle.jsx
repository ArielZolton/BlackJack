import { useState } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState({ darkMode: false });

  const toggleDarkMode = () => {
    setTheme(prevTheme => (
      {
      ...prevTheme,
      darkMode: !prevTheme.darkMode
    }
  
  ));
  };

  return (
    <div className={`p-6 rounded-lg shadow-md ${theme.darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <h2 className="text-xl font-bold">Object State Example</h2>
      <p>Dark Mode is {theme.darkMode ? "Enabled 🌙" : "Disabled ☀️"}</p>
      <button 
        className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4" 
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}