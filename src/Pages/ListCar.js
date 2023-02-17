import SimbolWaktu from '../Assets/Images/SimbolWaktu.png' 
import SimbolUser from '../Assets/Images/SimbolUser.png' 
import SimbolBreadcrumb from '../Assets/Images/Breadcrumb.png'
import SimbolMobil from '../Assets/Images/SimbolMobil.png'
import React, { useEffect, useState } from "react";
import axios from "axios";
import {API} from "../const/endpoint";
import SideBar from "../Components/SideBar";
import { Link } from "react-router-dom";
import "./ListCar.css"
import { Breadcrumb, Button } from 'react-bootstrap';
import { convertToRupiah } from '../utils/convertRupiah';
//Modals//

import Modal from 'react-bootstrap/Modal';



const ListCar = () => {

    const [modalShow, setModalShow] = React.useState(false);

    const [car, setCar] = useState([])
    const [err, setError] = useState ()

    useEffect (() => {
        getData();
    }, [])

    const getData = () => {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                access_token: token,
            }
        };
    
        axios
            .get(API.GET_CARS_ADMIN, config)
            .then((ress) => {
                console.log(ress.data.cars)
                setCar(ress.data.cars)
            })
            .catch((err) => console.log(err.message))
    }


    
    //Fungsi Kategori Small//
    const handleClickFilterSmall = () => {
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?category=small`)
        .then ( (res) => {
            setCar(res.data.cars);
        })
        .catch((err) => console.log (err.message))
    }

      //Fungsi Kategori Medium//
      const handleClickFilterMedium = () => {
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?category=Medium`)
        .then ( (res) => {
            setCar(res.data.cars);
        })
        .catch((err) => console.log (err.message))
    }

       //Fungsi Kategori Large//
       const handleClickFilterLarge = () => {
        axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?category=large`)
        .then ( (res) => {
            setCar(res.data.cars);
        })
        .catch((err) => console.log (err.message))
    }

    console.log (car)
    


return (  
    <SideBar isDboardActive={false} isCars={true}>
        <img className='simbol-breadcrumb' src={SimbolBreadcrumb}/>
        <div className='judul-list-car'> 
            <div className='judul-list-car-card'>List Car </div>
            <div>
                <Link to={'/add-new-car'}> 
                <Button> {'+ Add New Car'} </Button>
                </Link>
            </div>
        </div>
        <div className='list-car-button-category'>
            <div> 
                <Button onClick={getData}> ALL </Button>
            </div>
            <div> 
                <Button onClick={handleClickFilterSmall} > 2-3 people </Button>
            </div>
            <div> 
                <Button onClick={handleClickFilterMedium}> 4-6 people </Button>
            </div>
            <div> 
                <Button onClick={handleClickFilterLarge}> 6-8 people </Button>
            </div>
        </div>

        <div className="discovery-card-bg">
                { !!car.length ? car.map((item,i) => {
                        return(
                              
                            <div className="discovery-card" key={i}>
                                <div className="discovery-card-img-bg">
                                    <img src={item.image} alt={item.name} className="discovery-card-img"/>
                                </div>
                                <div>
                                    <p className="discovery-card-name-p">{item.name}</p>
                                </div>
                                <div>
                                    <p className="discovery-card-price-p">Rp {convertToRupiah(item.price)} / hari</p>
                                </div>
                                
                                <div className="discovery-card-category">
                                    <div>
                                        <img className='simbol-user' src={SimbolUser} />
                                    </div>
                                    <div> 
                                        {(() => {
                                            if (item.category == 'small') {
                                            return (
                                                <div>
                                                    <p>2-4 orang</p>
                                                </div>
                                            )
                                            } else if (item.category == 'Medium') {
                                            return (
                                                <div>
                                                    <p>4-6 orang</p>
                                                </div>
                                            )
                                            } else if (item.category == 'large') {
                                            return (
                                                <div>
                                                    <p>6-8 orang</p>
                                                </div>
                                            )
                                            }
                                        })()}
                                    </div>
                                </div>

                                <div className='discovery-card-waktu-update'>
                                    <div>  <img className='simbol-waktu' src={SimbolWaktu} />  </div>  
                                    <div> <p className="discovery-card-updateAt"> Updated at {new Date(item.updatedAt).toLocaleDateString()} </p> </div>
                                </div>

                                <div className="discovery-card-button-bg">
                                    
                                    <div>
                                        {/* <button onClick={() => handleDelete(item.id)} className="discovery-card-button-delete">Delete</button> */}
                                        <Button className='discovery-card-button-delete' variant="primary" onClick={() => setModalShow(true)}>
                                            Delete
                                        </Button>

                                        <MyVerticallyCenteredModal
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                            id={item.id}
                                            getData={getData}
                                        />
                                    </div>
                                    <div>
                                        <Link to={`/edit-car/${item.id}`}> 
                                        <button className="discovery-card-button-edit">Edit</button>
                                        </Link>
                                    </div>
                                </div>
                                
                            </div>
                            
                        )
                    }):(<h1>Loading...</h1>)
                    
                }
            </div>
    </SideBar>

)
}


//MODALS//
function MyVerticallyCenteredModal(props) {


    const [err, setError] = useState ()

    const handleDelete = async () => {
        const token = localStorage.getItem("token");
        const config = {
            headers: {
                access_token: token,
            }
        };
        try {
            const res = await axios
            .delete(`https://bootcamp-rent-cars.herokuapp.com/admin/car/${props.id}`,
                config)
            props.onHide ()
            props.getData()
            window.alert ('Data Berhasil Dihapus')
            
            } catch (error) {
                setError(error.response.data.message)
                }
            }
        
         
    return (
       
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        
        <Modal.Body>
        <center><div> 
          <img src={SimbolMobil}></img>
        </div></center>
          <center><h4>Menghapus Data Mobil</h4></center>
          <center><p>
          Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?
          </p></center>
        </Modal.Body>

       
       <div className='modal-footer'> 
            <div className='button-ya'> 
                <Button onClick={handleDelete}>Ya</Button>    
            </div>  
            <div className='button-tidak'>    
                <Button onClick={props.onHide}>Tidak</Button>  
            </div>    
        </div>
        
      
          
      </Modal>
  
    )
  }



export default ListCar