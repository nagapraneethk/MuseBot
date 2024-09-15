import Sidebar from "../Sidebar/Sidebar";
import MainContent from "./MainContent";
import { useState } from 'react';

const EventDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
      const todoEvents = [
				{ date: "8 September", time: "3:00 P.M" },
				{ date: "28 August", time: "1:00 P.M" },
				{ date: "8 September", time: "3:00 P.M" },
				{ date: "28 August", time: "1:00 P.M" },
				// ... other todo events
			];

			const doneEvents = [
				{ date: "8 September", time: "3:00 P.M" },
				{ date: "28 August", time: "1:00 P.M" },
				{ date: "8 September", time: "3:00 P.M" },
				{ date: "28 August", time: "1:00 P.M" },
				// ... other done events
			];
		const [isOpen, setIsOpen] = useState(true);

	

    return (
			<main className='fixed  bg-neutral-900 max-md:px-5 h-screen w-full overflow-hidden'>
				<div className='flex  max-md:flex-col '>
					<Sidebar
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						todoEvents={todoEvents}
						doneEvents={doneEvents}
					/>
					<MainContent isOpen={isOpen} />
				</div>
			</main>
		);
};

export default EventDashboard;
