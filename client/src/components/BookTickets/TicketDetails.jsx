import React from "react";
import PropTypes from "prop-types";
import { SignedIn, SignedOut, SignInButton, useAuth } from "@clerk/clerk-react";
import DateSelector from "./DateSelector";

const EventCard = ({
	title,
	location,
	description,
	date,
	imagePath,
	onBook,
}) => {
	const { isSignedIn } = useAuth();

	const handleBookClick = () => {
		if (isSignedIn) {
			console.log(isSignedIn);
			onBook();
		} else {
			alert("Please sign in to book the event.");
		}
	};

	return (
		<div
			className='relative flex flex-col w-[250px] h-[167.55px] rounded-[25px] overflow-hidden'
			style={{
				border: "1px solid rgba(85, 85, 85, 0.33)",
				background: `url(${imagePath || "/event-bg.png"})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className='relative z-10 flex flex-col justify-between h-full p-3 text-white'>
				<div>
					<h3 className='text-sm font-semibold mb-1'>{title}</h3>
					<p className='text-xs'>{location}</p>
				</div>

				<div className='text-xs  bg-black bg-opacity-20 rounded-xl px-2 py-4'>
					{description}
				</div>

				<div className='flex justify-between items-center'>
					<div className='flex gap-2'>
						<DateSelector />
					</div>
					<SignedOut>
						<SignInButton mode='modal'>
							<button className='px-3 py-1 border bg-transparent text-white text-xs font-normal rounded-full'>
								BOOK
							</button>
						</SignInButton>
					</SignedOut>
					<SignedIn>
						<button
							className='px-3 py-1 border bg-transparent text-white text-xs font-normal rounded-full'
							onClick={handleBookClick}
						>
							BOOK
						</button>
					</SignedIn>
				</div>
			</div>
		</div>
	);
};

EventCard.propTypes = {
	title: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	imagePath: PropTypes.string,
	onBook: PropTypes.func.isRequired,
};

export default EventCard;
