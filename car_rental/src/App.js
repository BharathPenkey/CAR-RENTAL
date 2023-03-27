
import './App.css';
import CarBooking from './pages/CarBooking';
import BookingDetails from './pages/BookingDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quote from './pages/Quote';
import Admin from './pages/Admin';
import AddCars from './pages/AddCar';
import MyBooking from './pages/MyBooking';
import EditBooking from './pages/EditBooking';



function App() {
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/addcar" element={<AddCars />} />
          <Route path='/carbooking' element={<CarBooking />} />
          <Route path='/quote' element={<Quote />} />
          <Route path="/BookingDetails" element={<BookingDetails />} />
          <Route path='/editbooking' element={<EditBooking />}></Route>
          <Route path='/mybooking' element={<MyBooking/>}></Route>

        </Routes>
      </BrowserRouter>

    </div>


  );
}

export default App;
