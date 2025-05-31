import BookFetcher from "../components/BookFetcher";
import BooksList from "../components/BookList";
import UsersList from "../components/UserList";

function Home() {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col gap-6">
      <BookFetcher />
      <UsersList />
      <BooksList />
    </div>
  );
}

export default Home;
