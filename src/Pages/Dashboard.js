import "./EditCar.css"
import SideBar from "../Components/SideBar";
import { useState } from "react";
import { Bar } from "react-chartjs-2"
import { orderList } from "../Components/Orderdata";
import {
    CategoryScale,
    LinearScale,
    BarElement,
  } from 'chart.js';

import { Chart } from 'chart.js/auto';
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
Chart.register(CategoryScale);

const Dashboard = () => {

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const [chartData, setChartData] = useState({
       labels: labels,
        datasets: [
            {
                label: "chart",
                data: orderList.map((data) => data.date),
                backgroundColor: 'blue',
            }
        ]
    })
   
    return (
        <SideBar>
            <div className="editcar-breadcrumb">
                        <div className="editcar-breadcrumb-route">
                            <p>Dashboard</p>
                        </div>
                        <div className="editcar-breadcrumb-icon-bg">
                            <FiChevronRight size={16}/>
                        </div>
                        <div className="editcar-breadcrumb-route">
                            <Link to="/dashboard" >
                                <p className="editcar-breadcrumb-route-link-p">Dashboard</p>
                            </Link>
                        </div>
                    </div>

                    <div className="editcar-title">
                        <h4>Rented Car Data Visualization</h4>
                    </div>

            <div className="Dashboard">
                <Bar data={chartData}/>
            </div>
           
        </SideBar>
    );
}

export default Dashboard;