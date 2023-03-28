import { Route, Routes } from 'react-router-dom'

import Navigation from 'src/pages/Navigation'
import { Home, Characters, Episodes, Lacations } from './pages/contentPages'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters' element={<Characters />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/locations' element={<Lacations />} />
      </Routes>
    </>
  )
}

export default App
