import React, { useState } from 'react';
import data from '../data/data';
import "../styles/Admin.css"
import axios from 'axios'
import { useEffect } from 'react';
 

import { Link } from 'react-router-dom';


const Admin = () => {
    const [data, setdata] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:5000/carRental/car/carDetails")
        .then((resp)=>{
          setdata(resp.data)
          console.log(data)
        })
      },[data.length])
    return (
        <>
        <div classname="header">
            
        </div>
        <div>
            <h3><b>welcome admin</b></h3>

                   <div className='acd'>
                   <h3 className='cars'><b>cars</b></h3>
                   <Link to="/addcar"><button className='ac'>Add car</button></Link>
                </div>

            <section style={{ width: "100vw" }}>
               

                {
                    data.map((item, index) => {
                       
                        return (
                            <div key={index} className='cards'>

                                <div className='image_box'>
                                    <img src={item.img} alt={item.name} />
                                </div>
                                <p className='seat'>{item.seater} Persons</p>

                                <div className='details'>

                                    <h3>{item.name}</h3>
                                    <p className='rate'>{item.rateperkm}Rs/km</p>

                                </div>
                                <div className='fare-btn'>
                                    <p className='fare'>{item['fare']}</p>
                                    <p className='availableDate'>{item['available Date']}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </section>
        </div >
        </>
    )
}
export default Admin;