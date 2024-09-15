import React, { useState } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import { useUser } from "@clerk/clerk-react";

const Profile = ({ onClose }) => {
	const { user } = useUser();
	const [isEditing, setIsEditing] = useState(false);

	if (!user) {
		return <div>Loading user data...</div>;
	}

	const phoneNumber =
		user.primaryPhoneNumber?.phoneNumber || "No phone number provided";

	const handleEdit = () => {
		setIsEditing(true);
		alert("Edit functionality would be implemented here.");
		setIsEditing(false);
	};

	const EditableField = ({ label, value, placeholder }) => (
		<div className='flex justify-between items-center'>
			<p>
				<strong>{label}:</strong>{" "}
				{value || <span className='italic text-gray-500'>{placeholder}</span>}
			</p>
			{!value && (
				<button
					onClick={handleEdit}
					className='text-blue-400 hover:text-blue-300'
				>
					<FaEdit />
				</button>
			)}
		</div>
	);

	return (
		<div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-85'>
			<div className='relative bg-neutral-800 text-white p-8 rounded-lg w-[20rem] max-w-full h-[40rem] sm:w-[70rem] 2xl:w-[80rem] overflow-y-auto'>
				<button className='absolute top-4 right-4 text-white' onClick={onClose}>
					<FaTimes size={20} />
				</button>
				<h2 className='text-2xl font-semibold mb-6'>User Profile</h2>

				<div className='space-y-4'>
					<div className='flex items-center space-x-4'>
						{user.profileImageUrl ? (
							<img
								src={user.profileImageUrl}
								alt='Profile'
								className='w-20 h-20 rounded-full'
							/>
						) : (
							<div className='w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center'>
								<FaEdit
									onClick={handleEdit}
									className='text-gray-400 cursor-pointer'
								/>
							</div>
						)}
						<div>
							<EditableField
								label='Name'
								value={user.fullName}
								placeholder='Add your name'
							/>
							<EditableField
								label='Email'
								value={user.primaryEmailAddress?.emailAddress}
								placeholder='Add your email'
							/>
						</div>
					</div>

					<div className='border-t border-gray-700 pt-4'>
						<h4 className='text-lg font-semibold mb-2'>Contact Information</h4>
						<EditableField
							label='Phone'
							value={
								phoneNumber !== "No phone number provided" ? phoneNumber : ""
							}
							placeholder='Add your phone number'
						/>
						<EditableField
							label='Email'
							value={user.primaryEmailAddress?.emailAddress}
							placeholder='Add your email'
						/>
					</div>

					<div className='border-t border-gray-700 pt-4'>
						<h4 className='text-lg font-semibold mb-2'>Account Details</h4>
						<p>
							<strong>User ID:</strong> {user.id}
						</p>
						<p>
							<strong>Created:</strong>{" "}
							{new Date(user.createdAt).toLocaleDateString()}
						</p>
						<p>
							<strong>Last Updated:</strong>{" "}
							{new Date(user.updatedAt).toLocaleDateString()}
						</p>
					</div>

					{user.publicMetadata &&
						Object.keys(user.publicMetadata).length > 0 && (
							<div className='border-t border-gray-700 pt-4'>
								<h4 className='text-lg font-semibold mb-2'>
									Additional Information
								</h4>
								{Object.entries(user.publicMetadata).map(([key, value]) => (
									<EditableField
										key={key}
										label={key}
										value={value}
										placeholder={`Add ${key}`}
									/>
								))}
							</div>
						)}
				</div>
			</div>
		</div>
	);
};

Profile.propTypes = {
	onClose: PropTypes.func.isRequired,
};

export default Profile;
