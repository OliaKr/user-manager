"use client";
import ReactDOM from "react-dom";
import { DeleteUserModalProps } from "../types";

const DeleteUserModal = ({ user, onClose, onDelete }: DeleteUserModalProps) => {
  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 mx-4 sm:mx-6">
        <h2 className="text-xl font-bold mb-4 text-center">Are you sure?</h2>
        <p className="text-gray-700 text-center mb-6">
          This action is irreversible. It will permanently delete{" "}
          <strong>{user.name}</strong>&apos;s account.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded w-full sm:w-auto"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default DeleteUserModal;
