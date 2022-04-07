import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOwner, updateOwner } from "../../../Api/Owners";
import { Button, Input, InputLabel } from "@mui/material";
import "../owners.css";
const Owner: React.FC = () => {
  const { ownerId } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    id: null,
    name: "",
    address: "",
    email: "",
  });

  const loadOwner = useCallback(async () => {
    if (ownerId) {
      try {
        const { data } = await getOwner(ownerId);
        setState({
          id: data.id,
          name: data.name,
          address: data.address,
          email: data.email,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [ownerId]);

  useEffect(() => {
    loadOwner();
  }, [loadOwner]);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(state);
    updateOwner({ ...state }).then(() => navigate("/"));
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
      <InputLabel htmlFor="pet-type">Email</InputLabel>
      <Input
        id="pet-type"
        name="type"
        value={state.email}
        onChange={onChangeHandler}
      />
      <InputLabel htmlFor="pet-information">Address</InputLabel>
      <Input
        id="pet-information"
        name="information"
        value={state.address}
        onChange={onChangeHandler}
      />
      <Button type="submit">Update</Button>
    </form>
  );
};
export default Owner;
