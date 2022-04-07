import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getOwners } from "../../Api/Owners";
import Backdrop from "../../Components/Backdrop";
import OwnerCard from "./OwnerCard/OwnerCard";
import './owners.css';
interface fetchData {
  id: number;
  name: string;
  email: string;
  ownerId: number;
  address: string;
}

const Owners: React.FC = () => {
  const [data, setData] = useState<fetchData[]>([]);
  const [selectedData, setSelectedData] = useState<fetchData | null>(null);
  useEffect(() => {
    getOwners().then((res) => {
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
              <TableCell align="right">Address</TableCell>
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
                <TableCell align="right">{item.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedData && (
        <>
          <Backdrop>
          <OwnerCard close={deleteSelectedData} owner={selectedData}/>
          </Backdrop>
        </>
      )}
    </div>
  );
};

export default Owners;
