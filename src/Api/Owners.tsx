import axios from "axios";

interface Owner {
  id: number | null;
  name: string;
  address: string;
  email: string;
}

export const getOwners = () => {
  return axios.get("http://localhost:3001/users");
};

export const getOwner = (id: string) => {
  return axios.get(`http://localhost:3001/users/${id}`);
};

export const updateOwner = (data: Owner) => {
  return axios.put(`http://localhost:3001/users/${data.id}`, {
    name: data.name,
    email: data.email,
    address: data.address,
  });
};
