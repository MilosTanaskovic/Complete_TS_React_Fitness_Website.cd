import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { NavBar } from './components'
import { SelectedPage } from '@/shared/types'



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.HOME)

  return (
    <div className="app bg-gray-20">
      <NavBar 
        selectedPage={setSelectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  )
}

export default App
