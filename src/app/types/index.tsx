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
