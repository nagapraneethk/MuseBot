import Sidebar from "../Sidebar/Sidebar";
import MainContent from "./MainContent";
import { useEffect, useState } from 'react';

const EventDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const [todoEvents,setTodoEvents]= useState(null)
		const [isOpen, setIsOpen] = useState(true);
	useEffect(() => {
		 console.log(todoEvents)
	},[])
	
    return (
			<main className='fixed  bg-neutral-900 max-md:px-5 h-screen w-full overflow-hidden'>
				<div className='home-box flex  max-md:flex-col '>
					<Sidebar
						isOpen={isOpen}
						setIsOpen={setIsOpen}
						todoEvents={todoEvents}
					/>
					<MainContent isOpen={isOpen} setTodoEvents={setTodoEvents} />
				</div>
			</main>
		);
};

export default EventDashboard;
