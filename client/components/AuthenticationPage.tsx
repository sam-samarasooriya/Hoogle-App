import { useAuth0 } from "@auth0/auth0-react"
import { Outlet } from "react-router-dom"

interface AuthenticationProps{
  requireAuth: boolean, // does page require auth
  redirect: boolean // redirect if authenticated but auth not required or not authenticated but auth is require
  redirectPath: string // redirect to path
}

export default function AuthenticationPage({requireAuth, redirect, redirectPath}: AuthenticationProps){
  const auth0 = useAuth0()

  if (auth0.isLoading)
    return 'Loading...'

  const shouldRedirect = redirect && ((requireAuth && !auth0.isAuthenticated) || (!requireAuth && auth0.isAuthenticated))

  if (shouldRedirect){
    window.location.href = redirectPath
    return 'Redirecting...'
  }


  return (
      <Outlet/>
  )
}