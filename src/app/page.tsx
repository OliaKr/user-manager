"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchUsers from "./components/SearchUsers";
import { User } from "./types";
import { ApiResponse } from "./types";
import UserList from "./components/UserList";
import AddNewUserModal from "./components/AddNewUserModal";
import ExportButtons from "./components/ExportButtons";

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://randomuser.me/api/?results=10");
  const data: ApiResponse = await response.json();
  return data.results.map((user) => ({
    id: user.login.uuid,
    name: `${user.name.title} ${user.name.first} ${user.name.last}`,
    email: user.email,
    image: user.picture.medium,
    location: `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.country}`,
  }));
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const {
    data: fetchedUsers = [],
    isLoading,
    isError,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  useEffect(() => {
    if (fetchedUsers?.length && users.length === 0) {
      setUsers(fetchedUsers);
    }
  }, [fetchedUsers, users]);

  const handleSaveUser = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const handleAddUser = (newUser: User) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setIsAddModalOpen(false);
  };

  const handleDeleteUser = (userId: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 ">
      <div
        className="circlePosition w-[18.75rem] sm:w-[36.875rem] h-[12.5rem] sm:h-[25rem] bg-[#ec5ff9] rounded-[100%] absolute 
        z-[-1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[150px] "
      ></div>
      <div className="center m-auto w-[90%] sm:w-[70%]">
        <div className="centerText">
          <h2 className="text-[2.25rem] sm:text-[3.125rem] font-bold text-[#f323db] text-center mt-8 sm:mt-[1.875rem] mb-4 sm:mb-[0.35rem]">
            User Manager Pro
          </h2>
          <p className="info text-center text-[1rem] text-[#706f6f]">
            Easily Manage and Customize Users.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-between mb-6 mt-[0.9375rem] sm:mt-[2.5rem] ">
        <div className="w-full justify-center sm:w-1/4">
          <SearchUsers setSearchTerm={setSearchTerm} />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-4 sm:justify-end">
          <button
            type="button"
            className="w-auto px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 transition sm:text-sm sm:px-4 sm:py-2"
            onClick={() => setIsAddModalOpen(true)}
          >
            Add User
          </button>
          <ExportButtons users={users} />
        </div>
      </div>
      <UserList
        isError={isError}
        isLoading={isLoading}
        users={filteredUsers}
        onSave={handleSaveUser}
        onDelete={handleDeleteUser}
      />
      {isAddModalOpen && (
        <AddNewUserModal
          onClose={() => setIsAddModalOpen(false)}
          onSave={handleAddUser}
        />
      )}
    </div>
  );
}
