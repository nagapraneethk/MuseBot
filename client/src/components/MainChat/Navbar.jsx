import { useState } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import Profile from "./UserProfile";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  useClerk,
} from "@clerk/clerk-react";

const Header = () => {
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Hyderabad");
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const { signOut } = useClerk();
  
  const cities = [
    "Hyderabad",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Vizag",
    "Andhra Pradesh",
  ];

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsCityDropdownOpen(false);
    setSearchTerm(""); // Clear search input after selection
  };

  const handleProfileClick = () => {
    setIsProfileModalOpen(true);
    setIsProfileDropdownOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut();
      setIsProfileDropdownOpen(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter cities based on the search term
  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header className='flex flex-wrap gap-5 justify-between w-full max-md:mr-2 max-md:max-w-full mb-1 z-50'>
        <div className='flex gap-3 items-center text-md font-semibold text-white whitespace-nowrap'>
          <div className='flex shrink-0 self-stretch border border-solid bg-neutral-700 border-neutral-800 h-[50px] rounded-[50px] w-[50px]' />
          <img
            loading='lazy'
            src='/world.png'
            alt=''
            className='object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]'
          />
          <div className='relative'>
            <button
              onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
              className='flex items-center'
            >
              {selectedCity}
              <img
                loading='lazy'
                src='/drop-down.png'
                alt=''
                className='object-contain shrink-0 self-stretch my-auto w-2.5 aspect-[2] ml-2'
              />
            </button>
            {isCityDropdownOpen && (
              <div className='absolute left-0 mt-2 w-48 bg-neutral-800 border border-neutral-700 rounded-md shadow-lg'>
                <input
                  type='text'
                  placeholder='Search city...'
                  value={searchTerm}
                  onChange={handleSearchChange}
                   className='w-full px-4 py-2 bg-neutral-900 text-white border-b border-neutral-600 outline-none focus:ring-1 focus:ring-white-400 focus:ring-opacity-60 rounded-t-md'
                />
                <ul>
                  {filteredCities.length > 0 ? (
                    filteredCities
                      .filter((city) => city !== selectedCity)
                      .map((city) => (
                        <li
                          key={city}
                          className='px-4 py-2 hover:bg-neutral-700 text-white cursor-pointer'
                          onClick={() => handleCitySelect(city)}
                        >
                          {city}
                        </li>
                      ))
                  ) : (
                    <li className='px-4 py-2 text-white'>No results found</li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className='flex gap-2 my-auto'>
          <img
            loading='lazy'
            src="/qr.svg"
            alt='QR'
            className='object-contain shrink-0 w-10 rounded-none aspect-square'
          />
          <div className='relative'>
            <SignedOut>
              <SignInButton mode='modal'>
                <button>
                  <img
                    loading='lazy'
                    src='/user-profile.svg'
                    alt='User profile'
                    className='object-contain shrink-0 w-10 rounded-none aspect-square'
                  />
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
              >
                <img
                  loading='lazy'
                  src="/user-profile.svg"
                  alt='User profile'
                  className='object-contain shrink-0 w-10 rounded-none aspect-square'
                />
              </button>
            </SignedIn>
            {isProfileDropdownOpen && (
              <ul className='absolute right-0 mt-2 w-48 bg-neutral-800 border border-neutral-700 rounded-md shadow-lg'>
                <li
                  className='px-4 py-2 hover:bg-neutral-700 text-white cursor-pointer flex items-center gap-2'
                  onClick={handleProfileClick}
                >
                  <FaUser />
                  Profile
                </li>
                <li
                  className='px-4 py-2 hover:bg-neutral-700 text-white cursor-pointer flex items-center gap-2'
                  onClick={handleLogout}
                >
                  <FaSignOutAlt />
                  Logout
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>
      {isProfileModalOpen && (
        <Profile onClose={() => setIsProfileModalOpen(false)} /> 
      )}
    </>
  );
};

export default Header;
