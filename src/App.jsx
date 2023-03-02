import { HashRouter } from 'react-router-dom'
import BeforeRouter from './components/BeforeRouter'
import GetRoutes from './router'

function App() {
  return (
    <HashRouter>
      <BeforeRouter>
        <GetRoutes />
      </BeforeRouter>
    </HashRouter>
  )
}

export default App
