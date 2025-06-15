import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Skeleton,
  Button,
} from "@mui/material";

const TopSellingPackages = () => {

  const fetchPackages = async () => {
    const { data } = await axios.get(
      "http://localhost:5000/api/packages/top-selling"
    );
    return data;
  };

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["topPackages"],
    queryFn: fetchPackages,
  });

  if (isPending) {
    return (
      <Grid container spacing={2}>
        {[...Array(6)].map((_, i) => (
          <Grid xs={12} sm={6} md={4} key={i}>
            <Skeleton variant="rectangular" height={200} />
          </Grid>
        ))}
      </Grid>
    );
  }

  if (isError) {
    return null;
  }

  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        <Typography variant="h4" align="center" gutterBottom>
          Top Selling Tour Packages of India
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          color="text.secondary"
          maxWidth="md"
          mx="auto"
          mb={4}
        >
          Stay updated with our latest news and happenings through Informe.
        </Typography>
        <Grid container spacing={3}>
          {data.map((pkg, i) => (
            <Grid size={4} key={i}>
              <Card>
                <CardMedia
                  component="img"
                  height="160"
                  image={pkg.image}
                  alt={pkg.title}
                />
                <CardContent sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                  <Typography variant="h6" gutterBottom>
                    {pkg.title}
                  </Typography>
                  <Button size="small" variant="outlined" color="primary">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default TopSellingPackages;
