import React from "react";

function BookingHeader({ eventDetails }) {
	return (
		<>
			<div className='flex relative gap-3 text-3xl font-semibold text-white'>
				
				<h1 className='flex-auto'>The Period of the Kalingas</h1>
			</div>
			<h2 className='relative mt-1.5 ml-10 text-lg font-medium text-white max-md:ml-2.5'>
				Historical Museum of Kolkata
			</h2>
		</>
	);
}

export default BookingHeader;
