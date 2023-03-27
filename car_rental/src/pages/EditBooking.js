import React from 'react'
import "../styles/EditBooking.css";
import { Link } from 'react-router-dom';


const EditBooking = () => {
  return (


    <div className='booking-box'>

      <section className='left-box'>

        <div className='top-div'>
          <div>
            <h3 className='title1' >Booking Details</h3>
          </div>

          <div className='NAME'>
            <p>Car Name</p>
            <p>TOyota Innova 6 seater</p>

          </div>

          <div className='NUMBER'>
            <p>Car Number</p>
            <p>KA 67 BB 8889</p>

          </div>
          {/* <hr /> */}

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

            <div>
              {/* <img/> */}

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

        <section>

        </section>


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

          <Link to="/MyBookings">
            <button className='proceed-btn'>Proceed</button>
          </Link>

        </div>

      </section>

    </div>


  )
}

export default EditBooking