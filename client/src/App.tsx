import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PageRender from './PageRender'
import Header from './components/global/Header'

const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<PageRender />}></Route>
          <Route path="/:page" element={<PageRender />}></Route>
          <Route path="/:page/:slug" element={<PageRender />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
