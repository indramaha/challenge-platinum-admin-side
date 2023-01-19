import "./EditCar.css"
import {FiChevronRight, FiUpload} from "react-icons/fi"
import Form from 'react-bootstrap/Form';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../Components/SideBar";

const EditCar = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState("")
    const navigate = useNavigate()
    const [car, setCar] = useState({})

    const {id} = useParams()

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    // useEffect(() => {
    //     const token = localStorage.getItem("token")
    //     const config = {
    //         headers : {
    //             access_token: token
    //         },
    //     }

    //     axios
    //         .get(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, config)
    //         .then((ress) => {
    //             setCar(ress.data)
    //             console.log(ress.data)
    //         })
    //         .catch((err) => console.log(err.message))
    // },[id])

    const handleSaveEditBtn = () => {
        const token = localStorage.getItem("token")
        const config = {
            headers : {
                access_token: token
            },
        }

        const formData = new FormData()
        formData.append("name", name)
        formData.append("price", price)
        formData.append("image", image)
        formData.append("category", category)

        axios
            .put(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`, formData, config)
            .then((ress) => {
                // console.log(ress)
                navigate("/cars")
            })
            .catch((err) => console.log(err.message))
    }
    return (
        <SideBar isDboardActive={false} isCars={true}>
            <div className="editcar-section">
                <div>
                    <div className="editcar-breadcrumb">
                        <div className="editcar-breadcrumb-route">
                            <p>Cars</p>
                        </div>
                        <div className="editcar-breadcrumb-icon-bg">
                            <FiChevronRight size={16}/>
                        </div>
                        <div className="editcar-breadcrumb-route">
                            <Link to="/cars" >
                                <p className="editcar-breadcrumb-route-link-p">List Car</p>
                            </Link>
                        </div>
                        <div className="editcar-breadcrumb-icon-bg">
                            <FiChevronRight size={16}/>
                        </div>
                        <div className="editcar-breadcrumb-route-active">
                            <p>Edit Car</p>
                        </div>
                    </div>
                    <div className="editcar-title">
                        <h4>Edit Car</h4>
                    </div>
                    <div className="editcar-inputsection-bg">
                        <div className="editcar-inputsection">
                            <div className="editcar-inputsection-form">
                                <div className="editcar-inputsection-form-title">
                                    <p>Nama/Tipe Mobil*</p>
                                </div>
                                <div className="editcar-inputsection-form-input-bg">
                                    <input placeholder={car.name} defaultValue={car.name} type="text" onChange={handleName} required/>
                                </div>
                            </div>
                            <div className="editcar-inputsection-form">
                                <div className="editcar-inputsection-form-title">
                                    <p>Harga*</p>
                                </div>
                                <div className="editcar-inputsection-form-input-bg">
                                    <input placeholder={car.price} defaultValue={car.price} type="number" onChange={handlePrice} required />
                                </div>
                            </div>
                            <div className="editcar-inputsection-form">
                                <div className="editcar-inputsection-form-title">
                                    <p>Foto*</p>
                                </div>
                                <div>
                                    <div className="editcar-inputsection-form-input-bg">
                                        <input placeholder="Upload Foto Mobil" type="file" onChange={handleImage}  required/> <FiUpload size={18}/>
                                    </div>
                                    <div className="editcar-inputsection-form-instruc">
                                        <p>File size max. 2MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="editcar-inputsection-form">
                                <div className="editcar-inputsection-form-title">
                                    <p>Kategori*</p>
                                </div>
                                <div className="editcar-inputsection-form-select-bg">
                                    <Form.Select onChange={handleCategory}>
                                        <option value="">Pilih Kategori Mobil</option>
                                        <option value="small">2 - 4 people</option>
                                        <option value="Medium">4 - 6 people</option>
                                        <option value="large">6 - 8 people</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="editcar-inputsection-form">
                                <div className="editcar-inputsection-form-title">
                                    <p>Created at</p>
                                </div>
                                <div className="editcar-inputsection-form-date">
                                    <p>-</p>
                                </div>
                            </div>
                            <div className="editcar-inputsection-form">
                                <div className="editcar-inputsection-form-title">
                                    <p>Updated at</p>
                                </div>
                                <div className="editcar-inputsection-form-date">
                                    <p>-</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="editcar-btn">
                    <div className="editcar-btn-cancel">
                        <button>Cancel</button>
                    </div>
                    <div className="editcar-btn-save">
                        <button onClick={handleSaveEditBtn}>Save</button>
                    </div>
                </div>
            </div>
        </SideBar>
    );
}

export default EditCar;