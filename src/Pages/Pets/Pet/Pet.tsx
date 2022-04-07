import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOwner } from "../../../Api/Owners";
import { getPet, updatePet } from "../../../Api/Pets";
import { Button, Input, InputLabel } from "@mui/material";
import "../pets.css";
const Pet: React.FC = () => {
  const { petId } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    id: null,
    name: "",
    type: "",
    information: "",
    ownerName: "",
    ownerId: null,
  });

  const loadPetAndOwner = useCallback(async () => {
    if (petId) {
      try {
        const { data } = await getPet(petId);
        console.log(data);
        const response = await getOwner(data.ownerId);
        setState({
          id: data.id,
          name: data.name,
          type: data.type,
          information: data.information,
          ownerName: response.data.name,
          ownerId: response.data.id,
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
  }, [petId]);

  useEffect(() => {
    loadPetAndOwner();
  }, [loadPetAndOwner]);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
    updatePet({ ...state }).then(() => navigate("/"));
  };

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <form onSubmit={onSubmitHandler} className="pet-form">
      <InputLabel htmlFor="pet-name">Name</InputLabel>
      <Input
        id="pet-name"
        name="name"
        value={state.name}
        onChange={onChangeHandler}
      />
      <InputLabel htmlFor="pet-type">Type</InputLabel>
      <Input
        id="pet-type"
        name="type"
        value={state.type}
        onChange={onChangeHandler}
      />
      <InputLabel htmlFor="pet-information">Information</InputLabel>
      <Input
        id="pet-information"
        name="information"
        value={state.information}
        onChange={onChangeHandler}
      />
      <InputLabel htmlFor="owner-name">Owner Name</InputLabel>
      <Input id="owner-name" value={state.ownerName} disabled />
      <Button type="submit">Update</Button>
    </form>
  );
};
export default Pet;
