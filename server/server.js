import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import Destination from "./models/Destination.js";
import Package from "./models/Package.js";
import destinationsRoute from "./routes/destinations.js";
import packagesRoute from "./routes/packages.js";
import Hero from "./models/Hero.js";
import heroRoute from "./routes/hero.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
app.get('/ping', (req, res) => {
    res.send('I am from backend');
})

 
const mockData = {
  hero: [
    {
      title: "Discover Your Next Adventure",
      subtitle:
        "Choose from our curated experiences, customized for every kind of traveler.",
      backgroundImage:
        "https://res.cloudinary.com/dilrbbzkj/image/upload/v1749985857/babak-fakhamzadeh-PO7CGnoDFUI-unsplash_afgl29.jpg",
    },
  ],
  destinations: [
    {
      name: "Jammu & Kashmir",
      price: "Starting from ₹4999/-",
      image:
        "https://res.cloudinary.com/dilrbbzkj/image/upload/v1749926070/jk_otyoq6.jpg",
    },
    {
      name: "Himachal Pradesh",
      price: "Starting from ₹4999/-",
      image:
        "https://res.cloudinary.com/dilrbbzkj/image/upload/v1749926050/himachal_afopgs.jpg",
    },
    {
      name: "Goa",
      price: "Starting from ₹4999/-",
      image:
        "https://res.cloudinary.com/dilrbbzkj/image/upload/v1749926016/goa_qk1pit.jpg",
    },
    {
      name: "Assam",
      price: "Starting from ₹4999/-",
      image:
        "https://res.cloudinary.com/dilrbbzkj/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749925950/assam_c7epvz.jpg",
    },
    {
      name: "Maharashtra",
      price: "Starting from ₹4999/-",
      image:
        "https://res.cloudinary.com/dilrbbzkj/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749925920/maharashtra_lusbep.jpg",
    },
    {
      name: "Kerala",
      price: "Starting from ₹4999/-",
      image:
        "https://res.cloudinary.com/dilrbbzkj/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749925865/kerala_bie9fc.jpg",
    },
  ],
  packages: [
    {
      title: "Golden Temple Tour",
      image:
        "https://res.cloudinary.com/dilrbbzkj/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749939419/golden-temple_ztxxdr.webp",
    },
    {
      title: "Amazing Kerala Tour",
      image:
        "https://res.cloudinary.com/dilrbbzkj/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749925865/kerala_bie9fc.jpg",
    },
    {
      title: "Kashmir Holiday Tour",
      image:
        "https://res.cloudinary.com/dilrbbzkj/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749926070/jk_otyoq6.jpg",
    },
    {
      title: "Rajasthan Tour",
      image:
        "https://res.cloudinary.com/dilrbbzkj/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749939395/rajasthan_h57nsy.jpg",
    },
    {
      title: "Trip to Goa",
      image:
        "https://res.cloudinary.com/dilrbbzkj/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749926016/goa_qk1pit.jpg",
    },
    {
      title: "Nainital Escape",
      image:
        "https://res.cloudinary.com/dilrbbzkj/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1749939372/nainital_iyie6a.jpg",
    },
  ],
};

async function insertMockDataIfEmpty() {
  const destinationCount = await Destination.countDocuments();
  const packageCount = await Package.countDocuments();
  const heroCount = await Hero.countDocuments();

  if (destinationCount === 0) {
    await Destination.insertMany(mockData.destinations);
    console.log("Destinations inserted");
  }

  if (packageCount === 0) {
    await Package.insertMany(mockData.packages);
    console.log("packages inserted");
  }

  if(heroCount === 0) {
    await Hero.insertMany(mockData.hero);
    console.log("hero data inserted")
  }
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("mongodb atlas connected");
    await insertMockDataIfEmpty();
    app.listen(PORT, () => console.log(`server running at port: ${PORT}`));
  })
  .catch((err) => console.log('mongodb error',err));

app.use("/api/destinations", destinationsRoute);
app.use("/api/packages/top-selling", packagesRoute);
app.use("/api/hero", heroRoute);    
