import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ScrollToTop from './components/ScrollToTop'
import HomeSection from './pages/Home.jsx'
import AboutSection from './pages/About.jsx'
import ComponentSection from './pages/Component.jsx'
import ArchitectureSection from './pages/Architecture.jsx'
import EventSection from './pages/Events.jsx'
import JournalSection from './pages/Journal.jsx'
import GallerySection from './pages/Gallery.jsx'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/collections" element={<ComponentSection />} />
        <Route path="/gallery" element={<GallerySection />} />
        <Route path="/architecture" element={<ArchitectureSection />} />
        <Route path="/events" element={<EventSection />} />
        <Route path="/journal" element={<JournalSection />} />
      </Routes>
    </Router>
  )
}

export default App
