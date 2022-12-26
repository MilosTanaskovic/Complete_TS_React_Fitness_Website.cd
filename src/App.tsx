import { useState, useEffect } from 'react'
import './App.css'
import { NavBar } from './components'
import { SelectedPage } from '@/shared/types'
import { Home } from '@/pages';



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.HOME);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.screenY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.HOME);
      } else {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="app bg-gray-20">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home 
        setSelectedPage={setSelectedPage} 
      />
    </div>
  )
}

export default App
