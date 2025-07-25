import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from './pages/HomePage'
import Createpage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<Createpage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
