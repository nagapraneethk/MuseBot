import React from "react";

function TicketInfo({ userDetails }) {
	const eventInfoData = [
		{
			icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/aed807a67d29c188734636b92673473e5603c6ff8e480f0973feb6dda1ed4f25?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110",
			text: userDetails.persons,
		},
		{
			icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d5619513b2a8ea954daca5997f464a184ff2e1511a07bb74955d2807c94082ee?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110",
			text: userDetails.mobile,
		},
		{
			icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ffae60ab26195f5ed5f51a6f5ae24186e0b69626ef8764a3f9037546d609a085?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110",
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
