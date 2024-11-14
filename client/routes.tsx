import { createRoutesFromElements, Route } from 'react-router-dom'
import AuthenticationPage from './components/AuthenticationPage'
import LoginPage from './components/LoginPage'
import UsersPage from './components/UsersPage'
import SingleUserPage from './components/SingleUserPage'
export default createRoutesFromElements(
  <Route>
    <Route path='users' element={<AuthenticationPage requireAuth={true} redirect={true} redirectPath='/'/>}>
      <Route path='' element={<UsersPage/>}/>
      <Route path=':id' element={<SingleUserPage/>}/>
    </Route>
    <Route path='' element={<AuthenticationPage requireAuth={false} redirect={true} redirectPath='/users'/>}>
      <Route index element={<LoginPage/>}/>
    </Route>
  </Route>
)
