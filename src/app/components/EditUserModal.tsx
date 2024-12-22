"use client";
import ReactDOM from "react-dom";
import React, { useState } from "react";
import { User } from "../types";

interface EditUserModalProps {
  user: User;
  onClose: () => void;
  onSave: (updatedUser: User) => void;
}

const EditUserModal = ({ user, onClose, onSave }: EditUserModalProps) => {
  const [formData, setFormData] = useState(user);
  const [errors, setErrors] = useState<Partial<User>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<User> = {};
    if (!formData.name || formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters long.";
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.location) {
      newErrors.location = "Location cannot be empty.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave(formData);
    }
  };

  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md sm:max-w-lg p-6 mx-4 sm:mx-6">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <form>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              className={`w-full px-3 py-2 border rounded ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              className={`w-full px-3 py-2 border rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          {/* Location Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              className={`w-full px-3 py-2 border rounded ${
                errors.location ? "border-red-500" : "border-gray-300"
              }`}
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location}</p>
            )}
          </div>
        </form>
        <div className="flex justify-end gap-4 mt-6">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default EditUserModal;
