import Sidebar from "../Sidebar/Sidebar";
import MainContent from "./MainContent";
import { useState } from 'react';

const EventDashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <main className='px-8 py-6 bg-neutral-900 max-md:px-5 h-full w-full overflow-hidden'>
            <div className='flex gap-5 max-md:flex-col'>
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <MainContent />
            </div>
        </main>
    );
};

export default EventDashboard;
