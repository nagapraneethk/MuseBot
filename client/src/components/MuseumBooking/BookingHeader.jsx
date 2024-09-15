import React from "react";

function BookingHeader() {
	return (
		<>
			<div className='flex relative gap-3 text-3xl font-semibold text-white'>
				<img
					loading='lazy'
					src='https://cdn.builder.io/api/v1/image/assets/TEMP/4f39145446efd0399855c14c0bc9e9d5bbe82dc2f886756e292371716f60f26c?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110'
					alt=''
					className='object-contain shrink-0 my-auto aspect-[1.04] w-[23px]'
				/>
				<h1 className='flex-auto'>The Period of the Kalingas</h1>
			</div>
			<h2 className='relative mt-1.5 ml-10 text-lg font-medium text-white max-md:ml-2.5'>
				Historical Museum of Kolkata
			</h2>
		</>
	);
}

export default BookingHeader;
