import React from "react";

function TimeSlots({ onSelectTime, selectedTime }) {
	const timeSlots = ["11:00 A.M", "12:00 P.M", "02:00 P.M", "03:00 P.M"];

	return (
		<div className='bg-gray-100 rounded-r-lg w-24'>
			<h3 className='text-lg text-black font-semibold mb-4 mt-6 text-center'>27 Sep</h3>
			<div className='flex flex-col space-y-6 items-center'>
				{timeSlots.map((slot, index) => (
					<button
						key={index}
						onClick={() => onSelectTime(slot)}
						className={`py-2 px-2 text-left text-sm font-sm ${
							selectedTime === slot
								? "bg-gray-300 text-black"
								: "bg-gray-100 text-black hover:bg-gray-200"
						}`}
					>
						{slot}
					</button>
				))}
			</div>
		</div>
	);
}

export default TimeSlots;
