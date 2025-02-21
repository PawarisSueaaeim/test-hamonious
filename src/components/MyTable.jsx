import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(position, sun, mon, tue, wed, thu, fri, sat) {
  return { position, sun, mon, tue, wed, thu, fri, sat };
}

const rows = [
  createData("Project Lead", 150, 100, 100, 100, 100, 100, 120),
  createData("Employee", 100, 40, 40, 40, 40, 40, 60),
];

export default function MyTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Position/Day</TableCell>
            <TableCell align="center">Sun</TableCell>
            <TableCell align="center">Mon</TableCell>
            <TableCell align="center">Tue</TableCell>
            <TableCell align="center">Wed</TableCell>
            <TableCell align="center">Thu</TableCell>
            <TableCell align="center">Fri</TableCell>
            <TableCell align="center">Sat</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.position}
              </TableCell>
              <TableCell align="center">{row.sun}</TableCell>
              <TableCell align="center">{row.mon}</TableCell>
              <TableCell align="center">{row.tue}</TableCell>
              <TableCell align="center">{row.wed}</TableCell>
              <TableCell align="center">{row.thu}</TableCell>
              <TableCell align="center">{row.fri}</TableCell>
              <TableCell align="center">{row.sat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
