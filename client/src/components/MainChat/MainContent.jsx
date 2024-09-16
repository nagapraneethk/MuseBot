import Header from "./Navbar";
import { useState, useEffect, useRef } from "react";
import Tickets from "../BookTickets/TicketHistory";
import MuseumBooking from "../MuseumBooking/MuseumBooking";
import React from "react";
import TicketCard from "../TicketGenerated/TicketCard";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { useSelector } from "react-redux";
import { translateText } from "../../utils/LanguageTranslation";

const MainContent = ({ isOpen }) => {
	const [translatedText, setTranslatedText] = useState({});
	const [inputText, setInputText] = useState("");
	const [messages, setMessages] = useState([]);
	const [eventDetailsSelected, setEventDetailsSelected] = useState([]);
	const [userDetails, setUserDetails] = useState([]);
	const messagesEndRef = useRef(null);
	const language = useSelector((state) => state.user.language.code);

	useEffect(() => {
		console.log(language);
		translatePage();
	}, [language]);

	const translatePage = async () => {
		try {
			const textToTranslate = {
				greeting:
					"Hello, in what ways can I help you? Kindly select one of the options below.",
				signIn: "Sign In to Book Tickets",
				bookTickets: "Book Tickets",
				unsureResponse: "I'm not sure how to respond to that.",
				availableShows: "Here are the available shows:",
				proceedBooking: "Great! Let's proceed with your booking.",
				confirmBooking:
					"Great! Your ticket has been booked. Here are the details:",
				inputPlaceholder: "Start booking your ticket",
			};

			const translatedTextObj = {};
			for (const [key, value] of Object.entries(textToTranslate)) {
				translatedTextObj[key] = await translateText(value, language);
			}

			setTranslatedText(translatedTextObj);
		} catch (error) {
			console.error("Translation error:", error);
		}
	};

	const handleSend = async (messageText) => {
		const translatedUserMessage = await translateText(
			messageText || inputText,
			language
		);
		setMessages((prevMessages) => [
			...prevMessages,
			{ sender: "user", text: translatedUserMessage },
		]);

		setTimeout(async () => {
			let botResponse = translatedText.unsureResponse;

			if (
				messageText === translatedText.bookTickets ||
				inputText === translatedText.bookTickets
			) {
				botResponse = translatedText.availableShows;
			}

			setMessages((prevMessages) => [
				...prevMessages,
				{ sender: "bot", text: botResponse, id: 1 },
			]);
		}, 1000);

		setInputText("");
	};

	const handleButtonClick = (text) => {
		handleSend(text);
	};

	const handleBooking = async (eventDetails) => {
		setEventDetailsSelected(eventDetails);
		let translatedUserMessage = await translateText(
			"I'd like to book tickets for " ,
			language
		); 
		translatedUserMessage += `"${eventDetails.title}"`;

		setMessages((prevMessages) => [
			...prevMessages,
			{ sender: "user", text: translatedUserMessage },
		]);

		setTimeout(() => {
			setMessages((prevMessages) => [
				...prevMessages,
				{
					sender: "bot",
					text: translatedText.proceedBooking,
					id: 2,
					eventDetails: eventDetails,
				},
			]);
		}, 1000);
	};

	const handleTicketBooking = async (ticketDetails) => {
		setUserDetails(ticketDetails);
		let translatedUserMessage = await translateText(
			`I'd like to confirm the ticket for `,
			language
		);
        translatedUserMessage += `"${eventDetailsSelected.title}"`;
		setMessages((prevMessages) => [
			...prevMessages,
			{ sender: "user", text: translatedUserMessage },
		]);

		setTimeout(() => {
			setMessages((prevMessages) => [
				...prevMessages,
				{
					sender: "bot",
					text: translatedText.confirmBooking,
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
									{translatedText.greeting}
								</div>
								<div className='grid grid-cols-2 gap-4 mt-4'>
									<SignedOut>
										<SignInButton mode='modal'>
											<button className='px-5 py-4 rounded-md shadow-sm bg-zinc-800 max-md:pr-5'>
												{translatedText.signIn}
											</button>
										</SignInButton>
									</SignedOut>

									<SignedIn>
										<button
											className='px-5 py-4 rounded-md shadow-sm bg-zinc-800 max-md:pr-5'
											onClick={() =>
												handleButtonClick(translatedText.bookTickets)
											}
										>
											{translatedText.bookTickets}
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
						placeholder={translatedText.inputPlaceholder}
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
