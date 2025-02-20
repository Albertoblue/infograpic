import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ContrastConcessionInfographic from './components/ContrastConcessionInfographic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter basename="/infograpic">
      <>
        <ContrastConcessionInfographic />
        <div className="bg-blue-500 text-white p-4 rounded-lg">
          Profesora: Raquel Acosta
        </div>
      </>
    </BrowserRouter>
  )
}

export default App

