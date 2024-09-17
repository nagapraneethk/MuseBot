import { useState } from 'react';

const AddShow = () => {


    return (
        <main className='AddShow'>
           <h1>ADD EVENT</h1>
           <p>Fill the details below to add a new event</p>
           

           <form action="#">
            <input type="text" placeholder='Name Of The Event' />
            <input type="text" placeholder='Name Of Museum' />
            <input type="text" placeholder='Location Of Museum' />
            <input type="text" placeholder='Short Description' />
            <input type="text" placeholder='Avaliable No Of Tickets' />
            <div className="banner-img">
            <p>Upload Banner</p>
            <input type="file" id="fileInput"/>
            <label for="fileInput">Upload Image</label>
            </div>
            <button className="submit-show">Add Show</button>
           </form>
        </main>
    );
};

export default AddShow;
