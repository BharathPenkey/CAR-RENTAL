import logo from './logo.svg';
import './App.css';
import CarBooking from './pages/CarBooking';
import BookingDetails from './pages/BookingDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Quote from './pages/Quote';


function App() {
  return (
    <div className='App'>

      <BrowserRouter>
      <Routes>
         
           <Route path='/carbooking' element={<CarBooking/>}></Route>
           <Route path='/quote' element={<Quote/>}></Route>
            <Route path="/BookingDetails" element={<BookingDetails/>}></Route>
         
          </Routes>
      </BrowserRouter>

    </div>

    
  );
}

export default App;
