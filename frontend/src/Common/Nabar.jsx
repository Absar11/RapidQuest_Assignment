import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <a href="#" className="navbar-brand">RapidQuest</a>
            <ul className="navbar-links">
                <li><a href="#sales-chart">Sales Chart</a></li>
                <li><a href="#growth-sales-chart">Growth Sales</a></li>
                <li><a href="#new-customers-chart">New Customers</a></li>
                <li><a href="#repeat-customers-chart">Repeat Customers</a></li>
                <li><a href="#geographical-distribution">Geographical Distribution</a></li>
                <li><a href="#customer-lifetime-cohorts">Customer Lifetime Cohorts</a></li>
            </ul>
            <button className="btn contact-btn">Contact Us</button>
        </nav>
    );
}

export default Navbar;
