import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages0/Home'
import Login from './pages0/Login'
import Signup from './pages0/Signup'
import LimitedListing from './pages0/LimitedListing'
import StoriesListing from './pages0/StoriesListing'
import NotFound from './pages/error/NotFound'
import SingleStory from './pages0/SingleStory'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/limited-listing" element={<LimitedListing />} />
      <Route path="/dashboard" element={<StoriesListing />} /> {/* do not modify this route!! */}
      <Route path="/stories/:id" element={<SingleStory />} />
      <Route path="/spaces/:id" element={<StoriesListing />} />
      <Route path="/404not-found" element={<NotFound/>}/>


      <Route path="/*" element={<NotFound />} />

    </Routes>
  )
}

export default App
