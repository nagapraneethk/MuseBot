import { useState } from "react";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import Profile from './UserProfile'; 


const Header = () => {
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false); 
  const [selectedCity, setSelectedCity] = useState("Hyderabad");

  const cities = [
    "Hyderabad",
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Vizag",
    "Andhra Pradesh",
  ]; // Has to come from Backend

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsCityDropdownOpen(false);
  };

  const handleProfileClick = () => {
    setIsProfileModalOpen(true); 
    setIsProfileDropdownOpen(false);
  };

  return (
    <>
      <header className="flex flex-wrap gap-5 justify-between w-full max-md:mr-2 max-md:max-w-full mb-1 z-50">
        <div className="flex gap-3 items-center text-md font-semibold text-white whitespace-nowrap">
          <div className="flex shrink-0 self-stretch border border-solid bg-neutral-700 border-neutral-800 h-[50px] rounded-[50px] w-[50px]" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/71fdbf658db3ac34fb6407a79162e374cb98076a64c4a1071c76cc5419de4867?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
          />
          <div className="relative">
            <button
              onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
              className="flex items-center"
            >
              {selectedCity}
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0db4c0cd849a782896bbc87733b8601b8f48fc01d0083493a12ef4c6d2c027f1?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110"
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-[2] ml-2"
              />
            </button>
            {isCityDropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-neutral-800 border border-neutral-700 rounded-md shadow-lg">
                {cities
                  .filter((city) => city !== selectedCity)
                  .map((city) => (
                    <li
                      key={city}
                      className="px-4 py-2 hover:bg-neutral-700 text-white cursor-pointer"
                      onClick={() => handleCitySelect(city)}
                    >
                      {city}
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
        <div className="flex gap-2 my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe87e549378c11a686f5592836e2fdbc4111c0e179eb25170651d19255d09e3f?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110"
            alt="QR"
            className="object-contain shrink-0 w-10 rounded-none aspect-square"
          />
          <div className="relative">
            <button
              onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca71a8076b4c3ad693f614881fee0aa768a7188d3e4cebfff019d23bbb03fd5b?placeholderIfAbsent=true&apiKey=61fdf683f141495eb249129d739ec110"
                alt="User profile"
                className="object-contain shrink-0 w-10 rounded-none aspect-square"
              />
            </button>
            {isProfileDropdownOpen && (
              <ul className="absolute right-0 mt-2 w-48 bg-neutral-800 border border-neutral-700 rounded-md shadow-lg">
                <li
                  className="px-4 py-2 hover:bg-neutral-700 text-white cursor-pointer flex items-center gap-2"
                  onClick={handleProfileClick} // Open Profile modal on click
                >
                  <FaUser />
                  Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-neutral-700 text-white cursor-pointer flex items-center gap-2"
                  onClick={() => {
                    // Handle logout click
                    setIsProfileDropdownOpen(false);
                  }}
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
        <Profile onClose={() => setIsProfileModalOpen(false)} /> // Render Profile modal
      )}
    </>
  );
};

export default Header;
