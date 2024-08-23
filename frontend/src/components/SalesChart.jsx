import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import useCommon from '../hooks/useCommon';
import Loader from "../Common/Loader";

// Register the necessary components, including the Filler plugin
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const SalesChart = () => {
    const axiosCommon = useCommon();
    const [salesData, setSalesData] = useState({
        daily: [],
        monthly: [],
        yearly: [],
        quarterly: []
    });
    const [loading, setLoading] = useState(true);
    const [interval, setInterval] = useState('daily'); // Default to 'daily'

    useEffect(() => {
        // Fetch sales data from the API
        const fetchData = async () => {
            try {
                const response = await axiosCommon.get('/sales/all-intervals');
                setSalesData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching sales data:', error);
            }
        };

        fetchData();
    }, [axiosCommon]);

    // Prepare chart data for Line chart
    const prepareChartData = (data, label) => ({
        labels: data.map(item => item._id),
        datasets: [
            {
                label: `${label} Sales`,
                data: data.map(item => item.totalSales),
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true
            }
        ]
    });

    // Chart options
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Total Sales'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Time'
                }
            }
        }
    };

    const handleIntervalChange = (e) => {
        setInterval(e.target.value);
    };

    const currentData = salesData[interval] || [];

    return (
        <>
            {/* <hr style={{ marginTop: "150px" }} /> */}
            {loading ? (
                <Loader />
            ) : (
                <div className="chart-container" style={{ position: 'relative', height: '400px', width: '100%' }}>
                    <h2>Sales Over Time</h2>
                    <div>
                        <label htmlFor="interval-select">Select Interval: </label>
                        <select
                            id="interval-select"
                            value={interval}
                            onChange={handleIntervalChange}
                        >
                            <option value="daily">Daily</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                            <option value="quarterly">Quarterly</option>
                        </select>
                    </div>
                    <Line
                        data={prepareChartData(currentData, interval.charAt(0).toUpperCase() + interval.slice(1))}
                        options={chartOptions}
                    />
                </div>
            )}
        </>
    );
};

export default SalesChart;
