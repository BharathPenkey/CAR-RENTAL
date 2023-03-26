import React from 'react';
import data from '../data/data';
import '../styles/CarBooking.css'

import { Link } from 'react-router-dom';


const CarBooking = () => {
    return (
        <div>
            {/* <Header /> */}
            {/* <hr /> */}
            <span> Origin namee &gt; Destination namee &gt; 12 june-2019  -  13-june-2019
                <Link to="/Quote"><button className='modify-btn'>Modify</button></Link>
            </span>
            {/* <hr /> */}

            <section className='thirdNavbar'>

                <select className='dropdown'>
                    <option>
                        Car Type
                    </option>
                    <option>
                        XUV
                    </option>
                    <option>
                        UV
                    </option>
                    <option>
                        All
                    </option>
                </select>


                <button className='btns'>Setting</button>
                <button className='btns'>Milage</button>
                <button className='btns'>Other</button>


            </section>
            <hr />



            <section style={{ width: "100%" }}>

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


                                    <Link to='/BookingDetails'><button className='btn'>{item.Book}</button></Link>
                                </div>

                            </div>
                        )
                    })
                }
            </section>
        </div >
    )
}
export default CarBooking