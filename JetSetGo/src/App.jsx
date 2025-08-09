import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/navbar/nav'
import Trip from './components/Trip/Trip'

function App() {


  return (
    <div className = 'text-sm md:text-lg'>
      <Home/>
      <Navbar/>
      <Trip/>
    </div>
  )
}

export default App