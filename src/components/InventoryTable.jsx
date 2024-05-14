import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";

function createData(name, trackingId, date, status) {
  return { name, trackingId, date, status };
}

const rows = [
  createData("Chicken Feed", 18908424, "2 March 2022", "Approved"),
  createData("Wood Planks", 18908424, "2 March 2022", "Pending"),
  createData("Pipes", 18908424, "2 March 2022", "Pending"),
  createData("Hay", 18908424, "2 March 2022", "Pending"),
  createData("Wiring ", 18908424, "2 March 2022", "Pending"),
  createData("Light Bulbs", 18908424, "2 March 2022", "Approved"),
  createData("Basin", 18908424, "2 March 2022", "Approved"),
  createData("Hay", 18908424, "2 March 2022", "Approved"),
  createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
  createData("Hay", 18908421, "2 March 2022", "Delivered"),
  createData("Chicken Feed", 18908421, "2 March 2022", "Delivered"),
  createData("Egg Crates", 18908421, "2 March 2022", "Delivered"),
  createData("Milk Jugs", 18908421, "2 March 2022", "Delivered"),
  createData("Milk Jugs", 18908421, "2 March 2022", "Delivered"),
  createData("Hay", 18908421, "2 March 2022", "Delivered"),
];

const makeStyle = (status) => {
  if (status === "Approved") {
    return {
      background: "rgb(145 254 159 / 47%)",
      color: "green",
    };
  } else if (status === "Pending") {
    return {
      background: "#ffadad8f",
      color: "red",
    };
  } else {
    return {
      background: "#59bfff",
      color: "white",
    };
  }
};

export default function BasicTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Calculate the height of the table container dynamically based on the number of rows and other factors
  const tableHeight = Math.min(rows.length * 53 + 73, 600);

  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029", maxHeight: tableHeight }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="left">Tracking ID</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.trackingId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span
                      className="status"
                      style={makeStyle(row.status)}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
