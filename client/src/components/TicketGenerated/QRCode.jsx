import React from "react";
import { QRCodeSVG } from "qrcode.react";

function QRCode({ code }) {
	return (
		<div className='flex flex-col ml-5 w-2/5 max-md:ml-0 max-md:w-full'>
			<div className='mt-2.5 max-w-full w-[150px] aspect-square max-md:mt-10'>
				<QRCodeSVG
					value={code}
					size={150}
					level='H'
					includeMargin={true}
					className='w-full h-full'
				/>
			</div>
		</div>
	);
}

export default QRCode;
