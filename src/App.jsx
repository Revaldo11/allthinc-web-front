import { Outlet } from 'react-router-dom'
import NavItems from './components/NavItems'
import './assets/sass/Mystyle.scss'

function App() {

  return (
    <>
      <NavItems />
      <Outlet />
    </>
  )
}

export default App
