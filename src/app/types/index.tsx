export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  location: string;
}

export interface ApiResponse {
  results: Array<{
    login: { uuid: string };
    name: { title: string; first: string; last: string };
    email: string;
    picture: { medium: string };
    location: {
      street: { name: string; number: string };
      city: string;
      country: string;
    };
  }>;
}

export interface UsersListProps {
  isLoading: boolean;
  isError: boolean;
  users: User[];
  onSave: (updatedUser: User) => void;
  onDelete: (userId: string) => void;
}

export interface UserCardProps {
  user: User;
  onSave: (updatedUser: User) => void;
  onDelete: (userId: string) => void;
}

export interface SearchUsersProps {
  setSearchTerm: (term: string) => void;
}

export interface ExportButtonsProps {
  users: User[];
}

export interface DeleteUserModalProps {
  user: User;
  onClose: () => void;
  onDelete: () => void;
}

export interface AddNewUserModalProps {
  onClose: () => void;
  onSave: (newUser: User) => void;
}

export interface EditUserModalProps {
  user: User;
  onClose: () => void;
  onSave: (updatedUser: User) => void;
}
