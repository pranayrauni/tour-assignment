import React from "react";
import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const HeroSection = () => {
  const fetchHero = async () => {
    const { data } = await axios.get("http://localhost:5000/api/hero");
    return data;
  };

  const features = ["Easy Booking", "Curated Destinations", "Trusted Support"];

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["hero"],
    queryFn: fetchHero,
  });

  if (isPending) return <Box height={300}>Loading...</Box>;
  if (isError) return <Box color="red">Error: {error.message}</Box>;

  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${data.backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "100",
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          px: 2,
        }}
      >
        
        <Box maxWidth="md">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            {data.title}
          </Typography>
          <Typography variant="h6" mb={4}>
            {data.subtitle}
          </Typography>
          <Button variant="contained" size="large" color="primary">
            Book Now
          </Button>
        </Box>



        <Box
          sx={{
            position: "absolute",
            display: "flex",
            bottom: 20,
            left: 20,
            backgroundColor: "rgba(255,255,255,0.9)",
            color: "#000",
            borderRadius: 2,
            px: 3,
            py: 2,
            textAlign: "left",
            boxShadow: 3,
          }}
        >
          {features.map((item, index) => (
            <Typography variant="body2" px={1} key={index}>
              {item}
            </Typography>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
