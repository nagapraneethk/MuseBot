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
        className='flex gap-5 justify-between items-start px-5 py-3.5 mt-2 font-semibold whitespace-nowrap rounded-3xl border-2 border-solid bg-neutral-700 border-neutral-800 max-md:pl-5 max-md:mr-1 cursor-pointer'
      >
        <div className='flex gap-3'>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/f22ec49075343e627a4670076c04cdc719b472d9c04e0605f2c4fa565e1b068c?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110'
            alt=''
            className='object-contain shrink-0 self-start w-5 aspect-square mt-1'
          />
          <span>{selectedLanguage}</span>
        </div>
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/d39921f8dab7b0b323c75df18171371b99e54960142f650d14c9353fab5808cd?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110'
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
