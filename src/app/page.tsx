"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchUsers from "./components/SearchUsers";
import AddUserButton from "./components/AddUserButton";
import { User } from "./types";
import { ApiResponse } from "./types";
import UserList from "./components/UserList";

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
  return (
    <div className="container mx-auto px-4 ">
      {/* Background Circle */}
      <div
        className="circlePosition w-[300px] sm:w-[590px] h-[200px] sm:h-[400px] bg-[#ec5ff9] rounded-[100%] absolute 
        z-[-1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[100px] sm:blur-[150px]"
      ></div>

      {/* Header */}
      <div className="center m-auto w-[90%] sm:w-[70%]">
        <div className="centerText">
          <h2 className="text-[36px] sm:text-[50px] font-bold text-[#f323db] text-center mt-8 sm:mt-[30px] mb-4 sm:mb-[0.35rem]">
            User Manager Pro
          </h2>
          <p className="info text-center text-[16px] text-[#706f6f]">
            Easily Manage and Customize Users.
          </p>
        </div>
      </div>

      {/* Search and Add User Button */}
      <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-between mb-6 ">
        <div className="w-full justify-center sm:w-1/4">
          <SearchUsers />
        </div>
        <AddUserButton />
      </div>
      <UserList
        isError={isError}
        isLoading={isLoading}
        users={users}
        searchTerm={searchTerm}
      />
    </div>
  );
}
