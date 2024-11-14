import { useParams } from "react-router-dom"

export default function UserPage(){
  const params = useParams()

  return <div>User Page for user {params.id}</div>
}