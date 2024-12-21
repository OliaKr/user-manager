import React from "react";
import { User } from "../types";
import UserCard from "./UserCard";

interface UsersListProps {
  searchTerm: string;
  isLoading: boolean;
  isError: boolean;
  users: User[];
  onSave: (updatedUser: User) => void;
  onDelete: (userId: string) => void;
}

const UserList = (props: UsersListProps) => {
  const { searchTerm, users, isError, isLoading, onSave, onDelete } = props;
  return (
    <div className="blurtext bg-[white] relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4  ">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onSave={onSave}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default UserList;
