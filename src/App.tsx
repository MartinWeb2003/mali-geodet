import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Flashcards from './pages/Flashcards'
import FlashcardLearn from './pages/FlashcardLearn'
import FlashcardBrowse from './pages/FlashcardBrowse'
import Test from './pages/Test'
import PdfReader from './pages/PdfReader'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/kartice" element={<Flashcards />} />
          <Route path="/kartice/ucenje" element={<FlashcardLearn />} />
          <Route path="/kartice/pregled" element={<FlashcardBrowse />} />
          <Route path="/test" element={<Test />} />
          <Route path="/pdf" element={<PdfReader />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
