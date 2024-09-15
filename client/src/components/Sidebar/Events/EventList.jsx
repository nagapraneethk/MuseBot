import PropTypes from "prop-types";
import React, { useState } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import LanguageSelector from "../LanguageSelector";

const myPropTypes = {
	title: PropTypes.string.isRequired,
	events: PropTypes.array.isRequired,
};

const EventList = ({ title, events }) => {
	const [isOpen, setIsOpen] = useState(true);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	EventList.propTypes = myPropTypes;

	return (
		<div className='relative h-screen'>
			<div
				className={`fixed top-0 left-0 h-full bg-black text-gray-100 transition-all duration-300 ease-in-out ${
					isOpen ? "w-80 " : "w-12"
				}`}
			>
				<div className='flex justify-between items-center p-4'>
					{isOpen && <h2 className='text-xl font-semibold'>{title}</h2>}
					<button
						onClick={toggleSidebar}
						className='text-gray-300 hover:text-white focus:outline-none'
					>
						{isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
					</button>
				</div>
				{isOpen && (
					<div className='p-4'>
						{events.map((event, index) => (
							<React.Fragment key={index}>
								<div className='mt-4'>
									<p>{event.date}</p>
									<p>{event.time}</p>
								</div>
								{index < events.length - 1 && (
									<div className='my-4 h-px bg-gray-700 w-3/4' />
								)}
							</React.Fragment>
						))}
						<LanguageSelector />
					</div>
				)}
			</div>

			<div
				className={`p-4 ${
					isOpen ? "ml-64" : "ml-12"
				} transition-all duration-300 ease-in-out`}
			>
			</div>
		</div>
	);
};

export default EventList;
