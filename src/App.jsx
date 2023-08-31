import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemsList from './components/ItemsList'
import ItemsContext from './components/ItemsContext'
import Layout from './components/Layout'
import CharacterPage from './components/CharacterPage'

function App() {

  return (
    <ItemsContext>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ItemsList />} />
            <Route path='character' element={<CharacterPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ItemsContext>
  )
}

export default App
