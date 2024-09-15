import { useState } from "react";

const DateSelector = () => {
	const [date, setDate] = useState(new Date().toISOString().split("T")[0]); // Default to today's date

	const today = new Date();
	const maxDate = new Date();
	maxDate.setDate(today.getDate() + 10);

	const handleDateChange = (event) => {
		setDate(event.target.value);
	};

	return (
		<input
			type='date'
			className='text-xs  bg-black bg-opacity-20 rounded-xl px-2 py-2'
			value={date}
			onChange={handleDateChange}
			min={today.toISOString().split("T")[0]} 
			max={maxDate.toISOString().split("T")[0]}
		/>
	);
};

export default DateSelector;
