import React, { useEffect, useState } from "react";

const SplashScreen = ({ onFinish }) => {
	const [fadeOut, setFadeOut] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setFadeOut(true);
			setTimeout(onFinish, 500);
		}, 2000); 

		return () => clearTimeout(timer); 
	}, [onFinish]);

	return (
		<div
			className={`fixed inset-0 bg-black flex items-center justify-center transition-opacity duration-500 opacity-100`}
		>
			<div className='loader'>
				<div className='loader-square'></div>
				<div className='loader-square'></div>
				<div className='loader-square'></div>
				<div className='loader-square'></div>
				<div className='loader-square'></div>
				<div className='loader-square'></div>
				<div className='loader-square'></div>
			</div>
		</div>
	);
};

export default SplashScreen;
