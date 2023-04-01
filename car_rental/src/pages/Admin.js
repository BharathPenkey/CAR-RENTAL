
import React, { useEffect, useState } from 'react';
import Data from '../Data/Data';
import "../styles/Admin.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import EditCar from '../pages/EditCar'

import { Link } from 'react-router-dom';

export function Main(main) {
    return main
}
const Admin = () => {
    const [carData, setCarData] = useState(false)
    const [data, setdata] = useState([])
    const [singlecar, setSinglecar] = useState({
        carname: "", type: "", model: "", milage: "", perkm: "", description: "", cardetails: "", details: "", _id: ""
    })

    const navigate = useNavigate();
    const EditCardetails = (ID) => {
        const { carname, type, model, milage, perkm, description, cardetails, details, _id } = ID
        setSinglecar({
            carname: carname, type: type, model: milage, milage, perkm: perkm, description: description, cardetails: description, details: details, _id: _id
        })
        setCarData(true)
    }


    //     Main(ID)
    //     // <Link to=`/editcar:${ID}`></Link>
    //      navigate(`/editcar/:${ID}`)   
    // }
    useEffect(() => {
        axios.get("http://localhost:5000/carRental/car/dataadded")
            .then((res) => {
                setdata(res.data)
                console.log(data)
            })
        // .then(data =>setCarData(data))
    }, [data.length])
    return (
        <>
            <div></div>
            {
                !carData &&
                  
    <div> 
        <h3><b>welcome admin</b></h3>

               <div className='acd'>
               <h3 className='cars'><b>cars</b></h3>
               <Link to="/addcar"><button className='ac'>Add car</button></Link>
            </div>

        <section style={{ width: "100vw" }}>
            {/* addding functionality to get images */}
            {Data.map((item, index) => (
                        <div key={index} className='cards'>

                            <Link to="/editcar"><div className='image_box'>
                                <img src={item.img} alt={item.name} navigate="/editcar"/>
                            </div></Link>
                            <p className='seat'>{item.seater} 6 Persons</p>

                            <div className='details'>

                                <h3>{item.name}</h3>
                                <p className='rate'>{item.rateperkm}Rs/km</p>

                            </div>
                            <div>
                                <p className='availableDate'>available date:{item['available Date']}</p>
                            </div>

                        </div>
                    )
                )}
             { data.map((item, index) => (
                        <div key={index} className='cards'>

                            <div className='image_box'>
                            
                                <img src={item.img} alt={item.name}
                                onClick={()=>{EditCardetails(item)}}navigate="/editcar" />
                            </div>
                            <p className='seat'>6 Persons</p>

                            <div className='details'>

                                <h3>{item.name}</h3>
                                <p className='rate'>{item.rateperkm}Rs/km</p>

                            </div>
                            <div>
                                <p className='availableDate'>available date:{item.availablefrom}</p>
                            </div>

                        </div>
                    )
                ) }
        </section>
    </div >
}
{
    cardetails &&
    <EditCar singlecar={singlecar}/>
}
        </>
    )
}
export default Admin;
