
import React, { useEffect, useState } from 'react';
import Data from '../data/data';
import "../styles/Admin.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import EditCar from './EditCar'
import { Link } from 'react-router-dom';
import { useAdminCarContext } from '../hooks/useAdminCarContext';



const Admin = () => {
    const {cars, dispatch} = useAdminCarContext()
    useEffect(() => {
        const fetchcars = async () => {
            const response = await fetch('/carRental/car/adminpageCars')
            const json = await response.json()
            if(response.ok){
              dispatch({type : 'SET_ADMIN_CAR', payload : json})
            }
        
        }
        fetchcars()
      
     }, [dispatch])

    const [data, setdata] = useState([])
    const navigate = useNavigate();

    return (
        <>          
    <div> 
        <h3><b>welcome admin</b></h3>

               <div className='acd'>
               <h3 className='cars'><b>cars</b></h3>
               <Link to="/addcar"><button className='ac'>Add car</button></Link>
            </div>

        <section style={{ width: "100vw" }}>
            {/* addding functionality to get images */}
          
            
             { cars && cars.map((item, index) => {
                return(
                    <Link to='/editcar'>
                        <div key={index} className='cards'>

                            <div className='image_box'>
                            
                                <img src={item.image} alt={item.name}
                                navigate="/editcar" />
                            </div>
                            <p className='seat'>{item.type} seater</p>

                            <div className='details'>

                                <h3>{item.carname}</h3>
                                <p className='rate'>{item.perkm}Rs/km</p>

                            </div>
                            <div>
                                <p className='availableDate'>available date:{item.availablefrom} to {item.availabletill}</p>
                            </div>

                        </div>
                        </Link>
                )}
             )
                }
             
                   
        </section>
    </div >

        </>
    )
}

export default Admin;
