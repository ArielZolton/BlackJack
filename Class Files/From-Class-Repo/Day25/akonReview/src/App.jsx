import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserCard from "./components/UserCard";

const users = [
  { name: "John Doe", email: "john@example.com", image: "https://picsum.photos/id/1/100" },
  { name: "Jane Smith", email: "jane@example.com", image: "https://picsum.photos/id/2/100" },
  { name: "Bob Johnson", email: "bob@example.com", image: "https://picsum.photos/id/3/100" },
];

const App = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <Header />
      <main className="flex-grow flex justify-center items-center p-10 mt-16 mb-16 bg-gray-200">
        <div className="flex gap-8 flex-wrap justify-center">
          {users.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;