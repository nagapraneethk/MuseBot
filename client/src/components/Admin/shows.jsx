import { useState } from 'react';
import BookingComponent from './BookingComponent';
const ShowsBlock = () => {


    return (
        <main className='ShowsBlock'>
           <h1>Shows Today</h1>
           <div className="show-list">
           <BookingComponent 
  title="The Period of the Kalingas"
  subtitle = "Historical Museums of kolkata"
  times={['11:00 AM', '12:00 PM', '2:00 PM']}
  bookings={[45, 45, 45]}
  remaining={[45, 45, 45]}
  onStopBooking={() => console.log("Booking stopped")}
/>
           <BookingComponent 
  title="The Period of the Kalingas"
  subtitle = "Historical Museums of kolkata"
  times={['11:00 AM', '12:00 PM', '2:00 PM']}
  bookings={[45, 45, 45]}
  remaining={[45, 45, 45]}
  onStopBooking={() => console.log("Booking stopped")}
/>
           <BookingComponent 
  title="The Period of the Kalingas"
  subtitle = "Historical Museums of kolkata"
  times={['11:00 AM', '12:00 PM', '2:00 PM']}
  bookings={[45, 45, 45]}
  remaining={[45, 45, 45]}
  onStopBooking={() => console.log("Booking stopped")}
/>
</div>

        </main>
    );
};

export default ShowsBlock;
