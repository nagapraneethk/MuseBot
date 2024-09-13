import EventList from "./Events/EventList";
import LanguageSelector from "./LanguageSelector";

const Sidebar = () => {
	const todoEvents = [
		{ date: "8 September", time: "3:00 P.M" },
		{ date: "28 August", time: "1:00 P.M" },
		{ date: "18 August", time: "3:00 P.M" },
		{ date: "31 July", time: "11:00 A.M" },
	];

	const doneEvents = [
		{ date: "8 September", time: "3:00 P.M" },
		{ date: "28 August", time: "1:00 P.M" },
		{ date: "18 August", time: "3:00 P.M" },
		{ date: "31 July", time: "11:00 A.M" },
	];

	return (

		<aside className='flex flex-col w-[18%] max-md:ml-0 max-md:w-full justify-center h-[95vh] overflow-y-auto bg-neutral-800 rounded-[20px]'>
			<EventList title='Events To-Do' events={todoEvents} />
			<EventList title='Events Done' events={doneEvents} />
			<LanguageSelector />

		</aside>
	);
};

export default Sidebar;
