import { useState } from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/Body/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer gretting="Bienvenido a la pagina como estas" />
    </>
  )
}

export default App
