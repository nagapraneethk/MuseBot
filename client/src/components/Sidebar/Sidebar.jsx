import React from "react";
import PropTypes from "prop-types";
import { ChevronRight, ChevronLeft } from "lucide-react";
import LanguageSelector from "./LanguageSelector";

const Sidebar = ({ todoEvents, doneEvents, isOpen, setIsOpen }) => {
	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	const renderEventList = (title, events) => (
		<div
			className={`flex flex-col px-2 pt-2 pb-4 mx-auto w-full text-sm font-medium text-white rounded-3xl bg-zinc-800 max-md:mt-4 justify-center `}
		>
			<div className='flex flex-col items-center px-4 pt-8 pb-8 rounded-3xl border border-solid bg-neutral-700 border-neutral-800 max-md:px-3 justify-center text-center'>
				<h2 className='text-lg font-semibold'>{title}</h2>
				{events.map((event, index) => (
					<React.Fragment key={index}>
						<div className='self-stretch mt-4 text-sm'>
							{event.date} - {event.time}
						</div>
						{index < events.length - 1 && (
							<div className='shrink-0 mt-2 h-px border border-white border-solid w-[60px]' />
						)}
					</React.Fragment>
				))}
			</div>
		</div>
	);

	return (
		<div className='relative h-screen'>
			<div
				className={`fixed top-6 bottom-6 left-6 bg-neutral-800 text-gray-100 transition-all duration-300 ease-in-out ${
					isOpen ? "w-80" : "w-12 bg-black"
				} rounded-[20px] overflow-hidden flex flex-col`}
			>
				<div className='flex justify-between items-center p-4'>
					{isOpen && <h2 className='text-xl font-semibold'>Events</h2>}
				</div>
				{isOpen && (
					<div className='flex-grow overflow-y-auto p-4 space-y-5'>
						{renderEventList("Events To-Do", todoEvents)}
						{renderEventList("Events Done", doneEvents)}
						<div className='mt-auto pt-16'>
							<LanguageSelector />
						</div>
					</div>
				)}
				<button
					onClick={toggleSidebar}
					className={`text-gray-300 hover:text-white focus:outline-none absolute ${
						isOpen
							? "right-1 top-1/2 -translate-y-1/2"
							: "left-4 top-1/2 -translate-y-1/2"
					}`}
				>
					{isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
				</button>
			</div>
			<div
				className={`p-4 ${
					isOpen ? "ml-80" : "ml-12"
				} transition-all duration-300 ease-in-out`}
			>
				{/* Content goes here */}
			</div>
		</div>
	);
};

Sidebar.propTypes = {
	todoEvents: PropTypes.array.isRequired,
	doneEvents: PropTypes.array.isRequired,
	isOpen: PropTypes.bool.isRequired,
	setIsOpen: PropTypes.func.isRequired,
};

export default Sidebar;
