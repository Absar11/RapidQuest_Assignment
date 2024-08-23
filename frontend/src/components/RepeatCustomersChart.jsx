import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import useCommon from '../hooks/useCommon';
import Loader from "../Common/Loader"

const RepeatCustomersChart = () => {
    const axiosCommon = useCommon();
    const [repeatCustomersData, setRepeatCustomersData] = useState({
        daily: [],
        monthly: [],
        quarterly: [],
        yearly: []
    });
    const [loading, setLoading] = useState(true);
    const [interval, setInterval] = useState('daily'); // Default to 'daily'

    useEffect(() => {
        const fetchRepeatCustomersData = async () => {
            try {
                const response = await axiosCommon.get('/customers/repeat-customers');
                setRepeatCustomersData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching repeat customers data:', error);
            }
        };

        fetchRepeatCustomersData();
    }, [axiosCommon]);

    // Prepare chart data function
    const prepareChartData = (data, label) => {
        return {
            labels: data.map(item => item._id.day || item._id.month || item._id.quarter || item._id.year),
            datasets: [
                {
                    label: `${label} Repeat Customers`,
                    data: data.map(item => item.purchaseCount),
                    borderColor: 'rgba(54, 162, 235, 1)',
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    fill: true,
                },
            ],
        };
    };

    // Chart options configuration
    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Repeat Customers'
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

    const currentData = repeatCustomersData[interval] || [];

    return (
        <>
            <hr />
            {loading ? (
                <Loader />
            ) : (
                <div className="chart-container">
                    <h2>Repeat Customers Over Time</h2>

                    <div>
                        <label htmlFor="interval-select">Select Interval: </label>
                        <select
                            id="interval-select"
                            value={interval}
                            onChange={handleIntervalChange}
                        >
                            <option value="daily">Daily</option>
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="yearly">Yearly</option>
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

export default RepeatCustomersChart;
