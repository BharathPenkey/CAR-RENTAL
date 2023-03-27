import logo from './logo.svg';
import './App.css';
import CarBooking from './pages/CarBooking';
import BookingDetails from './pages/BookingDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quote from './pages/Quote';
import Admin from './pages/Admin';
import AddCars from './pages/AddCar';
import EditCar from './pages/EditCar';


function App() {
  return (
    <div className='App'>

      <BrowserRouter>
      <Routes>
         <Route path="/admin" element={<Admin/>}/>
         <Route path="/addcar" element={<AddCars/>}/>
           <Route path='/carbooking' element={<CarBooking/>}/>
           <Route path='/quote' element={<Quote/>}/>
            <Route path="/BookingDetails" element={<BookingDetails/>}/>
            <Route path="/editcardetails" element={<EditCar/>}/>
         
          </Routes>
      </BrowserRouter>

    </div>

    
  );
}

export default App;
