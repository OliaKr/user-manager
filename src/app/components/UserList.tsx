import { User } from "../types";
import { UsersListProps } from "../types";
import UserCard from "./UserCard";

const UserList = ({
  isLoading,
  isError,
  users,
  onSave,
  onDelete,
}: UsersListProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40 ">
        <p>Loading...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-40">
        <p>Error loading users. Please try again.</p>
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <p>No users found matching your search.</p>
      </div>
    );
  }

  return (
    <div
      className="blurtext mt-[40px] bg-[white]/40 relative z-10 grid 
    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 backdrop-blur-[1.25rem]"
    >
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
