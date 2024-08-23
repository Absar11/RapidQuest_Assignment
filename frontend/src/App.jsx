import './App.css';
import './Common/Navbar.css';
import CustomerLifetimeCohorts from './components/CustomerLifetimeCohorts';
import GeographicalDistribution from './components/GeographicalDistribution';
import GrowthSalesChart from './components/GrowthSalesChart';
import Navbar from './Common/Nabar';
import NewCustomersChart from './components/NewCustomerChart';
import RepeatCustomersChart from './components/RepeatCustomersChart';
import SalesChart from './components/SalesChart';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <section id="sales-chart">
          <SalesChart />
        </section>
        <section id="growth-sales-chart">
          <GrowthSalesChart />
        </section>
        <section id="new-customers-chart">
          <NewCustomersChart />
        </section>
        <section id="repeat-customers-chart">
          <RepeatCustomersChart />
        </section>
        <section id="geographical-distribution">
          <GeographicalDistribution />
        </section>
        <section id="customer-lifetime-cohorts">
          <CustomerLifetimeCohorts />
        </section>
      </div>
    </>
  );
}

export default App;
