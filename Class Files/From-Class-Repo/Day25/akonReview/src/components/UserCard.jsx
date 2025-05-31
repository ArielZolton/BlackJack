const UserCard = ({ name, email, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-72 flex flex-col items-center border border-gray-300 transform transition duration-300 hover:scale-105">
      <img className="rounded-full w-24 h-24 border-4 border-blue-500" src={image} alt={name} />
      <h3 className="font-bold mt-4 text-xl text-gray-700">{name}</h3>
      <p className="text-gray-600">{email}</p>
    </div>
  );
};

export default UserCard;