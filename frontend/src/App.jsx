import './App.css'
import Navbar from './components/Navbar'
import SalesChart from './components/SalesChart'

function App() {


  return (
    <>
      <Navbar />
      <div className='main-container'>
        <SalesChart />
      </div>
    </>
  )
}

export default App
