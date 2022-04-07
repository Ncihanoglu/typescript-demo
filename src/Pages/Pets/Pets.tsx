import React, { useEffect, useState } from "react";
import "./pets.css";
import { getPets } from "../../Api/Pets";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Backdrop from "../../Components/Backdrop";
import PetCard from "./PetCard/PetCard";

interface fetchData {
  id: number;
  name: string;
  type: string;
  ownerId: number;
  information: string;
}

const Pets: React.FC = () => {
  const [data, setData] = useState<fetchData[]>([]);
  const [selectedData, setSelectedData] = useState<fetchData | null>(null);
  useEffect(() => {
    getPets().then((res) => {
      setTimeout(() => {
        setData(res.data);
      }, 250);
    });
  }, []);

  const deleteSelectedData = () => {
    setSelectedData(null);
  };

  return (
    <div>
      <TableContainer>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow
                className="clickable-row"
                key={item.name}
                onClick={() => setSelectedData(item)}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedData && (
        <>
          <Backdrop>
            <PetCard close={deleteSelectedData} pet={selectedData}></PetCard>
          </Backdrop>
        </>
      )}
    </div>
  );
};

export default Pets;
