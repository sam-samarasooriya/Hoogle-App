import { useAuth0 } from "@auth0/auth0-react"

export default function LoginPage(){
  const {loginWithRedirect} = useAuth0()

  return <button style={{padding: '10px', border: '1px solid grey'}} onClick={() => loginWithRedirect()}>Login</button>
}