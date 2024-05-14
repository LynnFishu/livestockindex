import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";

// Function to create expense record data
function createExpenseRecord(name, amount, date, category) {
  return { name, amount, date, category };
}

const expenseRecords = [
  createExpenseRecord("Chicken Feed", 150, "2022-03-02", "Food"),
  createExpenseRecord("Wood Planks", 300, "2022-03-05", "Construction"),
  createExpenseRecord("Veterinary Services", 200, "2022-03-10", "Healthcare"),
  // Add more expense records as needed
];

const ExpenseRecordTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const tableHeight = Math.min(expenseRecords.length * 53 + 73, 600);

  return (
    <div className="Table">
      <h3>Expense Records</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029", maxHeight: tableHeight }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Expense Item</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Category</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenseRecords
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((record, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {record.name}
                  </TableCell>
                  <TableCell align="left">${record.amount}</TableCell>
                  <TableCell align="left">{record.date}</TableCell>
                  <TableCell align="left">{record.category}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25]}
        component="div"
        count={expenseRecords.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default ExpenseRecordTable;
