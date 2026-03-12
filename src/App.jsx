import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import LinkedInPosts from './pages/LinkedInPosts'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/linkedin-posts" element={<LinkedInPosts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App