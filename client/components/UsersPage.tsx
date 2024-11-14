import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface User {
  id: number
  user: string
  profile_picture: string
  bio: string
}

export default function UsersPage() {
  const { logout } = useAuth0()
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)

  // Fetch users from the backend API when the component mounts
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch("/api/v1/users")
        if (!response.ok) throw new Error("Failed to fetch users")
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError("Unable to load users")
        console.error("Error fetching users:", err)
      }
    }

    fetchUsers()
  }, [])

  return (
    <div>
      <button onClick={() => logout()}>Logout</button>
      <h2>Users</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div>
              <img src={user.profile_picture} alt={`${user.user}'s profile`} width="50" />
              <h3>{user.user}</h3>
              <p>{user.bio}</p>
              <Link to={`/users/${user.id}`}>View Profile</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
