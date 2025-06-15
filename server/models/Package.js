import mongoose from "mongoose";

const packageSchema = new mongoose.Schema({
    title: {
        type: String
    },
    image: {
        type: String
    }
});

export default mongoose.model('Package', packageSchema);