import React from "react";
import "./ownerCard.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

type OwnerType = {
  id: number;
  name: string;
  email:string;
  address: string;
};

interface OwnerCardProps {
  close: Function;
  owner: OwnerType;
}

const OwnerCard: React.FC<OwnerCardProps> = ({ close, owner }) => {
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
            Name: {owner.name}
          </Typography>
          <Typography variant="h5" component="div">
            Type: {owner.email}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Information: {owner.address}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/owners/${owner.id}`}
          >
            Learn More
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default OwnerCard;
