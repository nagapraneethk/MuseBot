import PropTypes from 'prop-types';

const myPropTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};


const EventCard = ({ title, location, description, date }) => {
	
	EventCard.propTypes = myPropTypes;
  
	return(

		<div className='flex overflow-hidden flex-col grow font-semibold max-md:mt-7 rounded-[30px] h-[250px] rounded-bl-[30px]'>

		<div className='flex relative flex-col px-3 py-3.5 w-full aspect-[1.588]'>
			<img
				loading='lazy'
				src='https://cdn.builder.io/api/v1/image/assets/TEMP/26328d798e14c1f8f17f5cfd4de2f1846e12368aa28b04c9b492ba2b71561b86?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110'
				alt='Event background'
				className='object-cover absolute inset-0 size-full'
				/>
			<div className='flex relative gap-8 text-sm text-white max-md:mr-2'>
				<h3 className='grow shrink w-[175px]'>{title}</h3>
				<img
					loading='lazy'
					src='https://cdn.builder.io/api/v1/image/assets/TEMP/43762f4a8d71f5ba40e33721c4aaa3991e911746cbc2f5f00a70f0bc967e5a91?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110'
					alt=''
					className='object-contain shrink-0 my-auto w-4 aspect-[0.91]'
				/>
			</div>
			<p className='relative self-start mt-1 text-xs font-medium text-white'>
				{location}
			</p>
			<p className='relative px-12 py-5 mt-4 text-xs rounded-xl bg-zinc-800 bg-opacity-80 text-zinc-300 max-md:px-5'>
				{description}
			</p>
			<div className="flex flex-row justify-between items-center mt-4">

				<div className='flex relative gap-1 items-center mt-2.5'>
					<div className='flex flex-col items-start self-stretch px-4 py-2 rounded-xl bg-zinc-800 bg-opacity-80'>
						<select className='text-xs text-blue-300 bg-transparent border-none outline-none'>
							<option value={date}>{date}</option>
							{/* Add more date options here */}
							<option value="2024-09-13">2024-09-13</option>
							<option value="2024-09-14">2024-09-14</option>
						</select>
					</div>
				</div>

				<div className='flex relative gap-1 items-center mt-2.5 justify-between ml-2'>
					<div className='flex flex-col items-center justify-center self-stretch px-4 py-2 rounded-xl bg-zinc-800 bg-opacity-80'>
						<select className='text-xs text-blue-300 bg-transparent border-none outline-none'>
							<option value="2.00pm">2.00pm</option>
							{/* Add more time options here */}
							<option value="3.00pm">3.00pm</option>
							<option value="4.00pm">4.00pm</option>
						</select>
					</div>
				</div>

				<div className="flex items-center justify-between mt-3 ml-4">
					<button className="px-8 py-2 bg-transparent text-white text-sm font-normal rounded-full border-2">
						BOOK
					</button>
				</div>


			</div>
		</div>
	</div>
)
};

export default EventCard;
