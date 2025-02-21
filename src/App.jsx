import { Fragment, useEffect, useState } from "react";
import "./App.css";
import { calculate } from "./utils/functions";
import { Box, Container, Typography } from "@mui/material";
import MyTable from "./components/MyTable";

function App() {
  const data = [
    {
      name: "Mr.A",
      position: "Project Lead",
      workHr: [
        { day1: "mon", hr: 8 },
        { day2: "tue", hr: 10 },
        { day3: "wed", hr: 8 },
        { day4: "thu", hr: 8 },
        { day5: "fri", hr: 8 },
        { day6: "sat", hr: 4 },
        { day7: "sun", hr: 0 },
        { day8: "mon", hr: 8 },
        { day9: "tue", hr: 8 },
        { day10: "wed", hr: 0 },
      ],
    },
    {
      name: "Mr.B",
      position: "Employee",
      workHr: [
        { day1: "mon", hr: 4 },
        { day2: "tue", hr: 5 },
        { day3: "wed", hr: 4 },
        { day4: "thu", hr: 8 },
        { day5: "fri", hr: 8 },
        { day6: "sat", hr: 0 },
        { day7: "sun", hr: 10 },
        { day8: "mon", hr: 8 },
        { day9: "tue", hr: 8 },
        { day10: "wed", hr: 0 },
      ],
    },
    {
      name: "Mr.c",
      position: "Employee",
      workHr: [
        { day1: "mon", hr: 4 },
        { day2: "tue", hr: 5 },
        { day3: "wed", hr: 4 },
        { day4: "thu", hr: 8 },
        { day5: "fri", hr: 8 },
        { day6: "sat", hr: 0 },
        { day7: "sun", hr: 10 },
        { day8: "mon", hr: 8 },
        { day9: "tue", hr: 8 },
        { day10: "wed", hr: 0 },
      ],
    },
  ];

  const [newData, setNewData] = useState([]);

  useEffect(() => {
    setNewData(calculate(data));
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ p: 4 }}>
        <MyTable />
        <Box
          sx={{
            p: 2,
            borderRadius: 2,
            display: "grid",
            gridTemplateColumns: { xs: '1fr', md: "1fr 1fr 1fr" },
            gap: 2,
          }}
        >
          {newData.map((item, index) => {
            return (
              <Fragment key={index}>
                <Box
                  sx={{
                    p: 2,
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    backgroundColor: "#f5f5f5",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h5">{item.name}</Typography>
                  <Typography variant="h6">{item.position}</Typography>
                  <Typography variant="h4">{item.totalSalary} บาท</Typography>
                </Box>
              </Fragment>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}

export default App;
