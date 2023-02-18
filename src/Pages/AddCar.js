import {FiChevronRight, FiUpload} from "react-icons/fi"
import Form from 'react-bootstrap/Form';
import "./Addcar.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { API } from "../const/endpoint";
import SideBar from "../Components/SideBar";

const AddCar = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState(null)
    const [category, setCategory] = useState("")
    const navigate = useNavigate()

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

    const handleSaveBtn = () => {
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
            .post(API.POST_NEW_CAR, formData, config)
            .then((ress) => {
                // console.log(ress)
                navigate("/list-car")
            })
            .catch((err) => console.log(err.message))
    }
    return (  
        <SideBar isDboardActive={false} isCars={true}>
            <div className="addcar-section">
                <div>
                    <div className="addcar-breadcrumb">
                        <div className="addcar-breadcrumb-route">
                            <p>Cars</p>
                        </div>
                        <div className="addcar-breadcrumb-icon-bg">
                            <FiChevronRight size={16}/>
                        </div>
                        <div className="addcar-breadcrumb-route">
                            <Link to="/list-car" >
                                <p className="addcar-breadcrumb-route-link-p">List Car</p>
                            </Link>
                        </div>
                        <div className="addcar-breadcrumb-icon-bg">
                            <FiChevronRight size={16}/>
                        </div>
                        <div className="addcar-breadcrumb-route-active">
                            <p>Add New Car</p>
                        </div>
                    </div>
                    <div className="addcar-title">
                        <h4>Add New Car</h4>
                    </div>
                    <div className="addcar-inputsection-bg">
                        <div className="addcar-inputsection">
                            <div className="addcar-inputsection-form">
                                <div className="addcar-inputsection-form-title">
                                    <p>Nama/Tipe Mobil*</p>
                                </div>
                                <div className="addcar-inputsection-form-input-bg">
                                    <input placeholder="Input Nama/Tipe Mobil" type="text" onChange={handleName} required/>
                                </div>
                            </div>
                            <div className="addcar-inputsection-form">
                                <div className="addcar-inputsection-form-title">
                                    <p>Harga*</p>
                                </div>
                                <div className="addcar-inputsection-form-input-bg">
                                    <input placeholder="Input Harga Sewa Mobil" type="number" onChange={handlePrice} required />
                                </div>
                            </div>
                            <div className="addcar-inputsection-form">
                                <div className="addcar-inputsection-form-title">
                                    <p>Foto*</p>
                                </div>
                                <div>
                                    <div className="addcar-inputsection-form-input-bg">
                                        <input placeholder="Upload Foto Mobil" type="file" onChange={handleImage}  required/> <FiUpload size={18}/>
                                    </div>
                                    <div className="addcar-inputsection-form-instruc">
                                        <p>File size max. 2MB</p>
                                    </div>
                                </div>
                            </div>
                            <div className="addcar-inputsection-form">
                                <div className="addcar-inputsection-form-title">
                                    <p>Kategori*</p>
                                </div>
                                <div className="addcar-inputsection-form-select-bg">
                                    <Form.Select onChange={handleCategory}>
                                        <option value="">Pilih Kategori Mobil</option>
                                        <option value="small">2 - 4 people</option>
                                        <option value="Medium">4 - 6 people</option>
                                        <option value="large">6 - 8 people</option>
                                    </Form.Select>
                                </div>
                            </div>
                            <div className="addcar-inputsection-form">
                                <div className="addcar-inputsection-form-title">
                                    <p>Created at</p>
                                </div>
                                <div className="addcar-inputsection-form-date">
                                    <p>-</p>
                                </div>
                            </div>
                            <div className="addcar-inputsection-form">
                                <div className="addcar-inputsection-form-title">
                                    <p>Updated at</p>
                                </div>
                                <div className="addcar-inputsection-form-date">
                                    <p>-</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="addcar-btn">
                    <div className="addcar-btn-cancel">
                        <Link to={'/list-car'}>
                        <button>Cancel</button>
                        </Link>
                    </div>
                    <div className="addcar-btn-save">
                        <button onClick={handleSaveBtn}>Save</button>
                    </div>
                </div>
            </div>
        </SideBar>
        
    );
}
 
export default AddCar;