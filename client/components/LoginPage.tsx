import { useAuth0 } from '@auth0/auth0-react'
import '../styles/LoginPage.css'

export default function LoginPage() {
  const { loginWithRedirect } = useAuth0()

  return (
    <div className="LoginPage">
      <header className="Header">WELLCOME TO OUR NEW APP</header>
      <main className="Content">
        <img src="/images/logo.png" alt="Logo" className="Logo" />
        <button className="login" onClick={() => loginWithRedirect()}>
          Login
        </button>
      </main>
      <footer className="Footer">
        © 2024 Hoogle App. All rights reserved.
      </footer>
    </div>
  )
}
