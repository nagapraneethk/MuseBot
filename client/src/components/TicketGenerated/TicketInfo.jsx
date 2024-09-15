import React from "react";

function TicketInfo({ userDetails }) {
	const eventInfoData = [
		{
			icon: "/museum-img1.svg",
			text: userDetails.persons,
		},
		{
			icon: "/museum-img2.svg",
			text: userDetails.mobile,
		},
		{
			icon: "/museum-img3.svg",
			text: userDetails.email,
		},
	];

	return (
		<div className='flex flex-col w-3/5 max-md:ml-0 max-md:w-full'>
			<ul className='flex flex-col items-start w-full text-xl font-medium text-white max-md:mt-10'>
				{eventInfoData.map((item, index) => (
					<li key={index} className={`flex gap-5 ${index !== 0 ? "mt-9" : ""}`}>
						<img
							loading='lazy'
							src={item.icon}
							alt=''
							className='object-contain shrink-0 w-8 aspect-square'
						/>
						<span className='my-auto'>{item.text}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export default TicketInfo;
