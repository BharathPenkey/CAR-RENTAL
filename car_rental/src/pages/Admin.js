

import React ,{useEffect,useState} from 'react';
// import data from '../data/data';
// import AdminNav from '../components/AdminNav';
import "../styles/Admin.css";
// import axios from 'axios';
import {useNavigate} from 'react-router-dom'
 

import { Link } from 'react-router-dom';

export function Main(main){
        return main
     }

function Admin(){
    const navigate=useNavigate();
   const EditCar = (ID)=>{
    Main(ID)
    // <Link to=`/editcar:${ID}`></Link>
     navigate(`/editcar/:${ID}`)   
}
    const [data,setData]=useState([
        // {
        // name:'',
        // type:'',
        // model:'',
        // milage:'',
        // Image:'',
        // date:''
        // }
    ]);
    const all_cars=[];
    useEffect( ()=>{
         fetch("https://localhost:5000/carRental/car/addcar/admin") //http://localhost:5000/carRental/car/addcar
        .then(res=>res.json())
        .then(data=>{setData(data)
             })
        .catch((err)=>{
            console.log(err)
        })
       
        
   
     } ,[])
     let k=0;
     for(let i=data.length-1;i>=0;i--){
        all_cars[k]=data[i];
        k++
     }
     return(
        <>
         <div>
            <h3><b>welcome admin</b></h3>

                    <div className='acd'>
                   <h3 className='cars'><b>cars</b></h3>
                        <Link to="/addcar"><button className='ac'>Add car</button></Link>
                   </div>

                        <section style={{ width: "100vw" }}></section>
                 { all_cars.map((item, index) =>{
                    return(
        
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
                        ) }
                   ) }
                   </div>
                </>
           )
           }
            
export default Admin



