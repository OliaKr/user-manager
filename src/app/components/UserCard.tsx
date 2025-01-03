import { useState } from "react";
import { UserCardProps } from "../types";
import EditUserModal from "./EditUserModal";
import DeleteUserModal from "./DeleteUserModal";
import Image from "next/image";

const UserCard = (props: UserCardProps) => {
  const { user, onSave, onDelete } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <div className="transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-out hover:bg-purple-100">
      <div
        key={user.id}
        className="border rounded-lg shadow-lg p-6 flex flex-col items-center bg-[#ffffff99] h-full"
      >
        <Image
          src={user.image || "/default-image.png"}
          alt={user.name || "User image"}
          className="rounded-full w-24 h-24 mb-4"
          width={300}
          height={300}
        />
        <div className="text-center mb-4 flex-grow">
          <h3 className="text-lg font-bold mb-2 ">{user.name}</h3>
          <p className="text-sm text-[#ee28c7] font-bold">{user.email}</p>
          <p className="text-sm text-gray-600">{user.location}</p>
        </div>
        <div className="flex gap-4 mt-4">
          <button
            type="button"
            className="flex-1 text-yellow-500 hover:text-white border border-yellow-500 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all"
            onClick={() => setIsModalOpen(true)}
          >
            Edit
          </button>
          <button
            type="button"
            className="flex-1 text-red-500 hover:text-white border border-red-500 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-all"
            onClick={() => setIsDeleteModalOpen(true)}
          >
            Delete
          </button>
        </div>
      </div>
      {isModalOpen && (
        <EditUserModal
          user={user}
          onClose={() => setIsModalOpen(false)}
          onSave={(updatedUser) => {
            onSave(updatedUser);
            setIsModalOpen(false);
          }}
        />
      )}
      {isDeleteModalOpen && (
        <DeleteUserModal
          user={user}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={() => {
            onDelete(user.id);
            setIsDeleteModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default UserCard;
