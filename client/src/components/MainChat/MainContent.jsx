import Header from "./Navbar";
import { useState, useEffect, useRef } from "react";
import Tickets from "../BookTickets/TicketHistory";
import MuseumBooking from "../MuseumBooking/MuseumBooking";
import React from "react";
import TicketCard from "../TicketGenerated/TicketCard";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

const MainContent = ({ isOpen }) => {
	const [inputText, setInputText] = useState("");
	const [messages, setMessages] = useState([]);
	const [eventDetailsSelected, seEventDetailsSelected] = useState([]);
	const [userDetails, setUserDetails] = useState([]);
	const messagesEndRef = useRef(null);

	const handleSend = (messageText) => {
		setMessages((prevMessages) => [
			...prevMessages,
			{ sender: "user", text: messageText || inputText },
		]);

		setTimeout(() => {
			if (messageText === "Book Tickets" || inputText === "Book Tickets") {
				setMessages((prevMessages) => [
					...prevMessages,
					{ sender: "bot", text: "Here are the available shows:", id: 1 },
				]);
			} else {
				setMessages((prevMessages) => [
					...prevMessages,
					{
						sender: "bot",
						text: "I'm not sure how to respond to that.",
						id: 0,
					},
				]);
			}
		}, 1000);

		setInputText("");
	};

	const handleButtonClick = (text) => {
		handleSend(text);
	};

	const handleBooking = (eventDetails) => {
		seEventDetailsSelected(eventDetails);
		setMessages((prevMessages) => [
			...prevMessages,
			{
				sender: "user",
				text: `I'd like to book tickets for "${eventDetails.title}"`,
			},
		]);
		setTimeout(() => {
			setMessages((prevMessages) => [
				...prevMessages,
				{
					sender: "bot",
					text: "Great! Let's proceed with your booking.",
					id: 2,
					eventDetails: eventDetails,
				},
			]);
		}, 1000);
	};
	const handleTicketBooking = (ticketDetails) => {
		console.log("props", ticketDetails);
		setUserDetails(ticketDetails);
		setMessages((prevMessages) => [
			...prevMessages,
			{
				sender: "user",
				text: `I'd like to confirm the ticket for "${
					eventDetailsSelected?.title || "Ticket Dummy"
				}"`,
			},
		]);
		setTimeout(() => {
			setMessages((prevMessages) => [
				...prevMessages,
				{
					sender: "bot",
					text: "Great! Your ticket has been booked. Here are the details:",
					id: 3,
					ticketDetails: ticketDetails,
				},
			]);
		}, 1000);
	};

	const scrollToBottom = () => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSend(inputText);
	};

	return (
		<div
			className={`flex flex-col ${
				isOpen ? "w-[78%]" : "w-[94%]"
			} max-md:ml-0 max-md:w-full fixed top-6 right-6`}
		>
			<div className='flex flex-col px-4 py-5 mx-auto w-full rounded-3xl bg-zinc-800 max-md:pr-5 max-md:mt-10 max-md:max-w-full h-[95vh] relative'>
				<Header />
				<div className='h-[72vh] overflow-y-auto'>
					<div className='flex flex-wrap gap-5 justify-between mt-3 text-white max-md:max-w-full'>
						<div className='flex flex-col'>
							<div className='flex flex-col items-start px-5 pt-5 pb-4 w-full text-xs font-semibold rounded-3xl bg-neutral-700 max-md:ml-2.5 rounded-tl-[2px] '>
								<div className='text-base font-medium max-w-52 '>
									Hello, in what ways can I help you? Kindly select one of the
									options below.
								</div>
								<div className='grid grid-cols-2 gap-4 mt-4'>
									<SignedOut>
										<SignInButton mode='modal'>
											<button className='px-5 py-4 rounded-md shadow-sm bg-zinc-800 max-md:pr-5'>
												Sign In to Book Tickets
											</button>
										</SignInButton>
									</SignedOut>

									<SignedIn>
										<button
											className='px-5 py-4 rounded-md shadow-sm bg-zinc-800 max-md:pr-5'
											onClick={() => handleButtonClick("Book Tickets")}
										>
											Book Tickets
										</button>
									</SignedIn>
								</div>
							</div>
						</div>
						<div className='flex flex-col gap-4 self-end w-full'>
							{messages.map((message, index) => {
								if (message.sender !== "user") {
									switch (message.id) {
										case 1:
											return (
												<React.Fragment key={index}>
													<div
														className={`px-7 py-4 text-base font-medium rounded-3xl max-md:px-5 max-md:mt-10 bg-neutral-600 self-start rounded-tl-[5px]`}
													>
														{message.text}
													</div>
													<Tickets onBooking={handleBooking} />
												</React.Fragment>
											);
										case 2:
											return (
												<React.Fragment key={index}>
													<div
														className={`px-7 py-4 text-base font-medium rounded-3xl max-md:px-5 max-md:mt-10 bg-neutral-600 self-start rounded-tl-[5px]`}
													>
														{message.text}
													</div>
													<MuseumBooking
														eventDetails={eventDetailsSelected}
														onTicketBook={handleTicketBooking}
													/>
												</React.Fragment>
											);
										case 3:
											return (
												<React.Fragment key={index}>
													<div
														className={`px-7 py-4 text-base font-medium rounded-3xl max-md:px-5 max-md:mt-10 bg-neutral-600 self-start rounded-tl-[5px]`}
													>
														{message.text}
													</div>
													<TicketCard
														eventDetails={eventDetailsSelected}
														userDetails={userDetails}
													/>
												</React.Fragment>
											);
										default:
											return (
												<div
													key={index}
													className={`px-7 py-4 text-base font-medium rounded-3xl max-md:px-5 max-md:mt-10 bg-neutral-600 self-start rounded-tl-[5px]`}
												>
													{message.text}
												</div>
											);
									}
								} else {
									return (
										<div
											key={index}
											className={`px-7 py-4 text-base font-medium rounded-3xl max-md:px-5 max-md:mt-10 bg-neutral-700 self-end mr-2 rounded-tr-[5px]`}
										>
											{message.text}
										</div>
									);
								}
							})}
							<div ref={messagesEndRef} />
						</div>
					</div>
				</div>
				<form
					onSubmit={handleSubmit}
					className='flex items-center justify-between  w-[98%] gap-2 absolute bottom-3 right-10 left-2'
				>
					<input
						type='text'
						className='px-4 py-4 bg-neutral-600 bg-opacity-50 rounded-[30px] max-md:px-5 flex-grow text-white'
						placeholder='Start booking your ticket'
						value={inputText}
						onChange={(e) => setInputText(e.target.value)}
					/>
					<button type='submit' className='flex-shrink-0'>
						<img
							loading='lazy'
							src='/send-button.svg'
							alt='Send message'
							className='object-contain w-12 aspect-square'
						/>
					</button>
				</form>
			</div>
		</div>
	);
};

export default MainContent;
