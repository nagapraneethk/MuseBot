import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const myPropTypes = {
  onClose : PropTypes.func.isRequired,
};




const Profile = ({ onClose }) => {
  Profile.propTypes = myPropTypes;

  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-85">
      <div className="relative bg-neutral-800 text-white p-8 rounded-lg w-[20rem] max-w-full h-[40rem] sm:w-[70rem] 2xl:w-[80rem]">
        <button
          className="absolute top-4 right-4 text-white"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default Profile;
