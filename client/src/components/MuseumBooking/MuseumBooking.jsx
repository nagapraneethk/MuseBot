import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import BookingHeader from "./BookingHeader";
import BookingForm from "./BookingForm";
import TimeSlots from "./TimeSlots";

function MuseumBooking({ onTicketBook }) {
	const { user } = useUser();
	const [selectedTime, setSelectedTime] = useState(null);

	const handleTimeSelection = (time) => {
		setSelectedTime(time);
	};

	return (
		<main className='flex flex-col max-w-[586px]'>
			<section className='w-full rounded-2xl max-md:max-w-full'>
				<div className='flex rounded-lg max-md:flex-col'>
					<div className='flex flex-col w-[79%] max-md:ml-0 max-md:w-full'>
						<article className='flex relative flex-col items-start py-5 pr-1.5 pl-3.5 w-full rounded-2xl min-h-[311px] max-md:max-w-full'>
							<img
								loading='lazy'
								src='/ticket-bg.png'
								alt=''
								className='object-cover absolute inset-0 size-full'
							/>
							<div className='relative z-10 w-full'>
								<BookingHeader />
								<BookingForm
									user={user}
									date={'27 Sep'}
									selectedTime={selectedTime}
									onTicketBook={onTicketBook}
								/>
							</div>
						</article>
					</div>
					<TimeSlots
						onSelectTime={handleTimeSelection}
						selectedTime={selectedTime}
					/>
				</div>
			</section>
		</main>
	);
}

export default MuseumBooking;
