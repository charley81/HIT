import { Intro } from './pages'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/register" element={<div>Register</div>} />
        <Route path="/intro" element={<Intro />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
