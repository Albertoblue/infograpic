import { useState } from 'react'
import ContrastConcessionInfographic from './components/ContrastConcessionInfographic'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContrastConcessionInfographic />
      <div className="bg-blue-500 text-white p-4 rounded-lg">
      Profesora: Raquel Acosta
    </div>
    </>
  )
}

export default App
