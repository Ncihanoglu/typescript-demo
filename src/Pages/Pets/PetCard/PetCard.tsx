import React from "react";
import "./petCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

type PetType = {
  name: string;
  type: string;
  id: number;
  ownerId: number;
  information: string;
};

interface PetCardProps {
  close: Function;
  pet: PetType;
}

const PetCard: React.FC<PetCardProps> = ({ close, pet }) => {
  return (
    <div className="card-container">
      <Card sx={{ minWidth: 275 }}>
        <div className="close-container">
          <div className="close-icon" onClick={() => close(null)}>
            x
          </div>
        </div>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Name: {pet.name}
          </Typography>
          <Typography variant="h5" component="div">
            Type: {pet.type}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Information: {pet.information}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/pets/${pet.id}`}
          >
            Learn More
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default PetCard;
