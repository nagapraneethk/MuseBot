import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventDashboard from "./components/MainChat/Home";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import AdminDashboard from "./components/Admin/AdminPannel";

const App = () => {
	const [showSplash, setShowSplash] = useState(true);

	const handleSplashFinish = () => {
		setShowSplash(false);
	};

return (
		<>
			{showSplash ? (
				<SplashScreen onFinish={handleSplashFinish} />
			) : (
				<Router>
					<Routes>
						<Route path='/' element={<EventDashboard />} />
					</Routes>
					<Routes>
						<Route path='/Admin' element={<AdminDashboard />} />
					</Routes>
				</Router>
			)}
		</>
	);
};

export default App;
