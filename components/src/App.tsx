import { useState } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { Link } from "react-router-dom"
import "./App.css"
import Home from "./home/Home"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
