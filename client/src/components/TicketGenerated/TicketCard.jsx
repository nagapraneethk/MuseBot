import React from "react";
import QRCode from "./QRCode";
import TicketInfo from "./TicketInfo";
import TicketDate from "./TicketDate";

function TicketCard({ eventDetails, userDetails }) {
	const ticketCode = userDetails.ticketCode || "TICKET123"; // Fallback code for demonstration

	return (
		<article className='flex flex-col rounded-none max-w-[602px]'>
			<header className='flex flex-col pb-9 pl-3.5 w-full rounded-2xl bg-neutral-700 max-md:max-w-full'>
				<div className='flex flex-wrap gap-6 max-md:max-w-full'>
					<div className='flex flex-col grow shrink-0 my-auto text-white basis-0 w-fit max-md:max-w-full'>
						<h1 className='text-3xl mt-3 font-semibold max-md:max-w-full'>
							{eventDetails?.title}
						</h1>
						<h2 className='self-start text-lg font-medium'>
							Historical Museum of Kolkata
						</h2>
					</div>
					<TicketDate date={userDetails?.date} time={userDetails?.time} />
				</div>
				<div className='mt-7 ml-3 w-full max-w-[508px] max-md:max-w-full'>
					<div className='flex gap-5 max-md:flex-col'>
						<TicketInfo userDetails={userDetails} />
						<QRCode code={ticketCode} />
					</div>
				</div>
			</header>
			<img
				loading='lazy'
				src='https://cdn.builder.io/api/v1/image/assets/TEMP/db0e82a36bb715dbffd93468a94a77f64a64eb58dbc573791d3de2902c742d85?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110'
				alt=''
				className='object-contain z-10 self-end max-w-full rounded-none aspect-[3.18] w-[118px] max-md:mr-2.5'
			/>
		</article>
	);
}

export default TicketCard;
