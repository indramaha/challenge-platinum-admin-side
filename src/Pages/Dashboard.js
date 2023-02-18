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
        handelData();
    }, [])

    const handelData = () => {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                access_token: token,
            }
        }
        axios
            .get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=created_at%3Adesc&page=1&pageSize=10", config)
            .then((res) => {
                console.log(res.data.orders);
                setCardata(res.data.orders);
            })
            .catch((err) => console.log(err.massage));
    }

    const handlePagination = (num) => {
        const token = localStorage.getItem('token')
        const config = {
            headers: {
                access_token: token,
            }
        }
        axios
            .get(`https://bootcamp-rent-cars.herokuapp.com/admin/v2/order?sort=created_at%3Adesc&page=${num}&pageSize=10`, config)
            .then((res) => {
                console.log(res.data.orders);
                setCardata(res.data.orders);
            })
            .catch((err) => console.log(err.massage));
    }

    return (
        <SideBar isDboardActive={true} isCars={false}>
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
                    <div className="dropdown">
                        <a className="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            June - 2022
                        </a>

                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
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
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>User Email</th>
                            <th>Car</th>
                            <th>Start Rent</th>
                            <th>Finish Rent</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>

                    {
                        !!carData.length ? carData.map((val, key) => {
                            return (
                                <tbody key={key}>
                                    <tr >
                                        <td>{val.id}</td>
                                        <td>{val.User.email}</td>
                                        <td>{val.Car?.name}</td>
                                        <td>{val.start_rent_at}</td>
                                        <td>{val.finish_rent_at}</td>
                                        <td>{val.Car?.price}</td>
                                        <td>{val.Car?.category}</td>
                                    </tr>
                                </tbody>

                            )
                        }) : null
                    }

                </table>
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination position-absolute top-100 start-50 translate-middle">
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li class="page-item" onClick={() => handlePagination(1)}><a class="page-link" >1</a></li>
                    <li class="page-item" onClick={() => handlePagination(2)}><a class="page-link" >2</a></li>
                    <li class="page-item" onClick={() => handlePagination(3)}><a class="page-link" >3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="pagein">
                <div className="limit">
            <label>Limit</label>
            <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    10
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            </div>

            <div className="jump">
            <label>Jump to page</label>
            <div class="dropdown">
                <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    10
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            </div>

            <div className="go">
                <button>Go</button>
            </div>
            </div>

        </SideBar>

        
        
    );
}

export default Dashboard;