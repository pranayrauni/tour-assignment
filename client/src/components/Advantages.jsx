import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

import {
  FaRegClock,
  FaMoneyBillWave,
  FaHandshake,
  FaListAlt,
} from "react-icons/fa";

const Advantages = () => {
  const advantages = [
    {
      icon: <FaRegClock size={32} color="#1976d2" />,
      title: "Save Time",
      desc: "No more switching for packages or plans.",
    },
    {
      icon: <FaMoneyBillWave size={32} color="#1976d2" />,
      title: "Save Money",
      desc: "Compare, negotiate, and choose the best.",
    },
    {
      icon: <FaHandshake size={32} color="#1976d2" />,
      title: "Trusted Network",
      desc: "A Trusted Network of 7000+ Travel Agents",
    },
    {
      icon: <FaListAlt size={32} color="#1976d2" />,
      title: "Multiple Options",
      desc: "Itineraries & Travel Tips from Trusted Agents",
    },
  ];
  return (
    <>
      <Box my={6} bgcolor={"aqua"} sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h4" textAlign="center" pt={4} gutterBottom>
          Our Advantages
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          color="text.secondary"
          maxWidth="md"
          mx="auto"
          mb={4}
        >
          You can rely on our experience and the quality of services we provide.
          Here are other reasons to book tours at Treat Holidays
        </Typography>

        <Grid container  padding={5}  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {advantages.map((adv, i) => (
            <Grid size={3} key={i}>
              <Paper elevation={2} sx={{ p: 6, height: '10rem', textAlign: "center" }}>
                <Box mb={2}>{adv.icon}</Box>
                <Typography variant="h6">{adv.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {adv.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Advantages;
