import './App.css'
import Login from './pages/login/indexLogin'
import Dashboard from './pages/dashboard/indexDashboard'
import Game from './pages/game/indexGame'

import {Routes,Route,BrowserRouter,Navigate} from 'react-router-dom'
import ProtectedRoutes from './pages/ProtectedRoutes'
import { UserProvider } from './Context/user'

function App() {

  return (
    <>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='dashboard' element={<Dashboard/>}/>
            <Route path='game' element={<Game/>}/>
          </Route>
          <Route path='/' element={<Navigate to={'/login'}/>}/>
        </Routes>
      </BrowserRouter>
    </UserProvider>
    </>
  )
}

export default App
