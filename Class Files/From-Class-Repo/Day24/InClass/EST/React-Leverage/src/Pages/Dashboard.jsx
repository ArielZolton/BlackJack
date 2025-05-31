import UserCard from "../Components/UserCard"

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <UserCard username="Alice Smith" email="alice@gmail.com" balance={1000}/>
            <UserCard username="Bob Johnson" email="bob@gmail.com" balance={2000}/>
        </div>
    )
}