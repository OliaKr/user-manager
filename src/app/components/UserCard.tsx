import React from "react";
import { User } from "../types";
interface UserCardProps {
  user: User;
}

const UserCard = (props: UserCardProps) => {
  const { user } = props;
  return (
    <div>
      <div
        key={user.id}
        className="border rounded-lg shadow-lg p-4 flex flex-col items-center"
      >
        <img
          src={user.image}
          alt={user.name}
          className="rounded-full w-24 h-24 mb-4"
        />
        <h3 className="text-lg font-bold">{user.name}</h3>
        <p className="text-sm text-gray-600">{user.email}</p>
        <p className="text-sm text-gray-600">{user.location}</p>
      </div>
    </div>
  );
};

export default UserCard;
