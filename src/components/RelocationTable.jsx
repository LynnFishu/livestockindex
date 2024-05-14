import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";

//To create relocation record data
function createRelocationRecord(animalId, fromLot, toLot, date) {
  return { animalId, fromLot, toLot, date };
}

const relocationRecords = [
  createRelocationRecord("1234", "Lot 4", "Lot 9", "2022-03-15"),
  createRelocationRecord("5678", "Lot 7", "Lot 3", "2022-03-17"),
  createRelocationRecord("91011", "Lot 2", "Lot 6", "2022-03-20"),
  createRelocationRecord("121314", "Lot 5", "Lot 8", "2022-03-22"),
  // Add more relocation records as needed
];

const RelocationTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const tableHeight = Math.min(relocationRecords.length * 53 + 73, 600);

  return (
    <div className="Table">
      <h3>Relocation Records</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029", maxHeight: tableHeight }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Animal ID</TableCell>
              <TableCell align="left">From Lot</TableCell>
              <TableCell align="left">To Lot</TableCell>
              <TableCell align="left">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {relocationRecords
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((record, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {record.animalId}
                  </TableCell>
                  <TableCell align="left">{record.fromLot}</TableCell>
                  <TableCell align="left">{record.toLot}</TableCell>
                  <TableCell align="left">{record.date}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25]}
        component="div"
        count={relocationRecords.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default RelocationTable;
