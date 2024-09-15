import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventDashboard from "./components/MainChat/Home";
import SplashScreen from "./components/SplashScreen/SplashScreen";

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
				</Router>
			)}
		</>
	);
};

export default App;
