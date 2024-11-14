import { useAuth0 } from "@auth0/auth0-react"

export default function UsersPage(){
  const {logout} = useAuth0()
  console.log("LMAO")
  return <div>
    <button onClick={() => logout()}>Logout</button>
  </div>
}