import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About RapidQuest</h3>
                    <p>We are a leading Full-Stack software development and integration company specializing in AI-powered applications and solutions. We leverage cutting-edge artificial intelligence technologies to create tailored software solutions that enhance efficiency, deliver personalized experiences, and drive innovation across industries</p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#sales-chart">Sales Chart</a></li>
                        <li><a href="#growth-sales-chart">Growth Sales</a></li>
                        <li><a href="#new-customers-chart">New Customers</a></li>
                        <li><a href="#repeat-customers-chart">Repeat Customers</a></li>
                        <li><a href="#geographical-distribution">Geographical Distribution</a></li>
                        <li><a href="#customer-lifetime-cohorts">Customer Lifetime Cohorts</a></li>
                        <li><a href="#contact-us">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: siddiqui.mr10@gmail.com</p>
                    <p>Phone: 9026 27 7066</p>
                </div>
                <div className="footer-section social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Absar Ahmad. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
