import './App.css'
import GeographicalDistribution from './components/GeographicalDistribution'
import GrowthSalesChart from './components/GrowthSalesChart'
import Navbar from './components/Navbar'
import NewCustomersChart from './components/NewCustomerChart'
import RepeatCustomersChart from './components/RepeatCustomersChart'
import SalesChart from './components/SalesChart'

function App() {


  return (
    <>
      {/* <Navbar /> */}
      <div className='main-container'>
        <SalesChart />
        <GrowthSalesChart />
        <NewCustomersChart />
        <RepeatCustomersChart />
        <GeographicalDistribution />
      </div>
    </>
  )
}

export default App
