import { Intro } from './pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AddDrink, AllDrinks, Info, Profile, SharedLayout } from './pages/home'
import { Error, Register } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>home</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
