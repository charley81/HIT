import { Intro } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AddDrink, AllDrinks, Info, Profile, SharedLayout } from './pages/home'
import { Error, Register } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<AllDrinks />} />
          <Route path="info" element={<Info />} />
          <Route path="add-drink" element={<AddDrink />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
