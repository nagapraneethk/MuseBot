import React from "react";

function TicketDate({ date, time }) {
	return (
		<div className='flex flex-col items-start px-4 py-4 font-medium text-black rounded-tr-3xl bg-zinc-300 bg-opacity-80 max-md:pr-5'>
			<div className='text-2xl'>{date}</div>
			<div className='mt-1.5 text-lg'>{time}</div>
		</div>
	);
}

export default TicketDate;
