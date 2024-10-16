import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import ThemeToggle from './component/ThemeToggle'
import SearchForm from './component/SearchForm'
import Gallery from './component/Gallery'

function App() {
 

  return (
    <>
     <main>
      <ThemeToggle/>
      <h1 >Gallery Project</h1>
      <SearchForm/>
      <Gallery/>
     </main>
    </>
  )
}

export default App
