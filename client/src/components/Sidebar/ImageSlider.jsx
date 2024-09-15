import React from "react";

const ImageSlider = ({ imagePath }) => {
	return (
		<div className='flex items-center justify-center rounded-md'>
			<div className='slider relative overflow-hidden bg-white shadow-lg w-96 rounded-2xl'>
				<div className='slider-track flex animate-scroll rounded-md'>
					<div className='slide'>
						<img src={imagePath} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ImageSlider;
