import { useState } from "react";

const LanguageSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = ["English", "Spanish", "French", "German", "Mandarin"];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  return (
		<div className='relative text-white justify-center items-center'>
			<div
				onClick={() => setIsDropdownOpen(!isDropdownOpen)}
				className='flex gap-5 justify-between items-center px-5 py-3 mt-4 font-semibold whitespace-nowrap rounded-3xl border-2 border-solid bg-neutral-700 border-neutral-800 max-md:pl-5 max-md:mr-1 cursor-pointer'
			>
				<div className='flex gap-3'>
					<img
						loading='lazy'
						src='/language.svg'
						alt=''
						className='object-contain shrink-0 self-start w-5 aspect-square mt-1'
					/>
					<span>{selectedLanguage}</span>
				</div>
				<img
					loading='lazy'
					src='/language-2.svg'
					alt=''
					className='object-contain shrink-0 aspect-square w-[30px] mt-0.5'
				/>
			</div>
			{isDropdownOpen && (
				<ul className='absolute bottom-full left-0 w-full bg-neutral-800 border border-neutral-700 rounded-md shadow-lg'>
					{languages.map((language, index) => (
						<li
							key={index}
							onClick={() => handleLanguageSelect(language)}
							className='px-4 py-2 hover:bg-neutral-700 text-white cursor-pointer'
						>
							{language}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default LanguageSelector;
