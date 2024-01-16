import { useEffect, useState } from "react"
import { getAllUsers } from "../../../api/UsersApi.js"
import  UsersCards  from "../UsersCards/UsersCards.tsx"
const UsersList = () => {
    useEffect(() => {

        async function LoadUsers() {
            const res = await getAllUsers()
            setUsers(res.data)
        }
        LoadUsers()

    }, [])

    interface User {
        id: Int16Array;
        username: string;
        email: string;
        phone: string;
        address: string;
        description: string;
    }

    const [users, setUsers] = useState<User[]>([])

    return (
        <>
        {users.map((user, key) =>(
        <div key={key}>
            <UsersCards key={user.username} user={user} />
        </div>
        ))}
        </>
    )
}

export default UsersList