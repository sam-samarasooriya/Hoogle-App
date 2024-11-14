import { Outlet } from "react-router-dom"

interface AuthenticationProps{
  requireAuth: boolean, // does page require auth
  redirect: boolean // redirect if authenticated but auth not required or not authenticated but auth is require
  redirectPath: string // redirect to path
}

export default function AuthenticationPage({requireAuth, redirect, redirectPath}: AuthenticationProps){
  console.log("Authenticating...")
  return (
      <Outlet/>
  )
}