import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Houses from './pages/Houses'
import House from './pages/House'
import HouseEdit from './pages/HouseEdit'
import HouseCreate from './pages/HouseCreate'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'
import WithNav from './components/WithNav'
import WithoutNav from './components/WithoutNav'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<WithNav />}>
          <Route path="/houses" element={<Houses />} />
          <Route path="/house/:id" element={<House />} />
          <Route path="/housecreate" element={<HouseCreate />} />
          <Route path="/houseedit" element={<HouseEdit />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>

      {/* <Routes>
        <Route element={<WithoutNav />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
          <Route path="/=example" element={<Example />} />
        </Route>
      </Routes> */}
    </BrowserRouter>
  )
}

export default App
