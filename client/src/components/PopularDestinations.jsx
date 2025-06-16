import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Skeleton,
  Box,
  CardMedia,
} from "@mui/material";

const PopularDestinations = () => {

  const API = import.meta.env.VITE_API_BASE_URL;

  const fetchDestinations = async () => {
    const { data } = await axios.get(`${API}/api/destinations`);
    return data;
  };
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["destinations"],
    queryFn: fetchDestinations,
  });

  if (isPending) {
    return (
      <Grid container spacing={3}>
        {[...Array(6)].map((_, i) => (
          <Grid size={4} key={i}>
            <Skeleton variant="rectangular" height={100} />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (isError)
    return null;

  return (
    <Box my={6} px={2}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Explore Most Popular Destinations
      </Typography>
      <Typography
        variant="subtitle1"
        textAlign="center"
        color="text.secondary"
        maxWidth="md"
        mx="auto"
        mb={4}
      >
        Plan your perfect trip with our most loved and best-selling tour
        packages.
      </Typography>
      <Grid container  spacing={3}>
        {data.map((dest, i) => (
          <Grid size={4} key={i}>
            <Card>
              <CardMedia
                component="img"
                height="160"
                image={dest.image}
                alt={dest.name}
              />
              <CardContent sx={{display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
                <Typography variant="h6">{dest.name}</Typography>
                <Typography variant="body2" color="text.secondary" py={1}>
                  {dest.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularDestinations;
