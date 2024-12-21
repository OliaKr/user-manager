import React from "react";
import { User } from "../types";
import UserCard from "./UserCard";

interface UsersListProps {
  searchTerm: string;
  isLoading: boolean;
  isError: boolean;
  users: User[];
}

const UserList = (props: UsersListProps) => {
  const { searchTerm, users, isError, isLoading } = props;
  return (
    <div className="blurtext bg-[white] relative z-10 p-[20px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4  ">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
};

export default UserList;
