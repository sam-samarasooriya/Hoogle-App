import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getInsultsByUserId, addInsult } from "../apis/insults";

interface User {
  id: number;
  user: string;
  profile_picture: string;
  bio: string;
}

interface Insult {
  id: number;
  insult: string;
  insultee_id?: number;
  insulter_id?: number;
}

export default function SingleUserPage() {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [insults, setInsults] = useState<Insult[]>([]);
  const [newInsult, setNewInsult] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Fetch user data
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`/api/v1/users/${id}`);
        if (!response.ok) throw new Error("Failed to fetch user");
        const data = await response.json();
        setUser(data);
        setError(null);
      } catch (err) {
        setError("Unable to load user");
        console.error("Error fetching user:", err);
      }
    }
    fetchUser();
  }, [id]);

  // Fetch insults and filter only those targeted at the user
  useEffect(() => {
    async function fetchInsults() {
      try {
        const insultsData = await getInsultsByUserId(Number(id));
        // eslint-disable-next-line no-console
        const targetedInsults = insultsData.filter((insult) => insult.insultee_id === Number(id));
        setInsults(targetedInsults);
      } catch (err) {
        setError("Unable to load insults");
        console.error("Error fetching insults:", err);
      }
    }
    fetchInsults();
  }, [id]);

  // Handle adding a new insult
  async function handleAddInsult() {
    if (!newInsult) return;
    try {
      const newInsultId = await addInsult(newInsult, Number(id), 0);

      console.log("New Insult ID:", newInsultId);

      if (newInsultId) {
        setInsults((prevInsults) => [
          ...prevInsults,
          { id: newInsultId, insult: newInsult, insultee_id: Number(id), insulter_id: 0 },
        ]);
        setNewInsult("");
      } else {
        setError("Failed to get insult ID from server");
      }
    } catch (err) {
      setError("Failed to add insult" + err);
      console.log(err);
    }
  }

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

          <h3>Insults Targeted at {user.user}</h3>
          <ul>
            {insults.length > 0 ? (
              insults.map((insult) => (
                <li key={insult.id}>{insult.insult}</li>
              ))
            ) : (
              <p>No insults found for this user.</p>
            )}
          </ul>

          <h3>Add a New Insult</h3>
          <textarea
            value={newInsult}
            onChange={(e) => setNewInsult(e.target.value)}
            placeholder="Type a new insult..."
          />
          <button onClick={handleAddInsult}>Submit</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
