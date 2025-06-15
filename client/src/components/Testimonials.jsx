import React from "react";

import { Box, Grid, Typography, Paper } from "@mui/material";

const Testimonials = () => {
  const testimonials = new Array(3).fill({
    text: "Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaning content placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content",
    name: "Name",
    company: "Company / Designation",
  });

  return (
    <>
      <Box my={6}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Testimonials
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {testimonials.map((t, i) => (
            <Grid size={{ xs: 2, sm: 4, md: 4 }} key={i}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="body1" mb={2}>
                  {t.text}
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  {t.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {t.company}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Testimonials;
