import React from 'react'
import "../styles/EditBooking.css";
import { Link } from 'react-router-dom';


const EditBooking = () => {
  return (


    <div className='booking-box'>

      <section className='left-box'>

        <div>
          <h3 className='title3' >Edit Booking Details</h3>
        </div>

        <div>
          <div className='mid-div'>

            <div>
              <p>Car Name</p>
              <p>Car Number</p>

            </div>

            <div>
              <h3>Toyota Innova 6 seater</h3>
              <p>KA 37 BB 9999</p>

            </div>

            <div className='mini-3rd-div-img'>
              <img src='https://images.unsplash.com/photo-1441148345475-03a2e82f9719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='photu' />
            </div>

          </div>

        </div>

        <hr />

        <div>
          <div className='mid-div'>

            <div>
              <p>Origin</p>
              <p>Destination</p>
              <p>Start Date</p>
              <p>End Date</p>
            </div>

            <div>
              <p>Banglore</p>
              <p>Mysore</p>
              <p>16-June-2019</p>
              <p>17-June-2019</p>
            </div>

            <div className='mini-3rd-div-img'>
              <img src='https://media.istockphoto.com/id/1189064346/photo/city-map-with-pin-pointers-3d-rendering-image.jpg?s=1024x1024&w=is&k=20&c=-3POKT2aEewXDl6xt1jppyucu2rnu_RNNXSIolTDzlo=' alt='photu' />
            </div>

          </div>

        </div>
        <hr />

        <div className='bottom-div'>

          <div>
            <p>Booking ID </p>
            <p>Booking Date</p>
            <p>Booking Time</p>

          </div>
          <div>
            <p>GOYSEB </p>
            <p>19aPRIL-2023</p>
            <p>8:00 PM</p>

          </div>

        </div>

        <hr />

        <button className='cancel-btn'> Cancel </button>

        
      </section>

      <section className='right-box'>

        <div>

          <h3 className='title2'>Payment Details</h3>
        </div>

        <div>
          <div className='price'>
            <p>Price per km</p>
            <p>20/km</p>
          </div>

          <div className='pricing'>
            <p>Pricing</p>
            <p>2000rs</p>
          </div>

          <div className='tax'>
            <p>Tax Charges</p>
            <p>50</p>
          </div>

          <hr />

          <div className='tax'>
            <p>Sub Total</p>
            <p>2050rs</p>
          </div>

          {/* <label>
          <input type="checkbox">It is a long established fact</input>
          </label> */}

          <Link to="/mybooking">
            <button className='proceed-btn'>Proceed</button>
          </Link>

        </div>

      </section>

    </div>


  )
}

export default EditBooking