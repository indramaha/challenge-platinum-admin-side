import "./Dashboard.css"
import SideBar from "../Components/SideBar";
import { useEffect, useState } from "react";
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
import axios from "axios";
Chart.register(CategoryScale);

const Dashboard = () => {

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const [carData, setCardata] = useState([]);

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

    useEffect(() => {
        axios
            .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=created_at%3Adesc")
            .then((res) => {
                console.log(res);
                setCardata(res.data.cars);
            })
            .catch((err) => console.log(err.massage));
    }, [])

    return (
        <SideBar>
            <div className="editcar-breadcrumb">
                <div className="editcar-breadcrumb-route">
                    <p>Dashboard</p>
                </div>
                <div className="editcar-breadcrumb-icon-bg">
                    <FiChevronRight size={16} />
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
            

            <div className="month">
                <p>Month</p>
                <div className="butn">
                    <div class="dropdown">
                        <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            June - 2022
                        </a>

                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <button>Go</button>
                </div>

            </div>

            <div className="Dashboard">
                <Bar data={chartData} />
            </div>

            <div className="editcar-title">
                <h4>Dashboard</h4>
            </div>

            <div className="editcar-title">
                <p>List Order</p>
            </div>

            <div className="table">
                <table>
                    <tr>
                        <th>No</th>
                        <th>User Email</th>
                        <th>Car</th>
                        <th>Start Rent</th>
                        <th>Finish Rent</th>
                        <th>Price</th>
                        <th>Category</th>
                    </tr>

                    {
                        !!carData.length
                            ? carData.map((val, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{val.id}</td>
                                        <td>{val.email}</td>
                                        <td>{val.name}</td>
                                        <td>{val.start_rent_at}</td>
                                        <td>{val.finish_rent_at}</td>
                                        <td>{val.price}</td>
                                        <td>{val.category}</td>
                                    </tr>
                                )
                            }) : null
                    }

                </table>
            </div>

        </SideBar>
    );
}

export default Dashboard;