import './App.css'
import GrowthSalesChart from './components/GrowthSalesChart'
import Navbar from './components/Navbar'
import SalesChart from './components/SalesChart'

function App() {


  return (
    <>
      <Navbar />
      <div className='main-container'>
        <SalesChart />
        <GrowthSalesChart />
      </div>
    </>
  )
}

export default App
