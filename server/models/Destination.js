import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: String
    },
    image: {
        type: String
    }
});

export default mongoose.model('Destination', destinationSchema);