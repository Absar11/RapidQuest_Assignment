import './App.css'
import GrowthSalesChart from './components/GrowthSalesChart'
import Navbar from './components/Navbar'
import NewCustomersChart from './components/NewCustomerChart'
import SalesChart from './components/SalesChart'

function App() {


  return (
    <>
      {/* <Navbar /> */}
      <div className='main-container'>
        <SalesChart />
        <GrowthSalesChart />
        <NewCustomersChart />
      </div>
    </>
  )
}

export default App
