import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

interface User {
  id: number
  user: string
  profile_picture: string
  bio: string
}

export default function SingleUserPage() {
  const { id } = useParams<{ id: string }>()
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`/api/v1/users/${id}`)
        if (!response.ok) throw new Error("Failed to fetch user")
        const data = await response.json()
        setUser(data)
      } catch (err) {
        setError("Unable to load user")
        console.error("Error fetching user:", err)
      }
    }

    fetchUser()
  }, [id])

  return (
    <div>
      <h2>User Profile</h2>
      
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user ? (
        <div>
          <img
            src={user.profile_picture || '/default-profile-pic.png'}  // Default image if profile_picture is not available
            alt={`${user.user}'s profile`}
            width="100"
          />
          <h3>{user.user}</h3>
          <p>{user.bio}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
