// import React from 'react';
// import data from '../data/data';
// import "../styles/Admin.css"
 

// import { Link } from 'react-router-dom';


// const Admin = () => {
//     return (
//         <>
//         <div classname="header">
            
//         </div>
//         <div>
//             <h3><b>welcome admin</b></h3>

//                    <div className='acd'>
//                    <h3 className='cars'><b>cars</b></h3>
//                    <Link to="/addcar"><button className='ac'>Add car</button></Link>
//                 </div>

//             <section style={{ width: "100vw" }}>
               

//                 {
//                     data.map((item, index) => {
                       
//                         return (
//                             <div key={index} className='cards'>

//                                 <div className='image_box'>
//                                     <img src={item.img} alt={item.name} />
//                                 </div>
//                                 <p className='seat'>{item.seater} Persons</p>

//                                 <div className='details'>

//                                     <h3>{item.name}</h3>
//                                     <p className='rate'>{item.rateperkm}Rs/km</p>

//                         </div>
//                         <div>
//                             <p className='availableDate'>{item['available Date']}</p>
//                         </div>
 
//                          </div>
//                         ) }
//                    ) }
//                    </section>
//                    </div>
//                 </>
//            )
//                         }
            
// export default Admin

import React ,{useEffect,useState} from 'react';
import data from '../data/data';
import "../styles/Admin.css";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
 

import { Link } from 'react-router-dom';

 export function Main(main){
    return main
 }
const Admin = () => { 
  const [carData,setCarData] = useState([])
const navigate=useNavigate();
   const EditCar = (ID)=>{
    Main(ID)
    // <Link to=`/editcar:${ID}`></Link>
     navigate(`/editcar/:${ID}`)   
}
 useEffect(()=>{
    axios.get("http://localhost:5000/carRental/car/dataadded")
    .then((resp)=>{
        setCarData(resp.data)
        console.log(data)
    })
 },[carData.length])
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
                {/* addding functionality to get images */}
                {data.map((item, index) => (
                            <div key={index} className='cards'>

                                <div className='image_box'>
                                    <img src={item.img} alt={item.name} navigate="/admin"/>
                                </div>
                                <p className='seat'>{item.seater} 6 Persons</p>

                                <div className='details'>

                                    <h3>{item.name}</h3>
                                    <p className='rate'>{item.rateperkm}Rs/km</p>

                                </div>
                                <div>
                                    <p className='availableDate'>{item['available Date']}</p>
                                </div>

                            </div>
                        )
                    )

                }
                 { carData.map((item, index) => (
                            <div key={index} className='cards'>

                                <div className='image_box'>
                                
                                    <img src={item.img} alt={item.name}
                                    onClick={()=>{EditCar(item._id)}} />
                                </div>
                                <p className='seat'>6 Persons</p>

                                <div className='details'>

                                    <h3>{item.name}</h3>
                                    <p className='rate'>{item.rateperkm}Rs/km</p>

                                </div>
                                <div>
                                    <p className='availableDate'>{item['available Date']}</p>
                                </div>

                            </div>
                        )
                    )
                }
            </section>
        </div >
        </>
    )
}
export default Admin;
