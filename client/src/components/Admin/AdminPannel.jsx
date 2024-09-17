import { useState } from 'react';
import MainContent from './MainContent';
import SideNav from './SideNav';

const AdminDashboard = () => {
    

    return (
			<main className='Admin-dashboard'>
				<SideNav/>
                <MainContent/>
			</main>
		);
};

export default AdminDashboard;
