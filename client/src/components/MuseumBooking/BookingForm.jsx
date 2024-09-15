import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";

function BookingForm({ user, date, selectedTime, onTicketBook }) {
	const [formData, setFormData] = useState({
		persons: "",
		mobile: "",
		email: "",
		date: date,
		time: selectedTime,
	});

	useEffect(() => {
		setFormData((prevData) => ({
			...prevData,
			date: date,
			time: selectedTime,
		}));
	}, [date, selectedTime]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleAddFromProfile = () => {
		if (user) {
			setFormData((prevData) => ({
				...prevData,
				mobile: user.primaryPhoneNumber?.phoneNumber || "1234567890",
				email: user.primaryEmailAddress?.emailAddress || "user@example.com",
			}));
		}
	};

 const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		onTicketBook({ ...formData });
 };

	return (
		<form
			onSubmit={handleSubmit}
			className='relative self-end mt-9 w-full max-w-[404px]'
		>
			<div className='flex gap-5 max-md:flex-col'>
				<div className='flex flex-col w-[58%] max-md:ml-0 max-md:w-full'>
					<div className='flex relative flex-col w-full text-xs font-medium text-white max-md:mt-3'>
						<div className='flex gap-5 justify-between mb-4'>
							<img
								loading='lazy'
								src='https://cdn.builder.io/api/v1/image/assets/TEMP/aed807a67d29c188734636b92673473e5603c6ff8e480f0973feb6dda1ed4f25?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110'
								alt=''
								className='object-contain shrink-0 w-8 aspect-square'
							/>
							<div className='flex flex-col flex-grow'>
								<label htmlFor='persons' className='mb-1'>
									Enter number of persons
								</label>
								<input
									id='persons'
									name='persons'
									type='number'
									value={formData.persons}
									onChange={handleInputChange}
									className='px-2 py-1 text-white  bg-transparent border-b'
									aria-label='Enter number of persons'
									required
								/>
							</div>
						</div>
						<div className='flex gap-5 justify-between mb-4'>
							<img
								loading='lazy'
								src='https://cdn.builder.io/api/v1/image/assets/TEMP/d5619513b2a8ea954daca5997f464a184ff2e1511a07bb74955d2807c94082ee?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110'
								alt=''
								className='object-contain shrink-0 w-8 aspect-square'
							/>
							<div className='flex flex-col flex-grow'>
								<label htmlFor='mobile' className='mb-1'>
									Enter your mobile number
								</label>
								<input
									id='mobile'
									name='mobile'
									type='tel'
									value={formData.mobile}
									onChange={handleInputChange}
									className='px-2 py-1 text-white  bg-transparent border-b'
									aria-label='Enter your mobile number'
									required
								/>
							</div>
						</div>
						<div className='flex gap-5 justify-between'>
							<img
								loading='lazy'
								src='https://cdn.builder.io/api/v1/image/assets/TEMP/ffae60ab26195f5ed5f51a6f5ae24186e0b69626ef8764a3f9037546d609a085?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110'
								alt=''
								className='object-contain shrink-0 w-8 aspect-[1.33]'
							/>
							<div className='flex flex-col flex-grow'>
								<label htmlFor='email' className='mb-1'>
									Enter your email address
								</label>
								<input
									id='email'
									name='email'
									type='email'
									value={formData.email}
									onChange={handleInputChange}
									className='px-2 py-1 text-white  bg-transparent border-b'
									aria-label='Enter your email address'
									required
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full'>
					<div className='flex relative flex-col grow mt-7 font-medium max-md:mt-10'>
						<button
							type='button'
							onClick={handleAddFromProfile}
							className='px-4 py-2.5 text-xs text-center text-black rounded-2xl bg-zinc-300 bg-opacity-70 hover:bg-opacity-80 transition-colors'
						>
							Add details from Profile
						</button>
						<button
							type='submit'
							className='self-center px-7 py-2.5 mt-3 text-sm whitespace-nowrap rounded-2xl border border-solid border-zinc-300 border-opacity-80 text-zinc-300 hover:bg-zinc-700 transition-colors w-[94px] max-md:px-5'
						>
							BOOK
						</button>
					</div>
				</div>
			</div>
		</form>
	);
}

export default BookingForm;
