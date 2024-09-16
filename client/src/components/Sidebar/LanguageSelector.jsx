import { useState } from "react";

const LanguageSelector = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [searchTerm, setSearchTerm] = useState("");
   
  const languages = ["English","Telugu","Hindi" ,"Spanish", "French", "German", "Mandarin"];

  const lang_codes = {};

  for (const language of languages) {
	lang_codes[language.toLowerCase()] = {
	  language: language,
	  code: language.substring(0, 2).toLowerCase()
	};
  }

	


  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
    setSearchTerm(""); 
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredLanguages = languages.filter((language) =>
    language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='sidenav-box-lang relative text-white justify-center items-center'>
      <div
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className='language-box flex gap-5 justify-between items-center px-5 py-3 mt-4 font-semibold whitespace-nowrap rounded-3xl border-2 border-solid bg-neutral-700 border-neutral-800 max-md:pl-5 max-md:mr-1 cursor-pointer'
      >
        <div className='flex gap-3'>
          <img
            loading='lazy'
            src='/language.svg'
            alt='Language icon'
            className='object-contain shrink-0 self-start w-5 aspect-square mt-1'
          />
          <span>{selectedLanguage}</span>
        </div>
        <img
          loading='lazy'
          src='/language-2.svg'
          alt='Dropdown icon'
          className='object-contain shrink-0 aspect-square w-[30px] mt-0.5'
        />
      </div>
      {isDropdownOpen && (
        <div className='language_searchbar absolute bottom-full left-0 w-full bg-neutral-800 border border-neutral-700 rounded-md shadow-lg'>
          {/* Search Bar */}
		  
          <input
            type='text'
            placeholder='Search language...'
            value={searchTerm}
            onChange={handleSearchChange}
            className='w-full px-4 py-2 bg-neutral-700 text-white border-b border-neutral-600 outline-none'
          />
		  
          <ul>
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((language, index) => (
                <li
                  key={index}
                  onClick={() => handleLanguageSelect(language)}
                  className='px-4 py-2 hover:bg-neutral-700 text-white cursor-pointer'
                >
                  {language}
                </li>
              ))
            ) : (
              <li className='px-4 py-2 text-white'>
                No results found
              </li>
            )}
          </ul>
        </div>
		
      )}
    </div>
  );
};

export default LanguageSelector;
