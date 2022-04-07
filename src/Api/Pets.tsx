import axios from "axios";

interface Pet {
  id: number | null;
  name: string;
  type: string;
  information: string;
  ownerId:number|null
}

export const getPets = () => {
  return axios.get("http://localhost:3001/pets");
};

export const getPet = (id: string) => {
  return axios.get(`http://localhost:3001/pets/${id}`);
};

export const updatePet = (data: Pet) => {
  return axios.put(`http://localhost:3001/pets/${data.id}`, {
    name: data.name,
    type: data.type,
    information: data.information,
    ownerId:data.ownerId
  });
};
